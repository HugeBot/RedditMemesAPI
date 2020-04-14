import { NowRequest, NowResponse } from '@now/node'
import Axios from 'axios';
import { getRandomMeme, Meme } from '@blad3mak3r/reddit-memes';

export default async (req: NowRequest, res: NowResponse) => {

    try {
        const meme: Meme = await getRandomMeme("animemes");

        res.statusCode = 200;
        res.json(meme)
    
    } catch (e) {
        console.log(e)
        res.statusCode = 500;
        res.json({})
    }
}