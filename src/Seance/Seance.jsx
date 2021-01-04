import React, { Component } from "react";
import SeanceTable from './SeanceTable'
import SeanceForm from './SeanceForm'

class Seance extends Component {
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
                               <SeanceTable 
                                 addForm={this.handleAddForm}
                                 onRouteChange={this.props.onRouteChange}
                               />
                             )
                         ) : (
                             <SeanceForm
                               onFormClose={this.handleFormClose}
                             />
                           )}
                
                </div>
                  );
                }
                }
                
              
export default Seance;