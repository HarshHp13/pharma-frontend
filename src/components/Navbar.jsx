import './Navbar.css'
export default function Navbar(params) {
  return (
    <div className="navbar">
        <div className="navbar__logo">
            <img src="https://i.imgur.com/7Igo9ZM.png" alt="logo" />
        </div>
        <div className='navbar__container'>
            <div className="navbar__containerUsername">{params.username}</div>
            <div className="navbar__containerLogout">Logout</div>
        </div>
    </div>
  )
}
