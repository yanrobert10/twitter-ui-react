import { Bell, BookmarksSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
import twitterlogo from "../../assets/logo-twitter.svg"
import "./styles.css"

export function Sidebar() {
  return (
    <aside className="sidebar">
        <img className='logo' src={twitterlogo} alt="Logo" />

        <nav className='main-navegation'>
          <a href="" className='active'>
            <House weight='fill'/>
            Home
          </a>
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