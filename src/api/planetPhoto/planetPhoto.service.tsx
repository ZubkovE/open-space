import axios from "axios";

export const getPlanetImage = async (url: string | undefined): Promise<string | undefined> => {
    if (url) {
        const blobResponse = await axios.get<Blob>(url, { responseType: "blob" });
        return URL.createObjectURL(blobResponse.data);
    }
    return undefined;
} 