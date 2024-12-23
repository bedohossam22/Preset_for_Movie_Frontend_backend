import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import { FaBars, FaStar } from "react-icons/fa";
import useFetchData from "@/hooks/useFetchData";

export default function Header() {

    // navbar header component scroll sticky
    useEffect(() => {
        const handleScroll = () => {
        const header = document.querySelector('nav');
        header.classList.toggle("sticky" , window.scrollY > 0)
    }
        window.addEventListener("scroll" , handleScroll);

        return () => {
            window.removeEventListener("scroll" , handleScroll)
        }
} , [])
    // functions for navlist items page routing active status
    const router = useRouter();
    const [clicked , setClicked] = useState(false);
    const [navbar , setNavbar] = useState(false);
    const [searchbar , setSearchbar] = useState(false);
    const [activeLink , setActivelink] = useState('/');


    //search function by title of movie 
const [movieshortname , setMovieshortname] = useState('');
const [searchResult , setSearchResult] = useState(null)
const [error , setError] = useState(null)

    //fetch data from api
    const {alldata , loading } = useFetchData('/api/getmovies');


    // filter for published movies required
    const publishedData = alldata.filter(ab => ab.status === "publish");

    // function to handle search 
    useEffect(() => {
        if (!movieshortname.trim()){
            setSearchResult([]);
            return;
        }
        const filteredMovies = publishedData.filter(movie => movie.title.toLowerCase().includes(movieshortname.toLocaleLowerCase()));
        setSearchResult(filteredMovies);
    } , [movieshortname]);


    const handleMovieClick = () => {
        setMovieshortname('');
    }

    const searchRef = useRef(null)

    //function to exit search 
    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)){
            setMovieshortname('');
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown' , handleClickOutside);

        return () => {
            document.removeEventListener('mousedow' , handleClickOutside)
        }
    })


    const handleClick = () => {
        setClicked(!clicked)
    }
    const handleLinkClick = (link) => {
        setActivelink(link);
        setClicked(false);
    }

    useEffect(() => {
        // update active link state when the page is reloaded
        setActivelink(router.pathname);

    } , [router.pathname]);

    //navbar    
    const handleNavbarOpen =  () => {
        setNavbar(!navbar);
    }
    const handleNavbarClose = () => {
        setNavbar(false)
    }
    //searchbar
    const handleSearchbarOpen = () => {
        setSearchbar(!searchbar);
    }
    const handleSearchbarClose = () => {
        setSearchbar(false);    
    }
    return <>
        <nav className="header">
            <h1 className="logo" data-text="&nbsp;Makmovies&nbsp;">
                <a href="/">&nbsp;Makmovies&nbsp;</a>
            </h1>
            <form className={searchbar ? "search_bar active" : "search_bar"}>
                <input
                type="text"
                placeholder="Search Movies..."
                value={movieshortname}
                onChange={(e) => setMovieshortname(e.target.value)}
                />
                <div className="searchclose" onClick={handleSearchbarClose}><IoClose/></div>

                {movieshortname && (
                    <div className="search_results">
                        <h2>---:Search Result:---</h2>
                        <ul>
                            {searchResult.length > 0 ? (
                            // showing 20 search results by matching words    
                                searchResult.slice(0 , 20).map((movie) => (
                                     <Link onClick={handleMovieClick} key={movie._id} href={`/movies/${movie.slug}`}>
                                    <div className="moviesearchlist">
                                        <div>
                                            <img src={movie.smposter} width={80} height={110} alt="image" />
                                        </div>
                                        <div className="searchbarinfo">
                                            <h5>{movie.title}</h5>
                                            <h4>Rating: <FaStar/><span>{movie.rating}</span></h4>
                                            <h4>Release Year: {movie.year}</h4>
                                        </div>
                                    </div>
                                     </Link>
                                ))
                            ) : (
                            <p>No Movie found</p>    
                            )}
                        </ul>
                    </div>
                )}
            </form>
         
            <div id={navbar ? "navbaractive" : "navbar"}>
                <div className="navlogomovie">
                    <h1 className="logo" data-text="&nbsp;Makmovies&nbsp;">
                    <a href="/">&nbsp;Makmovies&nbsp;</a>
                    </h1>
                    <div className="navclosesvg"
                    onClick={handleNavbarClose}
                    >
                    <IoClose />
                    </div>
                </div>
                <ul className={clicked ? "navbar active" : "navbar"} onClick={handleNavbarClose}>
                    <li>
                    <Link href='/' className={activeLink === '/' ? 'active' : ''}
                    onClick={() => handleLinkClick('/')}
                    >Home</Link>
                    </li>
                    <li>
                    <Link href='/movies' className={activeLink === '/movies' ? 'active' : ''}
                    onClick={() =>handleLinkClick('/movies')}
                    >Movies</Link>
                    </li>
                    <li>
                    <Link href='/series' className={activeLink === '/series' ? 'active' : ''}
                    onClick={() =>handleLinkClick('/series')}
                    >Series</Link>
                    </li>
                    <li>
                    <Link href='/bollywood' className={activeLink === '/bollywood' ? 'active' : ''}
                    onClick={() =>handleLinkClick('/bollywood')}
                    >Bollywood</Link>
                    </li>
                    <li>
                    <Link href='/hollywood' className={activeLink === '/hollywood' ? 'active' : ''}
                    onClick={() =>handleLinkClick('/hollywood')}
                    >Hollywood</Link>


                    </li>
                </ul>
            </div>
            <div className="mobile">
            <BiSearch className="opensearchsvg" onClick={handleSearchbarOpen}/>
            <FaBars onClick={handleNavbarOpen} />
            </div>
        </nav>
      
    </>
}