import { NowRequest, NowResponse } from '@now/node'
import Axios from 'axios';
import { randomNumber, checkURL } from '../../utils';

const subreddits = {
    en: ["memes", "dankmemes", "meirl"],
    es: ["memesesp", "memesenespanol", "spanishmeme"],
    fr: ["FrenchMemes"],
    ru: ["CommunismMemes", "YouSeeComrade"],
    de: ["GermanMemes"],
    it: ["italianmemes"],
    mx: ["MexicanMemes"]
}

export default async (req: NowRequest, res: NowResponse) => {

    try {
        const result = await Axios.get(`https://www.reddit.com/r/${randomReddit(req.query["lang"])}/hot/.json?count=100`)

        if(result.status == 200) {
            const children = result.data.data.children;
            let post = children[randomNumber(children.length)].data;

            // While url is not image select another one
            while(!checkURL(post.url)) {
                post = children[randomNumber(children.length)].data;
            }

            const response = {
                id: post.id,
                subreddit: post.subreddit,
                title: post.title,
                author: post.author,
                image: post.url,
                ups: post.ups,
                downs: post.downs,
                score: post.score,
                created_utc: post.created_utc
            }

            res.statusCode == 200;
            res.json(response)
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


// Get a random subreddit from the list
function randomReddit(lang: string | string[]): String {
    if (!lang) return subreddits.en[randomNumber(subreddits.en.length)];

    switch(lang.toString()) {
        case "es":
            return subreddits.es[randomNumber(subreddits.es.length)];
        case "fr":
            return subreddits.fr[randomNumber(subreddits.fr.length)];
        case "de":
            return subreddits.de[randomNumber(subreddits.de.length)];
        case "it":
            return subreddits.it[randomNumber(subreddits.it.length)];
        default:
            return subreddits.en[randomNumber(subreddits.en.length)];
    }
}