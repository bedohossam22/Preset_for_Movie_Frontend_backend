import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <section className="m-auto footersec">
                    <div className="fcontent">
                        <div className="flogo">
                            <h1><Link href='/'>Makmovies</Link></h1>
                        </div>
                        <div className="quicklink">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/movies'>Movies</Link></li>
                            <li><Link href='/series'>Series</Link></li>
                            <li><Link href='/genre'>Genre</Link></li>
                            <li><Link href='/all'>All Movies</Link></li>
                            <li><Link href='/genre'>Category</Link></li>
                            <li><Link href='/bollywood'>Bollywood</Link></li>
                            <li><Link href='/holywood'>Hollywood</Link></li>
                        </div>
                    </div>
                <div className="copyright">
                    <p>Copyright &copy; 2024 All rights reserved | by&nbsp; <Link href='/'>
                    Makmovies</Link></p>
                </div>
                <div className="fperasec">
                    <p>Disclaimer :- We Does not host any files  on its servers. All files or contents hosted on third party website | We do not take responsability for conotents hosted on third party websites. We just index those links which are already avaible on the internet</p>
                </div>
                </section>
            </footer>
        </>
    )
}

export default Footer