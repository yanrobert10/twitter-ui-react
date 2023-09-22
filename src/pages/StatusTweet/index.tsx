import { useState, FormEvent, KeyboardEvent } from "react"
import { Header } from "../../components/Header"
import { Tweet } from "../../components/Tweet"
import { Separator } from "../../components/separator"
import "./styles.css"


export function StatusTweet() {
  const [newAnswers, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState(
    [
      "Meu primeiro tweet",
      "Opah agora sim",
      "Deu certo tweetar"
    ]
  )

  function createNewAnswers(event: FormEvent) {
    event.preventDefault() //para toda vez que acionar o submit ela n irá redimencionar pagina
  
    setAnswers([...answers, newAnswers]);
    setNewAnswers("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      // submit
      setAnswers([...answers, newAnswers]);
      setNewAnswers("");
    }
  }

  return (
    <main className="timeline">
          <Header title='Tweet'/>

          <Tweet content="Iaee pae"/>

          <Separator/>

          <form onSubmit={createNewAnswers} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/34972426?v=4" alt="Yan Robert" />
              <textarea 
                id="tweet" 
                value={newAnswers}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewAnswers(event.target.value)
                }}
                placeholder="Tweet your answer"
              />
            </label>
            <button type='submit'>Answer</button>
          </form>

          

          {answers.map( answer => {
            return <Tweet key={answer} content={answer}/>
          })}
        </main>
  )
}