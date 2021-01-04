  
import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table'




class EtudiantTable extends Component {
  state = {
    EtudiantData: [],
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
      // {
      //   title: "Email",
      //   field: "Email",
      // },
      // {
      //   title: "Nom de Departement",
      //   field: "NomDep",
      // },

      
      // {
      //   title: "Specialité",
      //   field: "Specialité",
      // },
 

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
  EtudiantObj = [];
  rowDataT = [];

  loadEtudiantData = () => {
    axios
      .get("http://localhost:8080/etudiants")
      .then(response => {
        this.EtudiantObj = response.data;
        this.setState({ EtudiantData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        this.EtudiantObj.map(data => {
          let temp = {
            data,
            Nom: data["nom"],
            Prenom: data["prenom"],
            CIN: data["cin"],
            numTel: data["tel"],
            Adresse: data["adresse"],
            numTel: data["tel"],
    
          };
          this.rowDataT.push(temp);

        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
          console.log(error)
      });
  };

  onEtudiantDelete = (data) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet enregistrement? ") == true) {
      axios.delete("http://localhost:8080/etudiants/"+data.data.id)
      .then(res => {
        this.componentDidMount();
      })
    }
  };
  
  componentDidMount() {
    this.loadEtudiantData();
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
              title="Détails des étudiants"
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
          tooltip: 'Ajouter étudiant',
          isFreeAction: true,
          onClick:this.props.addForm
        },
        {
          icon: 'delete',
          tooltip: 'Supprimer étudiant',
          onClick: (e,rowData) => this.onEtudiantDelete(rowData)
        }
      ]}
        />

          </div>
      </div>
    );
  }
}

export default EtudiantTable;