import React, { Component } from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='container-fluid px-0' style={{ backgroundColor: '#FCFBFA', height: '72vh' }}>
                    <div className='container pt-5'>
                        <div className='my-2'>
                            <p className='heading2'>About Us</p>
                            <p className='heading4' style={{marginRight: 200}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minus recusandae? Debitis asperiores nulla blanditiis ipsa excepturi eaque mollitia, reprehenderit, ut id, voluptatem voluptas. Natus quas voluptatem repudiandae porro in.</p>
                            <p className='heading3' style={{marginRight: 200, marginTop: 100}}>Farmacia made by</p>
                            <p className='heading3' style={{marginRight: 200}}>Zakki Rizqurobbi & Fawwaz Utomo 😄</p>
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default AboutUs;