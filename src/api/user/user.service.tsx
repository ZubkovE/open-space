import axios from "axios";
import { User } from "../models/userInterface";
import { BASE_URL } from "../../utils/consts";



export const getUser  = async (id: number| undefined): Promise<User> => {
    const user = await axios.get<User>(BASE_URL + "api/users/" + id);
    return user.data;
} 

