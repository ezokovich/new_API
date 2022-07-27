import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Home.css";

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, [])
    return (

        <div style={{ marginTop: "150px" }}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }} > No.</th>
                        <th style={{ textAlign: "center" }} > Wins</th>
                        <th style={{ textAlign: "center" }} > losses</th>
                        <th style={{ textAlign: "center" }} > Point-scored</th>
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
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                                <td>{item.points_scored}</td>
                                <td>{item.nom}</td>
                                <td>{item.surnom}</td>

                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className="btn btn-edit">Edit</button>
                                    </Link>
                                    <button className="btn btn-delete">Delete</button>
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

    )
}

export default Home;