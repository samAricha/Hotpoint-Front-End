import React from 'react';

class TopBar extends React.Component{
    render(){
        return(
        <div>
            {/* <!-- ======= Top Bar ======= --> */}
            <section id="topbar" class="d-flex align-items-center">
                <div class="container d-flex justify-content-center justify-content-md-between">
                <div class="contact-info d-flex align-items-center">
                    <i class="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">hotpoint2world@gmail.com</a>
                    <i class="bi bi-phone-fill phone-icon"></i> +254 101 292 595
                </div>
                <div class="social-links d-none d-md-block">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
                </div>
            </section>
        </div>
        )
    }
}

export default TopBar;
