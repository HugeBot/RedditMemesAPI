import { NowRequest, NowResponse } from '@now/node'
import { getRandomMeme, Meme } from '@blad3mak3r/reddit-memes';

export default async (req: NowRequest, res: NowResponse) => {

    const { query: { subreddit } } = req;

    try {
        const meme: Meme = await getRandomMeme(subreddit.toString());

        res.statusCode = 200;
        res.json(meme)
    
    } catch (e) {
        console.log(e)
        res.statusCode = 500;
        res.json({})
    }
}