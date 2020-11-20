import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuPrincipal from './crud/MenuPrincipal';
import Serie from './crud/Serie';
import Personajes from './crud/Personajes';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <MenuPrincipal/>
            <Switch>
                <Route exact path="/serie/:idSerie"
                render={props=>{
                    var idSerie=props.match.params.idSerie;
                    return <Serie idSerie={idSerie}/>
                }
                }
                />
                <Route exact path="/personajes/:idSerie"
                render={props=>{
                    var idSerie=props.match.params.idSerie;
                    return <Personajes idSerie={idSerie}/>
                }
                }
                />
            </Switch>
            </BrowserRouter>
        )
    }
}