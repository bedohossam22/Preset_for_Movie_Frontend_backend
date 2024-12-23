import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Movie(
    {
        _id,
        title: existingtitle,
        slug: existingslug ,
        bgposter: existingbgposter ,
        smposter: existingsmposter ,
        titlecategory: existingtitlecategory ,
        description: existingdescription ,
        rating: existingrating ,
        duration: existingduration ,
        year: existingyear ,
        genre: existinggenre ,
        language: existinglanguage ,
        subtitle: existingsubtitle ,
        size: existingsize ,
        quaility: existingquaility,
        youtubelink: existingyoutubelink ,
        category: existingcategory ,
        watchonline: existingwatchonline , 
        downloadlink: existingdownloadlink ,
        status: existingstatus
    }
) {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const [title, setTitle] = useState(existingtitle || "");
  const [slug, setSlug] = useState(existingslug || "");
  const [bgposter, setBgposter] = useState(existingbgposter ||"");
  const [smposter, setSmposter] = useState(existingsmposter ||"");
  const [titlecategory, setTitlecategory] = useState( existingtitlecategory ||"");
  const [description, setDescription] = useState(existingdescription ||"");
  const [rating, setRating] = useState(existingrating || "");
  const [duration, setDuration] = useState(existingduration || "");
  const [year, setYear] = useState(existingyear || "");
  const [genre, setGenre] = useState(existinggenre || "");
  const [language, setLanguage] = useState(existinglanguage || "");
  const [subtitle, setSubtitle] = useState(existingsubtitle || "");
  const [size, setSize] = useState(existingsize || "");
  const [quaility, setQuaility] = useState(existingquaility || "");
  const [youtubelink, setYoutubelink] = useState(existingyoutubelink ||"");
  const [category, setCategory] = useState(existingcategory || "");
  const [watchonline, setWatchonline] = useState(existingwatchonline || "");
  const [downloadlink, setDownloadlink] = useState(existingdownloadlink || {
    "480p": "",
    "720p": "",
    "1080": "",
    "4k": "",
  });
  const [showInputs, setShowInputs] = useState({
    "480p": false,
    "720p": false,
    "1080": false,
    "4k": false,
  });
  const [status, setStatus] = useState(existingstatus || "");

    //function for create movie
    async function createMovie(ev) {
        ev.preventDefault();
        const data = { title , slug , bgposter , smposter , titlecategory , description , rating , duration , year , genre , language , subtitle , size , quaility , youtubelink , category , watchonline ,downloadlink , status}

        if (_id) {
            await axios.put('/api/getmovies' , {...data , _id})
            
        } else {
            await axios.post('/api/getmovies' , data)
        }

        setRedirect(true)
    }
    if (redirect){
        router.push('/')
        return null;
    }

  // Download link functions

  const resolutions = ["480p", "720p", "1080p", "4k"];

  const handleInputChange = (resolution, value) => {
    setDownloadlink((prevstate) => ({
      ...prevstate,
      [resolution]: value,
    }));
  };

  const toggleInputVisibility = (resolution) => {
    setShowInputs((prevstate) => ({
      ...prevstate,
      [resolution]: !prevstate[resolution],
    }));
  };

  // slug function, url for every space will be generate
  const handleSlugChange = (ev) => {
    const inputValue = ev.target.value;

    //Replace spaces with hythens
    const newSlug = inputValue.replace(/\s+/g, "-");
    setSlug(newSlug);
  };

  //movie category
  const categories = ["Bollywood", "Hollywood", "South", "Gujarati", "Marvel_Studio", "Tv_Shows", "Web_Series"];

  return (
    <>
      <Head>
      {/*   <title>Add Movie page</title> */}
      </Head>

      <form action="" className="addmovieform" onSubmit={createMovie}>
        {/* preview bgposter and smposter image */}
        <div className="w-100 flex gap-3 mt-1">
            {bgposter ? <div className="bgposter flex flex-col w-70 flex-left">
                <img src={bgposter} id="prv" alt="image" />
                <label htmlFor="prv" className="w-100">Background image Preview</label>
            </div> : null
            }
            {smposter ? <div className="smposter flex flex-col w-33 flex-left">
                <img src={smposter} id="prv" alt="image" />
                <label htmlFor="prv" className="w-100">Smposter  Preview</label>
            </div> : null
            }
        </div>
        <div className="formdata w-100 flex flex-sb mt-3 flex-left">
          <div className="w-50 flex flex-col flex-left">
            {/* movie background image */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="bgposter">Background Poster</label>
              <input
                type="text"
                id="bgposter"
                placeholder="Bgposter image link"
                value={bgposter}
                onChange={ev => setBgposter(ev.target.value)}
              />
            </div>
            {/* movie title*/}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="title">Movie title</label>
              <input
                type="text"
                id="title"
                placeholder="title"
                value={title}
                onChange={ev => setTitle(ev.target.value)}
              />
            </div>
            {/* movie description*/}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="description">Movie description</label>
              <textarea
                type="text"
                id="description"
                placeholder="description"
                value={description}
                onChange={ev => setDescription(ev.target.value)}
              />
            </div>
            {/* movie rating*/}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                id="rating"
                placeholder="rating"
                value={rating}
                onChange={ev => {
                  // ensure input doesnot exceed 10
                  let newValue =
                    ev.target.value <= 10.0 ? ev.target.value : 10.0;
                  newValue = newValue >= 0 ? newValue : 0;
                  setRating(newValue);
                }}
                step="0.1"
                max="10"
                min="0"
              />
            </div>
            {/* movie duration*/}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="duration">duration</label>
              <input
                type="text"
                id="dyration"
                placeholder="duration"
                value={duration}
                onChange={ev => setDuration(ev.target.value)}
              />
            </div>
            {/* movie watch time link*/}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="watchonline">Watchonline link</label>
              <input
                type="text"
                id="watchonline"
                placeholder="watchonline"
                value={watchonline}
                onChange={ev => setWatchonline(ev.target.value)}
              />
            </div>
            {/* movie downloadlink*/}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="downloadlink">Download link</label>
              <div className="flex gap-1">
                <div
                  className={
                    showInputs["480p"] ? "dresolbtn active" : "dresolbtn"
                  }
                  onClick={() => toggleInputVisibility("480p")}
                >
                  {showInputs["480p"] ? "Hide 480p" : "Show 480p"}
                </div>
                <div
                  className={
                    showInputs["720p"] ? "dresolbtn active" : "dresolbtn"
                  }
                  onClick={() => toggleInputVisibility("720p")}
                >
                  {showInputs["720p"] ? "Hide 720p" : "Show 720p"}
                </div>
                <div
                  className={
                    showInputs["1080p"] ? "dresolbtn active" : "dresolbtn"
                  }
                  onClick={() => toggleInputVisibility("1080p")}
                >
                  {showInputs["1080p"] ? "Hide 1080p" : "Show 1080p"}
                </div>
                <div
                  className={
                    showInputs["4k"] ? "dresolbtn active" : "dresolbtn"
                  }
                  onClick={() => toggleInputVisibility("4k")}
                >
                  {showInputs["4k"] ? "Hide 4k" : "Show 4k"}
                </div>
              </div>
              {resolutions ? (
                <>
                  {" "}
                  {resolutions.map((resolution) => (
                    <div key={resolution} className="w-100">
                      {showInputs[resolution] && (
                        <>
                          <input
                            type="text"
                            id={`downloadlink${resolution}`}
                            placeholder={`${resolution} Download link`}
                            value={downloadlink[resolution]}
                            onChange={ev =>
                              handleInputChange(resolution, ev.target.value)
                            }
                          />
                        </>
                      )}
                    </div>
                  ))}
                </>
              ) : null}
            </div>

            {/* Movie status (Draft or Publish) */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="status">Status</label>
              <div className="flex gap-05">
                <input
                  type="radio"
                  id="draft"
                  name="status"
                  value="draft"
                  checked={status === "draft"}
                  onChange={e => setStatus(e.target.value)}
                />
                <label htmlFor="draft">Draft</label>
              </div>
              <div className="flex gap-05">
                <input
                  type="radio"
                  id="publish"
                  name="status"
                  value="publish"
                  checked={status === "publish"}
                  onChange={e => setStatus(e.target.value)}
                />
                <label htmlFor="publish">Publish</label>
              </div>
            </div>
          </div>
          {/* for right side */}
          <div className="w-50 flex flex-col flex-left">
            {/* Movie small Poster */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="smposter">Main Poster</label>
              <input
                type="text"
                id="smposter"
                placeholder="smposter image link"
                value={smposter}
                onChange={ev => setSmposter(ev.target.value)}
              />
            </div>

            {/* Movie slug url*/}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="slug">Slug (url)</label>
              <input
                type="text"
                id="slug"
                placeholder="Url of the movie"
                value={slug}
                onChange={handleSlugChange}
              />
            </div>
            {/* Release year of the movie */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="year">Release Year</label>
              <input
                type="text"
                id="year"
                placeholder="year"
                value={year}
                onChange={ev => setYear(ev.target.value)}
              />
            </div>
            {/* youtube embed link */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="youtubelink">Trailer Link</label>
              <input
                type="text"
                id="youtubelink"
                placeholder="youtubelink"
                value={youtubelink}
                onChange={ev => setYoutubelink(ev.target.value)}
              />
            </div>
            {/* language of the movie */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="language">Language</label>
              <select onChange={(e) =>setLanguage(e.target.value)} value={language} name="language" id="language">
                <option value="">Select Language</option>
                <option value="Hindi (ORG)">Hindi (ORG)</option>
                <option value="English">English</option>
                <option value="Hindi - English">Hindi - English</option>
                <option value="Dual Audio [Hindi (ORG) + English">Dual Audio [Hindi (ORG) + English</option>
                <option value="Dual Audio [Hindi (Cleaned) + English">Dual Audio [Hindi (Cleaned) + English</option>
              </select>
            </div>
            {/* Quality of the movie  */ }
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="quaility">Movie Quaility</label>
              <select onChange={(e) => setQuaility(e.target.value)} value={quaility} name="quaility" id="quaility">
                <option value="">Select  Quaility</option>
                <option value="480p || 720p || 1080p - WEB-DL">480p || 720p || 1080p - WEB-DL</option>
                <option value="480p || 720p || 1080p || 2060p - WEB-DL">480p || 720p || 1080p || 2060p - WEB-DL</option>
                <option value="480p || 720p || 1080p - HDTC">480p || 720p || 1080p - HDTC</option>
              </select>
            </div>
            {/*  subtitle of the movie */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="subtitle">Movie subtitle</label>
              <select onChange={(e) => setSubtitle(e.target.value)} value={subtitle} name="quaility" id="quaility">
                    <option value="">Select subtitle</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
              </select>
            </div>
            {/* size of the movie */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <label htmlFor="size">Movie Size</label>
              <input
                type="text"
                id="size"
                placeholder="350MB || 1GB || 2GB || 4GB"
                value={size}
                onChange={ev => setSize(ev.target.value)}
              />
            </div>
            {/* movie title category */}
            <div className="moviecategory flex flex-sb flex-left">
                <div className="w-50 flex flex-col flex-left mb-2">
                    <label>Title Category :</label>
                    {['Movies' , 'Series' , 'Shows'].map((cat) => (
                        <div key={cat} className="flex gap-05">
                            <input type="radio" 
                                id={cat.toLocaleLowerCase()}
                                name="titlecategory"
                                value={cat.toLowerCase()}
                                checked= {titlecategory === cat.toLowerCase()}
                                onChange={(e) => setTitlecategory(e.target.value)}
                            />
                            <label htmlFor={cat.toLowerCase()}>{cat}</label>
                        </div>
                    ))}
                </div>
                     {/* movie category */}
                <div className="w-50 flex flex-col flex-left mb-2">
                    <label>Category :</label>
                    {categories.map((cat) => (
                        <div key={cat} className="flex gap-05">
                            <input type="radio" 
                                id={cat.toLocaleLowerCase()}
                                name="category"
                                value={cat.toLowerCase()}
                                checked= {category === cat.toLowerCase()}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <label htmlFor={cat.toLowerCase()}>{cat}</label>
                        </div>
                    ))}
                </div>
                {/* movie genre */}
                <div className="w-50 flex flex-col flex-left mb-2">
                    <label>Genre :</label>
                    {['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Crime', 'Fantasy', 'Horror', 'Romance', 'Thriller', 'Science_Fiction'].map((genreOptions) => (
                        <label key={genreOptions} className="flex gap-05">
                            <input type="checkbox" 
                            value={genreOptions.toLocaleLowerCase()}
                            checked = {genre.includes(genreOptions.toLowerCase())}
                            onChange={(e) => {
                            const selectedGenre = e.target.value;
                            setGenre((preGenre) => {
                                if (preGenre.includes(selectedGenre)){
                                    return preGenre.filter((genre) => 
                                    genre !== selectedGenre)
                                } else {
                                    return [...preGenre , selectedGenre]
                                }
                            })
                            }}
                            />
                            {genreOptions}
                        </label>
                    ))}
                </div>
            </div>
       
           
          </div>
        </div>
                {/* to save ll data in momngoDB after submit */}
        <div className="w-100 mb-2">
                    <button type="submit" className="w-100 flex-center">
                        SAVE DATA
                    </button>
        </div>
      </form>
    </>
  );
}
