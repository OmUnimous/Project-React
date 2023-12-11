// ClientServices.js
import axios from "axios";
import { BASE_URL } from "./ApiConstatnt";



export async function fetchClients() {
  try {
    const response = await axios.get("http://127.0.0.1:4600/gymdb/register");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClient(name) {
  try {
    console.log("Deleting Name:",name)
    const response = await axios.delete(`http://127.0.0.1:4600/gymdb/register/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateClient(updatedData,name){
    try {
      const response = await axios.put(`${BASE_URL}/gymdb/register/${name}`, updatedData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
}