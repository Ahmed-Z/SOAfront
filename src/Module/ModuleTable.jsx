  
import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table'




class ModuleTable extends Component {
  state = {
    ModuleData: [],
    loading: false,

    columnDefs: [
      {
        title: "Nom",
        field: "Nom",
      },
      {
        title: "Coefficient",
        field: "Coefficient",

      },
      {
        title: "Type",
        field: "Type",
      },


    ],
    rowData: [],
    defaultColDef: {
      resizable: true,
      width: 100,
      filter: "agTextColumnFilter"
      // filter: true ,
    },
    getRowHeight: function (params) {
      return 35;
    }
  };
  ModuleObj = [];
  rowDataT = [];

  loadModuleData = () => {
    axios
      .get("http://localhost:8080/modules")
      .then(response => {
        this.ModuleObj = response.data;
        this.setState({ ModuleData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        this.ModuleObj.map(data => {
          let temp = {
            data,
            Nom: data["nom"],
            Prenom: data["Coefficient"],
            Type: data["type"],
    
          };
          this.rowDataT.push(temp);

        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
          console.log(error)
      });
  };

  onModuleDelete = (data) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet enregistrement? ") == true) {
      axios.delete("http://localhost:8080/modules/"+data.data.id)
      .then(res => {
        this.componentDidMount();
      })
    }
  };
  
  componentDidMount() {
    this.loadModuleData();
  }
  handleClick = (e) => {
  }

  render() {
    // let filteredEmp = this.getFilteredEmp();
    return (
      <div style={{margin: "20px", width: 1200}}>

        <div id="clear-both" />
          <div
            id="table-div"
            className="ag-theme-balham"
          >
            <MaterialTable
            style={{margin: "10px"}}
              columns={this.state.columnDefs}
              data={this.state.rowData}
              title="Détails des modules"
              options={{
                search: true,
                paging: true,
                filtering: false,
                actionsColumnIndex: -1,
                exportButton: true,
                grouping: true
          }}
          actions={[
        {
          icon: 'add',
          tooltip: 'Ajouter module',
          isFreeAction: true,
          onClick:this.props.addForm
        },
        {
          icon: 'delete',
          tooltip: 'Supprimer module',
          onClick: (e,rowData) => this.onModuleDelete(rowData)
        }
      ]}
        />

          </div>
      </div>
    );
  }
}

export default ModuleTable;