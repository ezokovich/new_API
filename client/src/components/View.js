import React, { useState, useEffect } from 'react';
import {useParams,Link}  from  "react-router-dom" ;
import axios from 'axios';
import "./View.css";

const View = () => {
    const [user , setUser] = useState([]);

    const {id} = useParams();

    
    useEffect(() =>{
        axios.get( `https://server-ezokovich.vercel.app/.com/api/get/${id}` )
        .then((resp) => setUser({...resp.data[0]}))
    },[id])

    return(
        <div style={{marginTop: "150px"}}>
            <div className="card">
                 <div className="card-header">
                      <p> Detail of Footballers</p>
                 </div>
                 <div className="container">
                     <strong>ID: </strong>
                     <span> {id}</span>
                     <br />
                     <br /> 

                     <strong>Wins: </strong>
                     <span> {user.wins}</span>
                     <br />
                     <br /> 

                     <strong>Losses :</strong>
                     <span> {user.losses}</span>
                     <br />
                     <br /> 

                     <strong>Points_Scored:</strong>
                     <span> {user.points_scored}</span>
                     <br />
                     <br /> 

                     <strong> Nom :</strong>
                     <span> {user.nom}</span>
                     <br />
                     <br /> 

                     <strong> Surnom:</strong>
                     <span> {user.surnom}</span>
                     <br />
                     <br />  

                     <Link to = "/">

                      <div className="btn btn-edit"> Go Back</div>

                     </Link>
                 </div>
            </div>
        </div>
    )
}

 
export default View 