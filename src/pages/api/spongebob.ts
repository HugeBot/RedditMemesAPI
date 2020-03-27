import { NowRequest, NowResponse } from '@now/node'
import Axios from 'axios';
import { randomNumber, checkURL } from '../../utils';
import { Meme } from '../../interfaces/Meme';

export default async (req: NowRequest, res: NowResponse) => {

    try {
        const result = await Axios.get(`https://www.reddit.com/r/BikiniBottomTwitter/hot/.json?count=100`)

        if(result.status == 200) {
            const children = result.data.data.children;
            let post = children[randomNumber(children.length)].data;

            // While url is not image select another one
            while(!checkURL(post.url)) {
                post = children[randomNumber(children.length)].data;
            }

            res.statusCode == 200;
            res.json(new Meme(post))
        } else {
            res.statusCode == res.statusCode;
            res.json(result.data);
        }
    } catch (e) {
        console.log(e)
        res.statusCode = 500;
        res.json({})
    }
}