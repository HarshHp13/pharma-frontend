import './Navbar.css'
import logo from'../assets/images/logo.png';
import profile from "../assets/images/profile.png"

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" className="d-inline-block align-text-top" />
        Company Name
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Masters
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#" role="button" type="button" data-bs-toggle="modal" data-bs-target="#Action1">Action 1</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" role="button" type="button" data-bs-toggle="modal" data-bs-target="#Action2">Action 2</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" role="button" type="button" data-bs-toggle="modal" data-bs-target="#Action3">Action 3</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">New Sample</a>
          </li>
        </ul>
        <div className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={profile} alt="Logo" width="35" className="d-inline-block align-text-top" />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Sign Out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div className="modal fade" id="Action1" tabIndex="-1" aria-labelledby="ActionLabel1" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="ActionLabel1">Modal 1</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <div className="modal fade" id="Action2" tabIndex="-1" aria-labelledby="ActionLabel2" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="ActionLabel2">Modal 2</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <div className="modal fade" id="Action3" tabIndex="-1" aria-labelledby="ActionLabel3" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="ActionLabel3">Modal 3</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
