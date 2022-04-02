import './App.css'
import TweetCard from './components/TweetCard'
import { useState, Fragment } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {

  const addTweet = () => { 
    setTweets(prevTweets => {
      return [ ...prevTweets, <TweetCard addTweet={addTweet}/>]
    })
  }

  const [tweets, setTweets] = useState([<TweetCard addTweet={addTweet} />])

  return (
    <div className="App">
      <Header />
      <main>
        {tweets.map(tweet => (
          <Fragment key={Math.random()}>
            {tweet}
          </Fragment>
        ))}
      </main>
      
      <Footer />
    </div>
  );
}
