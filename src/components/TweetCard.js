import { useState } from 'react'

// styles
import './TweetCard.css'

export default function TweetCard() {

    const [length, setLength] = useState(0)

    const handleChange = (e) => {
        setLength(e.target.value.length)
    }

    return (
        <div className="tweet-card">
            <textarea
                placeholder='start typing here'
                onChange={(e) => handleChange(e)}
                maxLength={260}
            />
            <button className='btn'>add tweet</button>
            <p className='tweet-length'>{length}/260</p>
        </div>
    )
}