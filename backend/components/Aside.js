import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BiCameraMovie, BiSolidCameraMovie } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";

export default function Aside() {
    const router = useRouter()
    const [clicked , setClicked] = useState(false)
    const [activelink , setActivelink] = useState('/');

    const handleClick = () => {
        setClicked(!clicked)
    }
    const handleLinkClick = (link) =>{
        setActivelink(link);
        setClicked(false);
    }

    useEffect(() => {
        // update active link when page reloaded
        setActivelink(router.pathname)
    } , [router.pathname])

    return <>
        <div className="aside">
            <div className="logo flex">
                <BiCameraMovie />
                <Link href="/"><h1>MOVIES</h1></Link>
            </div>
            <ul className="mt-2">
                <Link href="/" className={activelink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}><li><div><IoHomeSharp /></div>Dashboard</li></Link>
                <Link href="/movies" className={activelink === '/movies' ? 'active' : ''} onClick={() => handleLinkClick('/movies')}><li><div><BiSolidCameraMovie /></div>Movies</li></Link>
                <Link href="/addmovie" className={activelink === '/addmovie' ? 'active' : ''} onClick={() => handleLinkClick('/addmovie')}><li><div><MdOutlinePlaylistAdd /></div>Add Movies</li></Link>
                 <Link href="/draft" className={activelink === '/draft' ? 'active' : ''} onClick={() => handleLinkClick('/draft')}><li><div><RiDraftFill /></div>Draft</li></Link>
            </ul>
        </div>
    </>
}