import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";
import "./styles.css";
import { Link } from "react-router-dom";
 
interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
   <Link to="http://localhost:5173/tweet" className="tweet">
    <img src="https://github.com/lucasrobertt.png" alt="Lucas Robert" />

    <div className="tweet-content">
      <div className="tweet-content-header">
        <strong>Lucas Robert</strong>
        <span>@lucasrobertt</span>
      </div>

      <p>
      {props.content}
      </p>
    </div>

    <div className="tweet-content-footer">
      <button type="button">
        <ChatCircle/>
        20
      </button>
      <button type="button">
        <ArrowsClockwise/>
        15
      </button>
      <button type="button">
        <Heart/>
        30
      </button>
    </div>

    
   </Link>
  )
}