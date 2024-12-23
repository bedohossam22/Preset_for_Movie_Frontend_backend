import { mongooseConnect } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";


// api for fetching data from mongodb database



export default async function handle(req , res){

    const {method} = req;
// connect database
await mongooseConnect();

// get movies data api
if (method === "GET"){
    if (req.query?.id){
        // fetch one movie by ID
        const movies = await Movie.findById(req.query.id);
        res.json(movies);
        // fetch movies by title
    } else if (req.query?.title){
        const title = await Movie.find({ title: req.query.title });
        res.json(title);
    } else if (req.query?.titlecategory){
        // fetch movies by title category 
        const titlecategory = await Movie.find({ titlecategory: req.query.titlecategory })
        res.json(titlecategory.reverse()); // reverse for showing latest data
    } else if (req.query?.genre){
        //fetch movies by genre
        const genre = await Movie.find({genre : req.query.genre});
        res.json(genre.reverse()); // reverse for showing latest data
    } else if (req.query.category){
        //fetch movies by category
        const category = await Movie.find({category: req.query.category});
        res.json(category.reverse()); 
    } else if  (req.query?.slug){
        const slug = await Movie.find({slug : req.query.slug});
        res.json(slug.reverse());
    } else {
        //fetch all movies 
        const movies = await Movie.find();
        res.json(movies.reverse())
    }
} else {
    res.status(405).json({message: "Method Not Allowed"})
}
}
