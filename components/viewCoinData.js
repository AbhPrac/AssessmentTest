import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CoinData =(props)=>{
    
    const [coinInfo,setCoininfo] = useState([]);

  useEffect(()=>{
        const coinData = props.coinData;
        const URL = "https://api.coingecko.com/api/v3/coins/"+`${coinData}`
        console.log(URL)
        axios.get(URL)
        .then((res)=>{
            console.log(res.data)
            setCoininfo(res.data)
        })
        .catch((err)=>{
          console.log("Error generated while fetching the data",err)
        })
    },[])

  let homepageAddress = [];

   if(coinInfo.links == undefined){
      console.log("waiting to get the results")
   }else{
       console.log(coinInfo.links.homepage)
       homepageAddress.push(coinInfo.links.homepage);
   }

    return(
     <div>
         <TableContainer>
             <Table>
                 <TableHead>
                     <TableRow>
                         <TableCell>Name</TableCell>
                         <TableCell>Symbol</TableCell>
                         <TableCell>Hashing Algorithm</TableCell>
                         <TableCell>Description</TableCell>
                         <TableCell>Market Cap in EURO</TableCell>
                         <TableCell>HomePage</TableCell>
                         <TableCell>Genesis Date</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     <TableRow>
                         <TableCell>{coinInfo.name}</TableCell>
                         <TableCell>{coinInfo.symbol}</TableCell>
                         <TableCell>{coinInfo.hashing_algorithm}</TableCell>
                         <TableCell>{coinInfo.description == undefined ? "Description not provided" : coinInfo.description.en }</TableCell>
                         <TableCell>{coinInfo.market_cap_rank}</TableCell>
                         <TableCell>{homepageAddress.length == 0 ? (<>{"Home page URl"}
                         </>):(<>
                         {homepageAddress.map((item,index)=><a>{item}</a>)}
                         </>)}</TableCell>
                         <TableCell>{coinInfo.genesis_date == null ? "Date is not mentioned":(<>{coinInfo.genesis_date}</>)}</TableCell>
                     </TableRow>
                 </TableBody>
             </Table>
         </TableContainer>
     </div>
    )
}
export default CoinData;