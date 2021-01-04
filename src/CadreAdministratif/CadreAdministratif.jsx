import React, { Component } from "react";
import CadreAdministratifForm from './CadreAdministratifForm'
import CadreAdministratifTable from './CadreAdministratifTable'

class CadreAdministratif extends Component {
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
                               <CadreAdministratifTable 
                                 addForm={this.handleAddForm}
                                 onRouteChange={this.props.onRouteChange}
                               />
                             )
                         ) : (
                             <CadreAdministratifForm
                               onFormClose={this.handleFormClose}
                             />
                           )}
                
                </div>
                  );
                }
                }
                
              
export default CadreAdministratif;