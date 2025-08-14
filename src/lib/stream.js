import { StreamChat } from 'stream-chat';
import dotenv from 'dotenv';
dotenv.config();


const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.error("Stream api key or secret key is missing ");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.error("Error in upserting stream user:", error);
    }
};

//do it later
export const generateStreamToken = (userId) => { };