import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Image from 'next/image'
import { useRouter } from "next/router";

const Displaycoins =()=>{
const router = useRouter();
const [coinsdata,setCoinsdata] = useState([])
useEffect(()=>{
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res)=>{
          console.log(res.data)
         setCoinsdata(res.data)
      }) 
      .catch((err)=>{
         console.log("Error Genarated while fetching the data",err);
      })
  },[])

const displayData = (data)=>{
  router.push({
      pathname:"/viewCoin",
      query:{
          ID:data
      }
  })
}

return(
 <div>
     <TableContainer>
        <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Symbol</TableCell>
                    <TableCell>Current Price</TableCell>
                    <TableCell>High 24Hrs Price</TableCell>
                    <TableCell>Low 24hrs Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {coinsdata.map((item,index)=>(
                      <TableRow onClick={()=>displayData(item.id)}>
                         <TableCell><img src={item.image} alt="Trulli" width="30" height="30"/></TableCell>
                         <TableCell>{item.name}</TableCell>
                         <TableCell>{item.symbol}</TableCell>
                         <TableCell>{item.current_price}</TableCell>
                         <TableCell>{item.price_change_24h}</TableCell>
                         <TableCell>{item.low_24h}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
        </Table>
    </TableContainer>
</div>
)}
export default Displaycoins;