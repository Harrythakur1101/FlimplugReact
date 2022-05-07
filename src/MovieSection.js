import React, {useState,useEffect} from 'react'
import { useLocation,useHistory } from 'react-router';
import MovieRow from './MovieRow'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Modal,Button } from 'react-bootstrap';
import { Focusable } from "react-js-spatial-navigation";


function MovieSection() {
    // var listToDisplay=[]
    const history = useHistory ();
    const [show, setShow] = useState(false);
    const [popUp ,setPopUp]=useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // var popUp=false;
    var result=[];
    var isSeries=false;
    var filtered=[];
    // popUp=false;
    var ispopUpOpen=false;
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            // http://trlxfr.com/admin/data/feeds/sdk/film_plug_prod_v1
            // https://glewedtv.com/index.php?api/getmovie
            const request= await axios.get('https://trlxfr.com/admin/data/feeds/sdk/film_plug_prod_v1');
            setCategories(request.data)
            console.log(request.data)
           
            // listToDisplay=[categories.movies,categories.series]
            // console.log(categories.movies.filter(x => x.id === '0510a405f7ef33c91669aa095fddc2fd'));
            // result = categories!=''&& categories.episodes.filter(obj => {
            //     return obj.id === "1d156325a3ea0a3b7899166367072164"
            // })

            return request;
        }
        fetchData();
        return () => {
            //your cleanup code codes here
            pressed=true
          };
    },[])
    
        // console.log(categories)
        //     if (categories.episodes) {
        //         filtered= categories.episodes.filter((item)=>{
        //             return item.id==="d1b1554b130945790d46b94a2ed8d3a2"
        //         })
        //         // console.log(filtered)
        //     }
        //     else(

        //         console.log("world!")
        //     )

        const movies=categories.movies;
        
        // const category_list=["hstlrs prds","lth","must see","quickie","scl jstc","undrgrnd","vibes","music","mov","pp","com","fam","wlgd2wi","fdrop","hfav"]    
        const category_list=   categories.categories         
       
        const location=useLocation()
        let pressed=false
        document.addEventListener("keydown",((e)=>{
            console.log(e.keyCode)
            if (!pressed) {    
                // pressed=true          
                if(e.keyCode==8){
                    if (document.querySelector(".movie_section")) {
                        console.log(location.pathname=="/")
                        // popUp()
                        if(ispopUpOpen==false){  
                        handleShow()
                        ispopUpOpen=true;
                        }
                    }
                    else{
                    // pressed=true
                    history.push("/")
                    }
                    console.log("front page popup")
                    console.log("ispopUpOpen"+ispopUpOpen)
              
            }
                if(e.keyCode==10009){
                    if (location.pathname=="/") {
                        if(ispopUpOpen==false){  
                            handleShow()
                            ispopUpOpen=true;
                            }
                    }
                    else{
                        // pressed=true
                        history.push("/")
                    }
                }
             
                if(e.keyCode==39){
                    if(ispopUpOpen==true){
                    if (document.querySelector('#confirmbtn')){
                    document.querySelector('#confirmbtn').style.backgroundColor="rgb(163, 88, 88)";
                    document.querySelector('#confirmbtn').style.borderColor="red";
                    document.querySelector('#cancelbtn').style.backgroundColor="rgb(155, 151, 151)"
                    document.querySelector('#cancelbtn').style.borderColor="rgb(155, 151, 151)"}
                    // popUp=true;
                    setPopUp(true)
                    console.log(popUp)
                    
                }

            }
                if(e.keyCode==37){
                    if(ispopUpOpen==true){
                    if (document.querySelector('#confirmbtn')){
                    document.querySelector('#cancelbtn').style.backgroundColor="rgb(163, 88, 88)"
                    document.querySelector('#cancelbtn').style.borderColor="red"
                    document.querySelector('#confirmbtn').style.backgroundColor="rgb(155, 151, 151)";
                    document.querySelector('#confirmbtn').style.borderColor="rgb(155, 151, 151)";}
                    // popUp=false;
                    setPopUp(false)
                    }
                }
            }
           
                    
                if(e.keyCode==13){
                    if(popUp==false && show ){
                        console.log(popUp)
                    console.log("13 key press handle")
                    setShow(false)
                    console.log(show)
                    ispopUpOpen=false;
                }
                else if(popUp==true && show ){
                    console.log(show)
                    window.close();
                    console.log("window Close ho gye")
                    ispopUpOpen=false;
                }
            }
           
            //     if(e.keyCode==13){
            //         if(popUp==true ){
            //         console.log(show)
            //         window.close();
            //         console.log("window Close ho gye")
            //         ispopUpOpen=false;
            //     }
            // }
            // setTimeout(()=>{
            //     ispopUpOpen=true;
            // },1000)

        }))
      
    //   function  popUp(){
    //         Swal.fire({
    //             title: 'Are you sure?',
    //             text: 'Do you want to exit?',
    //             icon: 'warning',
    //             showCancelButton: true,
    //             confirmButtonColor: '#3085d6',
    //             cancelButtonColor: '#d33', 
    //             confirmButtonText: 'Yes!'
    //          }).then((result) => {
    //             //  console.log(result)
    //             if(result.value){
    //                 console.log(result.value)
    //                 window.close();
    //            }
    //          })
    //     //     <Modal
    //     //     show={show}
    //     //     onHide={handleClose}
    //     //     backdrop="static"
    //     //     keyboard={true}
    //     //   >
    //     //     <Modal.Header >
    //     //       <Modal.Title>Modal title</Modal.Title>
    //     //     </Modal.Header>
    //     //     <Modal.Body>
    //     //       I will not close if you click outside me. Don't even try to press
    //     //       escape key.
    //     //     </Modal.Body>
    //     //     <Modal.Footer>
            
    //     //       <Button variant="secondary" onClick={handleClose}>
    //     //         Close
    //     //       </Button>
    //     //       <Button variant="primary">Understood</Button>
    //     //     </Modal.Footer>
    //     //   </Modal>



    //     }
      
    
     
     
    return (
        <div className="movie_section">
         
            {/* {listToDisplay.map(categories=>{
            return <MovieRow key={categories.genre_id}  category_title={categories.genre_name} movie_list={categories.contents}/> 
            })} */}
            
            {/* {categories !='' && <MovieRow isSeries title='Movies'  movie_list={categories.movies}/>}
            {categories !='' && <MovieRow isSeries={true} title='Series'  movie_list={categories.series}/>}
            {categories !='' && <MovieRow isSeries title='Movies'  movie_list={categories.movies}/>}
            {categories !='' && <MovieRow isSeries={true} title='Series'  movie_list={categories.series}/>} */}
            {
                



                category_list && category_list.map((category_name)=>{
                    return categories !='' &&  <MovieRow isSeries={true} title={category_name.name}  movie_list={movies.filter((movie)=>{
                        return movie.tags.includes(category_name.query)
                    })}/>
                })
            }
            
           
            <div>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header >
          <Modal.Title><h1 className='title' >Are You Sure?</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3 className='bodyModel'>Do You want To Exit?</h3> 
        </Modal.Body>
        <Modal.Footer>
        
         <Button className='button ' id='cancelbtn' onClick={handleClose}>
            Cancel
          </Button>
           <Button className='button ' id="confirmbtn" >Confirm</Button>
        </Modal.Footer>
      </Modal>
    
            </div>
        </div>
      
    )
}

export default MovieSection
