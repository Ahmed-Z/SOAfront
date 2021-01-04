  
import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table'




class EnseignantTable extends Component {
  state = {
    EnseignantData: [],
    loading: false,

    columnDefs: [
      {
        title: "Nom",
        field: "Nom",
      },
      {
        title: "Prenom",
        field: "Prenom",

      },
      {
        title: "CIN",
        field: "CIN",
      },
      {
        title: "Adresse",
        field: "Adresse",
      },

      {
        title: "Num. Tel",
        field: "numTel",

      },
      {
        title: "Grade",
        field: "Grade",

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

  loadEnseignantData = () => {
    axios
      .get("http://localhost:8080/enseignants")
      .then(response => {
        this.EnseignantObj = response.data;
        this.setState({ EnseignantData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        this.EnseignantObj.map(data => {
          let temp = {
            data,
            Nom: data["nom"],
            Prenom: data["prenom"],
            CIN: data["cin"],
            Adresse: data["adresse"],
            numTel: data["tel"],
            Grade: data["grade"],
          };
          this.rowDataT.push(temp);

        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
          console.log(error)
      });
  };

  onEnseignantDelete = (data) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet enregistrement? ") == true) {
      axios.delete("http://localhost:8080/enseignants/"+data.data.id)
      .then(res => {
        this.componentDidMount();
      })
    }
  };
  
  componentDidMount() {
    this.loadEnseignantData();
  }


  render() {
    // let filteredEmp = this.getFilteredEmp();
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
              title="Détails des enseignants"
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
          tooltip: 'Ajouter Enseignant',
          isFreeAction: true,
          onClick:this.props.addForm
        },
        {
          icon: 'delete',
          tooltip: 'Supprimer enseignant',
          onClick: (e,rowData) => this.onEnseignantDelete(rowData)
        }
      ]}
        />

          </div>
      </div>
    );
  }
}

export default EnseignantTable;