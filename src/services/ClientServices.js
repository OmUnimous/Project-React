// ClientServices.js
import axios from "axios";

export async function fetchClients() {
  try {
    const response = await axios.get("http://127.0.0.1:4600/gymdb/register");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
