import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default class MenuPrincipal extends Component {

    state={
        status:false,
        series:[]
    }

    cargarSeries=()=>{
        var request = "/api/Series";
        var url = "https://apiseriespersonajes.azurewebsites.net/" + request;
        console.log(url);
        axios.get(url).then(res=>{
            this.setState({
                series: res.data,
                status:true
            });
            console.log(this.state.series);
        });
    }

    componentDidMount = ()=>{
        this.cargarSeries();
    }



    render() {
        return (
            <nav
            className="navbar navbar-expand-lg navbar navbar-light"
            style={{backgroundColor: '#e3f2fd'}}
          >
            <img
              src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/9371.png"
              style={{width:'120px', height: '50px'}}
            />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#"
                    >Home <span className="sr-only">(current)</span></a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Nuevo Personaje</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Modificar Personaje</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Series
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {this.state.status == true && (
                this.state.series.map((serie, index)=>{
                    return(
                    <NavLink class="dropdown-item" key="{index}" to={"/serie/" + serie.idSerie}>{serie.nombre}</NavLink>
                    )
                })
            )}
	</div>
                </li>
              </ul>
            </div>
          </nav>
          
        )
    }
}
