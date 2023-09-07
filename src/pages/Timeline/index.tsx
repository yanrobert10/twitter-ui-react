import { Header } from "../../components/Header"
import { Separator } from "../../components/separator"
import { Tweet } from "../../components/Tweet"
import "./styles.css"

const tweets = [
  "Meu primeiro tweet",
  "Opah agora sim",
  "Deu certo tweetar"
]

export function Timeline() {
  return (
    <main className="timeline">
          <Header title='Home'/>

           
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/34972426?v=4" alt="Yan Robert" />
              <textarea id="tweet" placeholder="What's happening?"/>
            </label>
            <button type='submit'>Tweet</button>
          </form>

          <Separator/>

          {tweets.map( tweet => {
            return <Tweet key={tweet} content={tweet}/>
          })}
        </main>
  )
}