import axios, { AxiosError } from "axios";

const tg =Telegram.WebApp
export const getPlanetImage = async (url: string | undefined): Promise<string | undefined> => {
    if (url) {
        try
        {const blobResponse = await axios.get<Blob>(url, { responseType: "blob" });
        return URL.createObjectURL(blobResponse.data);}
        catch (error) {
            tg.showAlert("Ошибка при получении изображения:"
            + ((error as AxiosError).response?.status) + "\n" 
            + ((error as AxiosError).response?.statusText) +"\n"
            + ((error as AxiosError).response?.headers) + "\n"
            + ((error as AxiosError).response?.data) + "\n"
            )
        }
    }
    return undefined;
} 