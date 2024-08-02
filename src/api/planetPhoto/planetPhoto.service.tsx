import axios from "axios";

const tg =Telegram.WebApp
export const getPlanetImage = async (url: string | undefined): Promise<string | undefined> => {
    if (url) {
        try
        {const blobResponse = await axios.get<Blob>(url, { responseType: "blob" });
        return URL.createObjectURL(blobResponse.data);}
        catch (error) {
            tg.showAlert("Ошибка при получении изображения")
        }
    }
    return undefined;
} 