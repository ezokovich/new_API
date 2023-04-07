import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";                                                                          
import axios from "axios"
import "./AddEdit.css"
import { toast } from 'react-toastify';

const initialState = {
    wins: "",
    losses: "",
    points_scored: "",
    nom: "",
    surnom: ""
}

const AddEdits = () => {
    const [state, setState] = useState(initialState);

    const { wins, losses, points_scored, nom, surnom } = state;

    const navigate = useNavigate();

    const {id}  = useParams();

    useEffect(() =>{
        axios.get( `https://server-ezokovich.vercel.app/api/get/${id}` )
        .then((resp) => setState({...resp.data[0]}))
    },[id])


 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!wins || !losses || !points_scored || !nom || !surnom) {
            toast.error("please inter the value into each input field")
        } else {
            if (!id){

                axios.post("https://server-ezokovich.vercel.app/api/post", {
                    wins,
                    losses,
                    points_scored,
                    nom,
                    surnom
                }).then(() => {
                    setState({wins:"",losses:"",points_scored:"",nom:"",surnom:"",})
                } ).catch((err) => toast.error(err.response.data));
                toast.success("send succefully")
            }else {
                axios.put(`https://server-ezokovich.vercel.app/api/update/${id}`, {
                    wins,
                    losses,
                    points_scored,
                    nom,
                    surnom
                }).then(() => {
                    setState({wins:"",losses:"",points_scored:"",nom:"",surnom:"",})
                } ).catch((err) => toast.error(err.response.data));
                toast.success("Update successfully")
            }
       
            setTimeout(() =>  navigate(`/`),500)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    return (
        <div style={{ marginTop: "100px" }}>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="">Wins</label>
                <input type="number"
                    id="wins"
                    name="wins"
                    placeholder=" the wins ...."
                    value={wins || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="">Losses</label>
                <input type="number"
                    id=""
                    name="losses"
                    placeholder=" the losses ...."
                    value={losses || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="">points_scored</label>
                <input type="number"
                    id="points_scored"
                    name="points_scored"
                    placeholder=" the points_scored...."
                    value={points_scored || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="">Nom</label>
                <input type="text"
                    id="nom"
                    name="nom"
                    placeholder=" the Nom ...."
                    value={nom || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="">Surnom</label>
                <input type="text"
                    id="surnom"
                    name="surnom"
                    placeholder=" the Surnom ...."
                    value={surnom || ""}
                    onChange={handleInputChange}
                />

                <input type="submit" value={id ? "Update" : "Save"} />
                <Link to="/">
                    <input type="button" value="Go Back" />
                </Link>
            </form>

        </div>
    )
}

export default AddEdits
