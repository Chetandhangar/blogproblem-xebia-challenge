import '../Home/home.css'
//import { useState } from 'react';
import resumeImage from '../../shared/images/resume.jpg'
import jsPDF from 'jspdf';

export function Home() {


    function downloadHandler(){
      var doc = new jsPDF('landscape','px','a4','false')
      doc.addImage(resumeImage,'JPG',65,20,500,400)
      doc.save('Chetan_Dhangar_18IT5024.pdf')
    }
  

  return (
    <div className="home">
      <div className="card-btn">
        <button
        className="btn-download"
        onClick={() => downloadHandler()}
        >Download Resume</button>
      </div>
       <div className="card-resume">
          <img
          className="card-image" 
          src={resumeImage}
           alt={"Chetan_Dhangar_Resume"}/>
         
       </div>
    </div>
  );
}


