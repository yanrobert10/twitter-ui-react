import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";
import "./styles.css"

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
   <a href="#" className="tweet">
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

    
   </a>
  )
}