import './Navigator.css'
export const Navbar = () =>
    {
      return(
        <nav className='nav-details'>
            <div className='title'>
                <p>E-Portfolio</p>
            </div>
            <div>
                <ul className='nav-menu'>
                    <li> <a>Home</a> </li>    
                    <li> <a>About</a> </li>      
                    <li> <a>Projects</a> </li>
                    <li> <a>Skills</a> </li>
                    <li> <a>Contact</a> </li>
                </ul>
            </div>
          
        </nav>
      )
    }