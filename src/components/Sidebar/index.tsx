import { Bell, BookmarksSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
import twitterlogo from "../../assets/logo-twitter.svg"
import "./styles.css"
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  return (
    <aside className="sidebar">
        <img className='logo' src={twitterlogo} alt="Logo" />

        <nav className='main-navegation'>
          <NavLink to="/"> {/* NavLink add class active para quando estiver selecionada retornara true*/ }
            <House weight='fill'/>
            Home
          </NavLink>
          <a href="">
            <Hash/>
            Explore
          </a>
          <a href="">
            <Bell/>
            Notifications
            </a>
          <a href="">
            <Envelope/>
            Messeges
           </a>
          <a href="">
            <BookmarksSimple/>
            Bookmarks
           </a>
          <a href="">
            <FileText/>
            Lists
           </a>
          <a href="">
            <User/>
            Profile
           </a>
          <a href="">
            <DotsThreeCircle/>
            More
          </a>
        </nav>

        <button className='new-tweet' type='button'>Tweet</button>
      </aside>
  )
}