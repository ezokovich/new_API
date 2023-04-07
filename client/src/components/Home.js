import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Home.css";
import ftf1 from "../img/ftf1.png"

const Home = () => {
    const [data, setData] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const loadData = async () => {
        const response = await axios.get("https://server-ezokovich.vercel.app/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, [])
    
    const deletefootballer = (id) =>{
        if(window.confirm("Are you sure to delete the stats ? remenber that it is for the government")){
            axios.delete(  `https://server-ezokovich.vercel.app/api/del/${id}`);
            toast.success("you have delete the information of the togo footballer with success");
            setTimeout(() => loadData(),500)
        }
    };
    return (

         <div>
          
          <div className="Navbar">
      <div ><img style={{width:"90px",height:"70px" , borderRadius:'70%',marginTop:"10px" }} src={ftf1} alt="logo"/></div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/addfoot"> Add footbaler</a>
 
     
       
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>

        <div style={{ marginTop: "150px" }}>
            <Link to="/addfoot"> 
            <button className="btn-contact">Add footballer</button>
            </Link>

            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }} > No.</th>
                        <th style={{ textAlign: "center" }} > Nom</th>
                        <th style={{ textAlign: "center" }} > Surnom</th>
                        <th style={{ textAlign: "center" }} > Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row" >{index + 1}</th>
                                <td>{item.nom}</td>
                                <td>{item.surnom}</td>

                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className="btn btn-edit">Edit</button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={() => deletefootballer(item.id)} >Delete</button>
                                    <Link to={`/view/${item.id}`}>
                                        <button className="btn btn-view">View</button>
                                    </Link>

                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>

    )
}

export default Home;