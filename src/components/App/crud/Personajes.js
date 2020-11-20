import React, { Component } from 'react';
import axios from 'axios';

export default class Personajes extends Component {

    constructor(props){
        super(props);
        this.state={
            idSerie:props.idSerie
        }
    }

    state={
        idSerie:0,
        personajes:[],
        status:false
    }


    buscarPersonajes = ()=>{
        var request="​/api​/Series​/PersonajesSerie​/" + this.state.idSerie;
        axios.get("https://apiseriespersonajes.azurewebsites.net" + request).then(res=>{
        this.setState({
            personajes:res.data,
            status:true
        });
        });
    }

    componentDidMount(){
        this.buscarPersonajes();
    }

    render() {
         return (
          <div>
               <h1>Personajes</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id Personaje</th>
                            <th>Nombre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status == true && (
                            this.state.personajes.map((p, index) => {
                                return(
                                    <tr key={index}>
                                    <td>{p.idPersonajes}</td>
                                    <td>{p.nombre}</td>
                                    <td>
                                        <img src={p.imagen}/>
                                    </td>
                                </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
          </div>
  )
                
     }
    }

