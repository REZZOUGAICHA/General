import React, { useEffect } from 'react';
import "./Code.css"; // import the external CSS file
// import img1 from './Ellipse 515.png';
// import img2 from './Icon.png';
import { Link } from 'react-router-dom';
function Code() {
  useEffect(() => {
    var form=document.querySelector('textarea');
    var simuler=document.getElementById('btn2');
    var compile=document.getElementById('btn1')
    let time_compile=0;
    let nb = 1;
    let time_simule=0;
    let txt=document.createTextNode('compilé ');
   
    form.addEventListener('keydown', ()=>
    {
        let nb_lignes=document.createElement('div');
        nb++;
    })
    simuler.addEventListener('click',()=>
    {
        console.log(form.value);
        form.value='';
        // location.reload();
            checkorder();
    })
    compile.addEventListener('click',()=>
    {
       time_compile=Date.now();
       checkorder();
    })
    function checkorder()
    {
        if(time_compile>time_simule)
        {
           var compiled=document.querySelector('.compiled');
           compiled.textContent='compiled';
            console.log('le code a été bien compilé');  

        }
        else
        {
       throw new Error('Veuillez compiler le code avant la simulation')   
        }
    } 
  var codes=document.getElementsByTagName('textarea');
  codes[0].addEventListener('click',()=>
  {
    console.log(codes[0].disabled);

    codes[0].readonly=false; 
    codes[1].readonly=true;
    codes[1].value='';
  })
  codes[1].addEventListener('click',()=>
  {
    codes[1].readonly=false;
    codes[0].readonly=true;
    codes[0].value='';
    console.log(codes[1].disabled);

  })

  }, []); // This empty array as a second argument ensures that the effect is only run once when the component mounts
    return(
      <div>
        <div className="mini_nav">
          <div className="side_bar"></div>
          <h1 style={{ display: "inline", marginTop: "15px",marginLeft:"60px" }}>Simulation</h1>
    
        </div>
        <br></br>         <br></br>
        <br></br>
        <div className='hugecontainer'>
       <div className='Bigcontainer'>
        <div className="buttons">
          <button className="button" id="btn2">
Sauvegarder          </button>
          <button style={{position:'',bottom:""}} className="button" id="btn3">
          Exemples 
          </button>
          <button className="button" id="btn3">
              Mes programmes
            </button>
        </div>
        <br /> <br /> <br /> <br></br>
        <div className="container">
          <textarea 
            style={{ resize: "none", border: "1px solid #00A6FB" }}
            className="box"
            placeholder="Veuillez saisir votre code en mnémonique"
          ></textarea> 
          <h4>
            Ou bien
            </h4>
           <textarea
            style={{ resize: "none", border: "1px solid #00A6FB" }}
            className="box"
            placeholder="Veuillez saisir votre code en hexa"
          ></textarea>
           </div>             
             </div>      
        <br /> <br />
        <script src="myscripts.js"></script>      
      </div>
      
      <div className="container2">
           <button className="button" id="btn1" >
           Compiler            </button>          
            <button className="button" id="btn2">
            <a href='/code/simulation' style={{ color:'white' }}>       Simuler  {" > "}  </a>          </button>
          </div>
          <br></br>
          <br></br>
          <div className='compiled'>
          </div>
          <hr>
          </hr> </div>
    );
}
export default Code;