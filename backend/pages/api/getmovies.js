import { mongooseConnect } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";


// api for fetching data from mongodb database



export default async function handle(req , res){
// if authenticated , connect to MongoDb
await mongooseConnect()
const { method } = req;
if (method === 'POST'){
    const {title , slug , bgposter , smposter , titlecategory , description , rating , duration , year , genre , language , subtitle , size , quaility , youtubelink , category , watchonline ,downloadlink , status } = req.body;

    const movieData = await Movie.create({
        title , slug , bgposter , smposter , titlecategory , description , rating , duration , year , genre , language , subtitle , size , quaility , youtubelink , category , watchonline ,downloadlink , status
    })
res.json(movieData)

}
if (method === 'GET'){
    if (req.query?.id){
        res.json(await Movie.findById(req.query.id))
    } else {
        res.json((await Movie.find()).reverse())
    }
}

// when update REQ
if (method === "PUT"){
    const {_id , title , slug , bgposter , smposter , titlecategory , description , rating , duration , year , genre , language , subtitle , size , quaility , youtubelink , category , watchonline ,downloadlink , status } = req.body;

    await Movie.updateOne({_id} , {
        title , slug , bgposter , smposter , titlecategory , description , rating , duration , year , genre , language , subtitle , size , quaility , youtubelink , category , watchonline ,downloadlink , status  
    })

    res.json(true);
}

// when delete req 
if (method === "DELETE"){
    if (req.query?.id){
        await Movie.deleteOne({_id: req.query?.id});
        res.json(true)
    }
}

}