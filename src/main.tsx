import React from 'react'
import ReactDOM from 'react-dom/client'

import "./global.css"


import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/separator'


const tweets = [
  "Meu primeiro tweet",
  "Opah agora sim",
  "Deu certo tweetar"
]

// forEach / map

// forEach => não tem retorno


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar/>

      <div className="content">
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
            return <Tweet content={tweet}/>
          })}
        </main>
      </div>

      
    </div>
  </React.StrictMode>,
)
