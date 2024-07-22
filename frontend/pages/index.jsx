import { useEffect, useState } from "react";
import TweetForm from "@/components/TweetForm";
import TweetList from "@/components/TweetList";
import Nav from "@/components/Nav";
import SearchButton from "@/components/SearchButton";
import axios from "axios";


export default function Home() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const buscarTweets = async () => {
      const response = await axios.get('http://localhost:3001/api/tweets')
      setTweets(response.data);
    };
    buscarTweets();
  },[])

  const handleTweetPosted = (newTweet) => {
    setTweets((prevTweets) =>[newTweet, ...prevTweets])
  };

  const handleLike = (likedTweet) => {
    setTweets((prevTweets) => prevTweets.map(tweet => tweet.id === likedTweet.id ? likedTweet : tweet ))
  }

  const handleDelete = (delTweetId) => {
    console.log(delTweetId)
    setTweets((prevTweets) => prevTweets.filter(tweet => tweet.id !== delTweetId))
  }

  return (
    <div className="flex bg-radial bg-gray-300">
      <div className="w-1/3">
       <Nav />
      </div>
      <div className="w-2/3 flex flex-wrap">
        <TweetForm onTweetPosted={handleTweetPosted} />
        <button className="border border-gray-300 w-full text-center py-2 text-base hover:bg-gray-400 text-gray-300">Show 787 Post</button>
        <TweetList tweets={tweets} onLike={handleLike} onDelete={handleDelete} />
      </div>
      <div className="w-1/3">
        <SearchButton/>
      </div>
    </div> 
  );
}
