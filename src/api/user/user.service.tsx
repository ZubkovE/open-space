import axios from "axios";
import { User } from "../models/userInterface";
import { BACK_URL, BOT_URL } from "../../utils/consts";



export const getUser  = async (id: number| undefined): Promise<User> => {
    const user = await axios.get<User>(BACK_URL + "api/users/" + id);
    return user.data;
} 

export const checkSubscribe = async (id: number| undefined): Promise<number> => {
    const response = await axios.get<number>(BOT_URL + "api/tg_bot/members/" + id);
    return response.data;
}