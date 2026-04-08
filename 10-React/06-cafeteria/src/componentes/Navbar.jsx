import React from 'react';
import '../stylesheets/Navbar+Banner.css'

function Navbar(){
    return(
        <div>
            <nav>
                <ul>
                    <li><h1>Café</h1></li>
                    <li class="left"><a href="#">Home</a></li>
                    <li class="left"><a href="#Menu">Menu</a></li>
                    <li class="left"><a href="#Contact">Contact</a></li>
                    <li class="left"><img src='/img/perfil.png' alt="" /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;