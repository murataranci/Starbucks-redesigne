import React from 'react'
import {useState, useEffect} from 'react';

const FakeData = () => {
    const [datas, setData] = useState([])


    useEffect(() => {
        fetch("./fakeData.json")
    .then((res) => res.json())
    .then((fakeData) => setData(fakeData))

    },[])

    

    return(
        <div>
             {datas.map((data) => (
                 <h1 key={data.id}>{data.Description}</h1>
         )
         )}
     </div>
 );
}


export default FakeData