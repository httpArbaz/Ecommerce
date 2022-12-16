import React,{useEffect} from "react";
import "./index.css";
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';
import SoupKitchenSharpIcon from '@mui/icons-material/SoupKitchenSharp';
import PetsSharpIcon from '@mui/icons-material/PetsSharp';
import DoorFrontSharpIcon from '@mui/icons-material/DoorFrontSharp';
import Aos from "aos";
import "aos/dist/aos.css";


function Special() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Special">
      <h2 className="specialTitle">Specialities</h2>
      <div className="SpecialBox">
        <div data-aos="fade-left" className="divv">
            <div className="circle"><HomeWorkSharpIcon className="icons"/></div>
            <h3 className="circleText">Home Supplies</h3>
          {/* </div> */}
        </div>
        <div data-aos="fade-right" className="divv">

            {" "}
            <div className="circle"><SoupKitchenSharpIcon className="icons"/></div>
            <h3 className="circleText">Kitchen Supplies</h3>
          {/* </div> */}
        </div>
  
    


        <div data-aos="fade-left" className="divv">
            <div className="circle"><DoorFrontSharpIcon className="icons"/></div>
            <h3 className="circleText">Indoor & Outdoor Supplies</h3>
          {/* </div> */}
        </div>
        <div data-aos="fade-right" className="divv">

            {" "}
            <div className="circle"><PetsSharpIcon className="icons"/></div>
            <h3 className="circleText">Pet Supplies</h3>
          {/* </div> */}
        </div>
  
        
        </div>
      </div>
 
  );
}

export default Special;
