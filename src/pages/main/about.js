import React from 'react';

class About extends React.Component{
    render(){
        return(
        <div>
            {/* <!-- ======= About Section ======= --> */}
            <section id="about" class="about">
                <div class="container">

                    <div class="row">
                    <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                        <img src="assets/img/movies.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                        <h3>The best Tech and Entertainment organization in Kenya.</h3>
                        <p class="fst-italic">
                        The Customer is King.
                        </p>
                        <ul>
                        <li><i class="bi bi-check-circle"></i> Best Customer Service.</li>
                        <li><i class="bi bi-check-circle"></i> Quality Products.</li>
                        <li><i class="bi bi-check-circle"></i> Lots of Entertainment.</li>
                        </ul>
                        <p>
                        Do you need <b>Movies</b>, <b>Music</b>, <b>Play Station</b>?, we got you!<br/>
                        Do you need <b>printing services</b>?, we got you!<br/>
                        Do you need <b>accessories</b> such as <b>earphones</b>, <b>charger</b> etc?, we got you!<br/>
                        Do you need <b>cctv installation</b>?, we got you!<br/>

                        </p>
                    </div>
                    </div>

                </div>
                </section>
                {/* <!-- End About Section --> */}

        </div>)
    }
}
export default About;