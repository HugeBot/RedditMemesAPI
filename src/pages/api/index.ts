import { NowRequest, NowResponse } from '@now/node'
import { Meme, getLocalRandomMeme, getRandomMeme } from '@blad3mak3r/reddit-memes';

export default async (req: NowRequest, res: NowResponse) => {

    try {
        let meme: Meme;

        switch(req.query.lang) {
            case "en":
                meme = await getLocalRandomMeme("en");
                break;
            case "es":
                meme = await getLocalRandomMeme("es");
                break;
            case "de":
                meme = await getLocalRandomMeme("de");
                break;
            case "fr":
                meme = await getLocalRandomMeme("fr");
                break;
            case "it":
                meme = await getLocalRandomMeme("it");
                break;
            case "ru":
                meme = await getLocalRandomMeme("ru");
                break;
            default:
                meme = await getRandomMeme();
        }

        res.statusCode = 200;
        res.json(meme)
    
    } catch (e) {
        console.log(e)
        res.statusCode = 500;
        res.json({
            error: 500
        })
    }
}
