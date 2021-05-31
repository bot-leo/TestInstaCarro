import React, {useState, useEffect, Fragment} from 'react'

import Header from './components/Header'
import AuctionCard from './components/AuctionCard'

import './App.css'

import axios from 'axios'

export default function App() {
  const [auction, setAuction] = useState([])
  


  const amount = auction.map(auction => {
        
    let amount = auction.bids 
    
    if(amount[0]){
      amount = (amount[0].amount).toLocaleString('pt-BR')
    }else{
      amount = 0
    }
    return(
      Number(amount)
    )
  })

 console.log(amount)


  
  
  useEffect(() =>{
    let getAuction = async () =>{
      let res = await axios.get('https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json');
      setAuction(res.data)
      
    }
    getAuction();
  },[])


  return (
    <div className="App">
       <Header/>
      <div className="ContentCards">
    
      {auction.map(auction => {
        
        let bids = auction.bids 
        let time = new Date(auction.remainingTime* 1000).toISOString().substr(11, 8)

        if(bids[0]){
          bids = Number((bids[0].amount).toLocaleString('pt-BR'))
        }else{
          bids = 0
        }
        return(
          <Fragment key={auction.id}>
          <AuctionCard  valueOffer={bids}
                        timeRes={time}
                        modelCard={auction.make + ' ' + auction.version}
                        imgUri={auction.imageUrl}
                        anoCard={auction.year}
                        kmCar={auction.km}
                        onClick={() => console.log(bids+250)} />  
                             
          </Fragment>
        )
      })}
      </div>
    </div>
  );
}
