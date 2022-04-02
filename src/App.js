import './App.css'
import TweetCard from './components/TweetCard'
import { useState } from 'react'

export default function App() {

  const addTweet = () => { 
    setTweets(prevTweets => {
      return [ ...prevTweets, <TweetCard addTweet={addTweet}/>]
    })
  }

  const [tweets, setTweets] = useState([<TweetCard addTweet={addTweet} />])

  return (
    <div className="App">
      <h1>tweet length checker</h1>
      {tweets.map(tweet => tweet)}
    </div>
  );
}
