import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../../components/Header"
import { Separator } from "../../components/separator"
import { Tweet } from "../../components/Tweet"
import "./styles.css"

export function Timeline() {
  /**
   * Fluxo de renderização:
   * 
   * 1. Toda vez que alteramos o estadomos de um componente, TODO componente é recalculado
   * 2. Toda vez que o seu componente PAI renderizar.
   * 3. Toda Vez que alguma das suas propriedades mudarem.
   * 
   * Algoritmo de reconcialiação:
   * 
   * 1. Criar em memória a nova versão do HTML do componente
   * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
   * 3. Aplicar as operações JavaScript para alterar somente o necessario no HTML
   * 
   * 
  */


  // estado
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState(
    [
      "Meu primeiro tweet",
      "Opah agora sim",
      "Deu certo tweetar"
    ]
  )

  function createNewTweet(event: FormEvent) {
    event.preventDefault() //para toda vez que acionar o submit ela n irá redimencionar pagina
  
    setTweets([...tweets, newTweet]);
    setNewTweet("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      // submit
      setTweets([...tweets, newTweet]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
          <Header title='Home'/>

           
          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/34972426?v=4" alt="Yan Robert" />
              <textarea 
                id="tweet" 
                value={newTweet}
                placeholder="What's happening?"
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewTweet(event.target.value)
                }}
              />
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