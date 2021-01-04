import './App.css';
import React, { Component } from "react";
import Etudiant from './Etudiant/Etudiant'
import Enseignant from './Enseignant/Enseignant'
import CadreAdministratif from './CadreAdministratif/CadreAdministratif'
import Module from './Module/Module'
import Classe from './Classe/Classe'
import Seance from './Seance/Seance'
import Drawer from './Drawer'


class App extends Component {
  state = {
    route: 'Etudiant'
  }
  handleFormClose = () => {
    this.setState({ table: true });
  };
  handleAddForm = ()=>{
    this.setState({ table: false });
  }
  onRouteChange = (route) =>{
    this.setState({route: route})
  }
  
  render(){
    return (
      <div className='container'>

      <Drawer onRouteChange={this.onRouteChange}/>
        <div>

        {this.state.route === 'Enseignant'?
        <Enseignant onRouteChange={this.onRouteChange}/>

        :(this.state.route === 'Etudiant'?
        <Etudiant onRouteChange={this.onRouteChange}/>

        :(this.state.route === 'Seance'?
        <Seance onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'Cadre administratif'?
        <CadreAdministratif onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'Classe'?
        <Classe onRouteChange={this.onRouteChange}/>
        :
        <Module onRouteChange={this.onRouteChange}/>

        ))))

      }

      </div>
</div>

    );
  }
  }
  

export default App;
