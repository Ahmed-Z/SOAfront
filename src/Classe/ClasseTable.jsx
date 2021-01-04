  
import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table'




class ClasseTable extends Component {
  state = {
    ClasseData: [],
    loading: false,

    columnDefs: [
      {
        title: "Libelle",
        field: "Libelle",
      },
      {
        title: "Niveau",
        field: "Niveau",

      },
      {
        title: "Groupe",
        field: "Groupe",
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
  EnseignantObj = [];
  rowDataT = [];

  loadClasseData = () => {
    axios
      .get("http://localhost:8080/classes")
      .then(response => {
        this.EnseignantObj = response.data;
        this.setState({ ClasseData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        this.EnseignantObj.map(data => {
          let temp = {
            data,
            Libelle: data["nom"],
            Niveau: data["prenom"],
            Groupe: data["cin"],
          };
          this.rowDataT.push(temp);

        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
          console.log(error)
      });
  };

  onClasseDelete = (data) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet enregistrement? ") == true) {
      axios.delete("http://localhost:8080/classe/"+data.data.id)
      .then(res => {
        this.componentDidMount();
      })
    }
  };
  
  componentDidMount() {
    this.loadClasseData();
  }


  render() {

    return (
      <div style={{margin: "20px", width: 1200
      }}>

        <div id="clear-both" />
          <div
            id="table-div"
            className="ag-theme-balham"
          >
            <MaterialTable
            style={{margin: "10px"}}
              columns={this.state.columnDefs}
              data={this.state.rowData}
              title="Détails des classes"
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
          tooltip: 'Ajouter classe',
          isFreeAction: true,
          onClick:this.props.addForm
        },
        {
          icon: 'delete',
          tooltip: 'Supprimer classe',
          onClick: (e,rowData) => this.onClasseDelete(rowData)
        }
      ]}
        />

          </div>
      </div>
    );
  }
}

export default ClasseTable;