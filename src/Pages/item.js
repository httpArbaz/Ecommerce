import React,{useEffect} from 'react'
import ItemDetail from '../components/item/itemDetail'
import useMediaQuery from '@mui/material/useMediaQuery';
import Feature from '../components/feautureProduct/feature';
import { useLocation } from "react-router-dom";


function Item() {
  const matchesPro = useMediaQuery('(max-width:500px)');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ backgroundColor:"#f5f5f5"}}>
    <div style={{width:matchesPro === true ? "80%" : "70%",margin:"auto",paddingTop : matchesPro === true ? "150px"  :"250px"}}>
        <ItemDetail/>

    </div>
    <Feature Title="Realted Products"/>
    </div>
  )
}

export default Item