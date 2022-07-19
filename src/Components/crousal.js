import React from 'react'

function Crousal() {
  return (
    <>
                <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{ width: "100%", height: "40vh", margin: "0" }}>
                    <div class="carousel-inner">
                        <div class="item active" style={item}>
                            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/cd2ab3bfbc378353.jpg?q=50" alt="Los Angeles" style={{ width: "100%", height: "40vh"}} />
                        </div>
                        <div class="item" style={item}>
                            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/65b32d0113df8556.jpg?q=50" alt="Chicago" style={{ width: "100%", height: "40vh", margin: "0" }} />
                        </div>
                        <div class="item" style={item}>
                            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/65b32d0113df8556.jpg?q=50" alt="Chicago" style={{ width: "100%", height: "40vh", margin: "0" }} />
                        </div>
                        <div class="item" style={item}>
                            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/cd2ab3bfbc378353.jpg?q=50" alt="Los Angeles" style={{ width: "100%", height: "40vh", margin: "0" }} />
                        </div>
                        <div class="item" style={item}>
                            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/cd2ab3bfbc378353.jpg?q=50" alt="Los Angeles" style={{ width: "100%", height: "40vh", margin: "0" }} />
                        </div>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next" >
                        <span class="glyphicon glyphicon-chevron-right" ></span>
                        <span class="sr-only" >Next</span>
                    </a>
                </div>
            </>
  )
}

export default Crousal;

const item = {
    height:"40vh"
}