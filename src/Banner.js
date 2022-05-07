import React, {useState,useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import bg from './img/banner_img.jpeg'; 
import './index.css'
import axios from 'axios';

function Banner() {
    // const [banner, setBanner]=useState([]);
    // useEffect(()=>{
    //     async function fetchData(){
    //         // http://trlxfr.com/admin/data/feeds/sdk/film_plug_prod_v1
    //         // https://glewedtv.com/index.php?api/getmovie
    //         const request= await axios.get('admin/data/feeds/sdk/film_plug_prod_v1');
    //         setBanner(request.data[2])
    //         // listToDisplay=[categories.movies,categories.series]
    //         console.log(banner)
    //         return request;
    //     }
    //     fetchData();
    // },[])
    // // setBanner(banner!=[] && banner.movies[2])
    // // console.log(!banner?.banner.movies[Math.floor((Math.random() * 100) )])


    return (
        <Container fluid className="banner">
            <Row className="bannerContainer p-0 m-0">
                <Col md="6" className="banner_content">
                <h1 className="banner_title">Dirty Spring</h1>
                 {/* <h4 className="banner_description">{banner.description}</h4>  */}
                </Col>
                <Col md="6" className="p-0 m-0">
                    <div className="banner_img p-0 m-0">
                     <img className="bannerImg p-0 m-0" src="https://i.vimeocdn.com/video/870122089-457485df87e28ef3cd955cd199e7ba0a7813274174b0e9ff01de35b4c9891424-d_960x540?r=pad"  />
                     </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
