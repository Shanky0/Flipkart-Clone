import React from 'react';
import './header.css';

function Header() {
  return (
    <div>
        <div id="list">
          <div className="optionlist">
            <a href="+"><div className="innerlist"><img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="Top offers" /><p>Top Offers</p></div></a>
          </div>
          <div className="optionlist">
            <a href="+"><div className="innerlist"><img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="Top offers" /><p>Grocery</p></div></a>
          </div>
          <div className="optionlist">
            <a href="+"><div className="innerlist"><img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="Top offers" /><p>Mobiles</p></div></a>
          </div>
          <div className="optionlist">
            <a href="+"><div className="innerlist"><img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="Top offers" /><p>Fashion &#8964;</p>
              <div className="submenu">
                <ul>
                  <li>Option 1</li>
                  <li>option 2</li>
                  <li>option 3</li>
                </ul>
              </div></div></a>
          </div>
          <div className="optionlist">
            <a href="+"><div className="innerlist"><img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="Top offers" /><p>Electronic	&#8964;</p>
              <div className="submenu">
                <ul>
                  <li>Option 1</li>
                  <li>option 2</li>
                  <li>option 3</li>
                </ul>
              </div></div></a>
          </div>
          <div className="optionlist"><a href="+"><div className="innerlist"><img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="Top offers" /><p>Home &#8964;</p>
            <div className="submenu">
              <ul>
                <li>Option 1</li>
                <li>option 2</li>
                <li>option 3</li>
              </ul>
            </div></div></a></div>
          <div className="optionlist">
            <a href="+"><div className="innerlist"><img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="Top offers" /><p>Appliances</p></div></a>
          </div>
          <div className="optionlist">
            <a href="+"><div className="innerlist"><img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="Top offers" /><p> Travel	</p></div></a>
          </div>
          <div className="optionlist">
            <a href="+"><div className="innerlist"><img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="Top offers" /><p>Beauty,Toys & more</p>
              <div className="submenu">
                <ul>
                  <li>Option 1</li>
                  <li>option 2</li>
                  <li>option 3</li>
                </ul>
              </div></div></a>
          </div>
        </div>
      </div>
  )
}

export default Header