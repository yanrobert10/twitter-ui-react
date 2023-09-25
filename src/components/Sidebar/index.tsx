import { Bell, BookmarksSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'
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
            <span>Home</span>
          </NavLink>
          <a href="">
            <Hash/>
           <span>Explore</span>
          </a>
          <a href="">
            <Bell/>
            <span>Notifications</span>
            </a>
          <a href="">
            <Envelope/>
            <span>Messeges</span>
           </a>
          <a href="">
            <BookmarksSimple/>
            <span>Bookmarks</span>
           </a>
          <a href="">
            <FileText/>
            <span>Lists</span>
           </a>
          <a href="">
            <User/>
            <span>Profile</span>
           </a>
          <a href="">
            <DotsThreeCircle/>
           <span>More</span>
          </a>
        </nav>

        <button className='new-tweet' type='button'>
          <Pencil/>
          <span>Tweet</span>
        </button>
      </aside>
  )
}