import React from 'react';

class Hero extends React.Component{
    render(){
        return(
        <div>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" class="d-flex align-items-center">
                <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
                <h1>Hotpoint Entertainment</h1>
                <h2>An organization aimed at solving your IT <br></br> 
                and Entertainment needs.</h2>
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
            {/* <!-- End Hero --> */}

        </div>)
    }
}
export default Hero;