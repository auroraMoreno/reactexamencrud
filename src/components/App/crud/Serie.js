import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Serie extends Component {

    constructor(props){
        super(props);
        this.state={
            idSerie:props.idSerie
        }
    }

    state={
        idSerie:0,
        serie:{},
        status:false
    }

    buscarSerie = ()=>{
        var request="/api/Series/" + this.state.idSerie;
        axios.get("https://apiseriespersonajes.azurewebsites.net/" + request).then(res=>{
        this.setState({
            serie:res.data,
            status:true
        });
        });
    }

    componentDidMount(){
        this.buscarSerie();
    }

    render() {
          if (this.state.serie != null) {
                  return (
                    <div>
                      <a href="/">Volver al listado</a>
                      <h1>Detalles {this.state.serie.nombre}</h1>
                        <img src={this.state.serie.imagen}/>
                    <p>Puntuacion: {this.state.serie.puntuacion}</p>
                    <NavLink to={"/personajes/" + this.state.idSerie}>Personajes</NavLink>
                    </div>
                  );
                } else if (this.state.status == false) {
                  return <h1>Cargando registro</h1>;
                } else {
                  return <h1>Ni idea....</h1>;
                }
              }
            

}
