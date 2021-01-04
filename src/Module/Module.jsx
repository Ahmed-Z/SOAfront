import React, { Component } from "react";
import ModuleTable from './ModuleTable'
import ModuleForm from './ModuleForm'

class Module extends Component {
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
                               <ModuleTable 
                                 addForm={this.handleAddForm}
                                 onRouteChange={this.props.onRouteChange}
                               />
                             )
                         ) : (
                             <ModuleForm
                               onFormClose={this.handleFormClose}
                             />
                           )}
                
                </div>
                  );
                }
                }
                
              
export default Module;