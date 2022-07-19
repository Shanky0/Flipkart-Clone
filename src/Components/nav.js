import React from 'react'
import './nav.css';
function Nav() {
     return (
          <div>
               <div id="NavBar" style={{ display: "flex", width: "100%" }}>
                    <div className="logo" style={{ cursor: "pointer" }}>
                         <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" />

                         <a href='+' id='logo2'><div style={{ display: "flex", fontStyle: "italic", color: "white", marginLeft: "10px", fontSize: "11px" }}>
                              <p>Explore</p>
                              <span style={{ color: "yellow", marginLeft: ".5%" }}>Plus</span>
                              <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="Plus logo" width="12px" height="12px" />
                         </div></a>
                    </div>
                    <div id="searchBar">
                         <input type="text" placeholder="Search for products,brands and more" />
                         <span id="search"><i className="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                    <div id="menu">
                         <div id="div1">
                              <a href="+" style={{ color: " #2455f4" }}>Login</a>
                              <div className="submenu">
                                   <ul>
                                        <li>Option 1</li>
                                        <li>option 2</li>
                                        <li>option 3</li>
                                   </ul>
                              </div>
                         </div>
                         <div> <a href="+"> Become a seller</a>
                         </div>
                         <div id='more'><a href="+">  More <i class="fa-solid fa-chevron-down"></i></a>
                              <div className="submenu">
                                   <ul>
                                        <li>Option 1</li>
                                        <li>option 2</li>
                                        <li>option 3</li>
                                   </ul>
                              </div>
                         </div>
                         <div><a href="+"><i class="fa-solid fa-cart-shopping"></i>   Cart</a> </div>
                    </div>
               </div>
          </div>
     )
}

export default Nav;