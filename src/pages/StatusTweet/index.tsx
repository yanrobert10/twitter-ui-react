import { Header } from "../../components/Header"
import { Tweet } from "../../components/Tweet"
import { Separator } from "../../components/separator"
import "./styles.css"
const answers = [
  "concordo...",
  "Olha Faz Sentido",
  "Parabens pelo progesso"

]


export function StatusTweet() {
  return (
    <main className="timeline">
          <Header title='Tweet'/>

          <Tweet content="Iaee pae"/>

          <Separator/>

          <form className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/34972426?v=4" alt="Yan Robert" />
              <textarea id="tweet" placeholder="Tweet your answer"/>
            </label>
            <button type='submit'>Answer</button>
          </form>

          

          {answers.map( answer => {
            return <Tweet key={answer} content={answer}/>
          })}
        </main>
  )
}