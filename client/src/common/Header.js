import React from 'react';
import {Link} from 'react-router-dom';
import idimg from './id.png'
//import './Header.css'

const Header = () => {
 return ( 
     <div>
         <nav style={{backgroundColor:"#003152"}}>
            <Link className="navbar-brand" to='/'><img src={idimg} height="40" width="40"/></Link>
			<Link to='/'>Home</Link>
			<Link to='/signin'>Sign-in</Link>
			
            
		</nav>
  
     </div>
 );
}

export default Header;