import { Button } from '@mui/material';
import React, { useState } from 'react';
import "./SearchPage.css";
import SearchResult from './SearchResult';

 const rooms = [
    {
        img:"../IMAGES/room1.jpg",
        location:"mumbai",
        title:"two rooms",
        description:"nice place",
        star:"4",
        price:"23",
        total:"233",
    },
    {
        img:"../IMAGES/room2.jpg",
        location:"mumbai",
        title:"two rooms",
        description:"nice place",
        star:"4",
        price:"23",
        total:"233",
    },
    {
        img:"../IMAGES/room3.jpg",
        location:"mumbai",
        title:"two rooms",
        description:"nice place",
        star:"4",
        price:"23",
        total:"233",
    },
 ]

function SearchPage() {
    const [userData,setUserData] = useState([]);
  return (
   <div className="searchpage">
    <div className="searchpage_data">
        <Button variend="outlined">
            USER NAME 
        </Button>
        <Button variend="outlined">
            USER EMAIL 
        </Button>
    </div>
    {rooms.map((data,index)=>
    (
        <SearchResult
        key={index}
        img={data.img}
        price={data.price}
        location={data.location}
        title={data.title}
        description={data.description}
        star={data.star}
        total={data.total}/>
    ))}
   </div>
  );
}

export default SearchPage;

