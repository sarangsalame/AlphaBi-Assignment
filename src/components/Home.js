import { useState, useEffect } from "react";
import Card from './Card';
import PaginationComponent from './PaginationComponent';
import { auth, provider } from '../components/firebase.js'
import { useAuthState } from "react-firebase-hooks/auth";
import UserImg from '../assets/user.png'


const Home = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const [user] = useAuthState(auth)
  const [aipdata, setapidata] = useState([]);
  const [resApi, setResApi] = useState([])
  const [searchBtnClicked, setSeachBtnClicked] = useState(false)
  const [page, setPage] = useState(1);
  const [slic, setSlic] = useState(0)
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState([])



  //fetching data
  const getApiData = async (search) => {
    const handleSearch = (ele) => {
      let searchParam = ele.split(" ").join("+");
      return searchParam;
    };

    let res = handleSearch(search);

    const dataa = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${res}&api_key=${API_KEY}&limit=50`
    );
    const json = await dataa.json();
    setapidata(json.data);

    // get the list item to render in card
    let list = aipdata.slice(slic, slic + 3)
    setResApi(list)
    setSeachBtnClicked(true)
  };

  useEffect(() => {
    //debouncing
    const delay = setTimeout(() => {
      getApiData(searchQuery);
    }, 200)
    return (() => {
      clearTimeout(delay)
    })
  }, [searchQuery, page, searchBtnClicked]);



  //pagination
  const setCurrPage = (flag) => {
    if (flag === "prev") {
      if (page === 1) {
        return;
      }
      setPage((pag) => pag - 1);
      setSlic(slic - 3)
    }
    if (flag === "next") {
      if (page === 10) {
        return;
      }
      setPage((pag) => pag + 1);
      setSlic(slic + 3)

    }
  }

  // signup fn

  const gooleSignup = () => {
    if (!user) {
      const signInWithGoogle = async () => {
        await auth.signInWithPopup(provider);
      };
      signInWithGoogle();
    }
    else {
      const signUserOut = async () => {
        await auth.signOut(auth);
      };
      signUserOut();
    }
  }



  return (
    <>
      <div className='search_header'>
        <input
          className="search_inp"
          type="text"
          placeholder='Gif'
          value={searchQuery}
          onChange={(e) => {
            setSeachBtnClicked(false)
            setPage(1)
            setSearchQuery(e.target.value)
          }}
        />

        <button onClick={() => setSeachBtnClicked(true)}>Search</button>

        <div>
          <button
            onClick={() => {
              gooleSignup()
            }
            }>
            {user ? "SignOut" : "SignUp"}
          </button>
        </div>


        <div className="user_avatar-cont">
          {user && <span>{user.displayName}</span>}
          <img height="50px" width="50pxx" src={user ? user.photoURL : UserImg} alt="user" />
        </div>

      </div>



      <div className='card_wrapper'>
        {searchQuery === "" ? <div>Search for awesome gifs</div> : null}
        {searchQuery.length > 0 && resApi.map((ele) => {
          return (
            <Card key={ele.id} favourites={favourites} setFavourites={setFavourites} ele={ele} />
          );
        })}
      </div>
      {resApi.length > 0 && <PaginationComponent page={page} setCurrPage={setCurrPage} />}
    </>
  )
}

export default Home