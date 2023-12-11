import express from "express";
import mongoose from "mongoose";
import { user } from "./gymSchema.js";
import cors from 'cors';
import { Admin } from "./AdminModal.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
const app = express();




app.use(express.json());
app.use(cors())

function verifyToken(request, response, next){
  const header = request.get('Authorization');
  if(header){
    const token = header.split(" ")[1]
    jwt.verify(token , "Token@123", (error, payload)=>{
      if (error) {
        response.status(401).send({message: "invalid Token"})
      } else {
        next();
      }
    })
  }
  else{
    response.status(401).send({message: "Please Login First"})
  }
}
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/gymdb");
    console.log("DATABASE CONNECTION CREATED");
  } catch (error) {
    console.log(error);
  }
};

app.post("/gymdb/admin", async (request, response) => {
  try {
    const reqData = request.body;
    reqData['password'] = bcrypt.hashSync(reqData.password, 10);
    const admin = new Admin(reqData);
    await admin.save();
    response.send({ message: "ADMIN REGISTERED SUCCESSFULLY" });
  } catch (error) {
    response.send("SOMETHING WENT WRONG !!!");
  }
});

app.post("/gymdb/admin",verifyToken, async (request, response)=>{
  try {
    const admin = await Admin.findOne({email: request.body.email})
    if(admin){
      if(bcrypt.compareSync(request.body.password, admin.password)){
        const token = jwt.sign({adminEmail : admin.email}, "Token@123")
          response.send({ message: "LOGIN SUCCESSFULL" , token:token});
        
      }
      else{
        response.status(404).send({ message: "INVALID PASSWORD" });
      }
    }
    else{
      response.status(500).send({ message: "INVALID PASSWORD" });
    }
  } catch (error) {
    response.send("SOMETHING WENT WRONG !!!");
  }
})
//Registeration
app.post("/gymdb/register", async (request, response) => {
  try {
    const reqData = request.body;
    const result = new user(reqData);
    await result.save();
    response.send({ message: "CLIENT REGISTERED SUCCESSFULLY" });
  } catch (error) {
    response.status(404).send("SOMETHING WENT WRONG !!!");
  }
});

app.get("/gymdb/register", async (request, response) => {
  try {
    const clients = await user.find();
    response.send({ customers: clients });
  } catch (error) {
    response.status(404).send("SOMETHING WENT WRONG !!!");
  }
});

app.delete("/gymdb/register/:name", async (request, response) => {
  try {
    const deletedUser = await user.delete({ email: request.params.name });

    if (deletedUser.deletedCount === 0) {
      console.log("User Not Found:", request.params.name);
      response.status(404).send({ message: "User Not Found" });
    } else {
      response.send({ message: "User Deleted" });
    }
  } catch (error) {
    response.status(500).send("Something went wrong");
  }
});

app.listen(4600, () => {
  console.log("Server has started");
  connectDb();
});
