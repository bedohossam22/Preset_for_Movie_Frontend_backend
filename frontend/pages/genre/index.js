import React from 'react'
import Head from 'next/head'
import Genrecard from '@/components/Genrecard'



const category = (props) => {
    return (
        <>
        <Head>
            <title>Genre - Category | Makmovies</title>
        </Head>
           <section className='genrenamesec'>
            <div className='genrename'>
                <h1>Explore By Genre</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi.</p>
            </div>
           </section>
            <section className="genremoviesec genremovie">
                <Genrecard link = {'/genre/action'} img={'/img/action.jpg'}  title={"Action Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/adventure'} img={'/img/adventure.jpg'}  title={"Adventure Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/animation'} img={'/img/animation.jpg'}  title={"Animation Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/comedy'} img={'/img/comedy.jpg'}  title={"Comedy Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/crime'} img={'/img/crime.jpg'}  title={"Crime Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/drama'} img={'/img/drama.jpg'}  title={"Drama Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/fantasy'} img={'/img/fantasy.jpg'}  title={"Fantasy Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/horror'} img={'/img/horror.jpg'}  title={"Horror Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/mystery'} img={'/img/mystery.jpg'}  title={"Mystery Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/romance'} img={'/img/romantic.jpg'}  title={"Romantic Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/science_fiction'} img={'/img/scifi.jpg'}  title={"Sci-fi Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
                <Genrecard link = {'/genre/thriller'} img={'/img/thriller.jpg'}  title={"Thriller Movies"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque repellat, laboriosam eveniet incidunt totam cum, reprehenderit sit, distinctio dolor tenetur? Ipsum nobis officiis quasi."}/>
            </section>
        </>
    )
}

export default category