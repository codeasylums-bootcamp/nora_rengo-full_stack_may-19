import React from 'react';
import {Link} from 'react-router-dom';
import idimg from './id.png'
//import './Header.css'

const Header2= () => {
 return ( 
     <div>
         <nav class="mheader"  style={{backgroundColor:"#003152"}}>
            <Link className="navbar-brand" to='#'><img src={idimg} height="40" width="40"/></Link>
			<Link to='#'>Home</Link>
			<Link to='/signin'>Sign-Out</Link>
			
            
		</nav>
  
     </div>
 );
}

export default Header2;