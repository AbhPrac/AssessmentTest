import React from "react";
import { useRouter } from "next/router";
import CoinData from "../components/viewCoinData";

const Viewcoindata =()=>{
    const router = useRouter();
    const dataId = router.query.ID;
 return(
     <div>
      <CoinData coinData={dataId}/>
     </div>
 )
}

export default Viewcoindata;