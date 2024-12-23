import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import { useRouter } from "next/router"
import { useState } from "react";
import { FcRating } from "react-icons/fc";


export default function movies() {

    const router = useRouter();

    const [currentPage , setCurrentPage] =  useState(1) // first page
    const [perPage] = useState(7) // seven movies per page
    const [searchQuery , setSearchQuery] = useState('')


    //fetch api
    const {alldata , loading } = useFetchData('/api/getmovies')
    
    // function to handle page change 
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const allMovie = alldata.length // total number of movies 

    // filter all data basec on search query 
    const filteredMovies = searchQuery.trim() === '' ? alldata : alldata.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()));


        //calculate the index of first movie dispplayed on page
    const indexOfFirstMovie = (currentPage - 1) * perPage;
    const indexOfLastMovie = currentPage * perPage;

    //get the current page's movies 
    const currentMovies = filteredMovies.slice(indexOfFirstMovie , indexOfLastMovie);

    const publishedMovies = currentMovies.filter(ab => ab.status === "publish");

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allMovie / perPage); i++) {
        
        pageNumbers.push(i);
    }

    return <>
        <div className="container">
            <div className="moviecards flex flex-col flex-left gap-2 w-100">
                <div className="flex flex-sb w-100 movietitle">
                    <h2>List Of Published Movies</h2>
                    <Link href='/addmovie'><button>Add Movie</button></Link>
                </div>
                {loading ? <Spinner/> : <>
                    {publishedMovies.map((movie) => {
                        return <div className="moviecard" key={movie._id}>
                        <img src={movie.bgposter || "/img/noimage.jpg" } alt="movie"/>
                        <div className="moviecardinfo">
                          <div>
                            <h3>{movie.title} ({movie.year})</h3>
                            <p>{movie.category}</p>
                          </div>
                          <Link href='/'><FcRating/>{movie.rating}</Link>
                          <div className="flex gap-2 mt-2">
                              <Link href={`/movies/edit/${movie._id}`}><button>Update Movie</button></Link>
                              <Link href={`/movies/delete/${movie._id}`}><button>Delete Movie</button></Link>
                          </div>
                        </div>
                      </div>
                    })}
                </>}

                {publishedMovies.length === 0 ? (
                    "" ) : (
                        <div className="blogpagination">
                            <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled= {currentPage === 1}
                            >Previous</button>
                            {pageNumbers.slice(Math.max(currentPage - 3 , 0), Math.min
                            (currentPage + 2 , pageNumbers.length)).map(number => (
                                <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`${currentPage === number ? 'active' : ''} `}
                                >
                                    {number}
                                </button>
                            ))}
                            <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentMovies.length < perPage}
                            >Next</button>
                            </div>
                        )}

            </div>
        </div>
    </>
}