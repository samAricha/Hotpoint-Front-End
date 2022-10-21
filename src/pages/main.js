import React from 'react';
import About from './main/about';
import WhyUs from './main/whyUs';
import Clients from './main/clients';
import Services from './main/services';
import Cta from './main/cta';
import Accessories from './main/accessories';
import Pricing from './main/pricing';
import Contact from './main/contact';



class Main extends React.Component{
    render(){
        return(
        <div>
            <main id="main">
                <About/>
                {/* <WhyUs/> */}
                <Clients/>
                <Services/>
                <Cta/>
                <Accessories/>
                {/* <Pricing/> */}
                <Contact/> 
                
            </main>
            {/* <!-- End #main --> */}
        </div>)
    }
}
export default Main;