import React, { Component } from "react";
import EtudiantTable from './EtudiantTable'
import EtudiantForm from './EtudiantForm'

class Etudiant extends Component {
    state = {
      table: true,
      AddForm: true
    }

    handleFormClose = () => {
      this.setState({ table: true });
    };

    handleAddForm = ()=>{
      this.setState({ table: false });
    }

    render(){
        return (
            <div>
            {this.state.table ? ((
                               <EtudiantTable 
                                 addForm={this.handleAddForm}
                                 onRouteChange={this.props.onRouteChange}
                               />
                             )
                         ) : (
                             <EtudiantForm
                               onFormClose={this.handleFormClose}
                             />
                           )}
                
                </div>
                  );
                }
                }
                
              
export default Etudiant;