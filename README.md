# RedditMemesAPI 
[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/HUGE-Network/RedditMemesAPI)

> Tiny microservice to get random Reddit memes from [r/Memes](https://www.reddit.com/r/memes/), 
[r/DankeMemes](https://www.reddit.com/r/dankmemes/) and [r/MeIRL](https://www.reddit.com/r/meirl/), 
built under [Next.js](https://nextjs.org/) and [Typescript](https://www.typescriptlang.org/)



## Getting started
- - -
> First clone this repository and install dependencies:
> ```shell scrip
> git clone https://github.com/Blad3Mak3r/RedditMemesAPI.git
> cd RedditMemesAPI
> ```

> Install the required dependencies and run it:
> ```shell script
> npm install
> npm run dev
> ```

Now go to `` http://localhost:3000/api `` and enjoy.

## Endpoints
- - -
**Random meme from Top SubReddits**
> **GET** ``/api ``


**Random meme from [Country](#languages) Top SubReddits**
> **GET** ``/api?lang=en``


**Random Anime meme**
> **GET** ``/api/anime``

**Random Sponge Bob meme**
> **GET** ``/api/spongebob``

## Languages
- - -
Currently supports the following languages:

| Default   | Language | Url Query    |
| --------- | -------- | ------------ |
| English   | English  | /api?lang=en |
| Spanish   | Español  | /api?lang=es |
| French    | Français | /api?lang=fr |
| Russian   | русский  | /api?lang=ru |
| German    | Deutsch  | /api?lang=de |
| Italian   | Italiano | /api?lang=it |
