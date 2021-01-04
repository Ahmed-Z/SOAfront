import React, { Component } from "react";
import EnseignantTable from './EnseignantTable'
import EnseignantForm from './EnseignantForm'

class Enseignant extends Component {
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
                               <EnseignantTable 
                                 addForm={this.handleAddForm}
                                 onRouteChange={this.props.onRouteChange}
                               />
                             )
                         ) : (
                             <EnseignantForm
                               onFormClose={this.handleFormClose}
                             />
                           )}
                
                </div>
                  );
                }
                }
                
              
export default Enseignant;