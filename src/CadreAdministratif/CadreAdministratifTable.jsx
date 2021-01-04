  
import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table'




class CadreAdministratifTable extends Component {
  state = {
    CadreAdministratifData: [],
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
        title: "Poste",
        field: "Poste",

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
  CadreAdministratifObj = [];
  rowDataT = [];

  loadCadreAdministratifData = () => {
    axios
      .get("http://localhost:8080/cadreadministratif")
      .then(response => {
        this.CadreAdministratifObj = response.data;
        this.setState({ CadreAdministratifData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        this.CadreAdministratifObj.map(data => {
          let temp = {
            data,
            Nom: data["nom"],
            Prenom: data["prenom"],
            CIN: data["cin"],
            Adresse: data["adresse"],
            numTel: data["tel"],
            Poste: data["poste"],
          };
          this.rowDataT.push(temp);

        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
          console.log(error)
      });
  };

  onCadreAdministratifDelete = (data) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet enregistrement? ") == true) {
      axios.delete("http://localhost:8080/cadreadministratif/"+data.data.id)
      .then(res => {
        this.componentDidMount();
      })
    }
  };
  
  componentDidMount() {
    this.loadCadreAdministratifData();
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
              title="Détails des cadres administratif"
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
          tooltip: 'Ajouter cadre administratif',
          isFreeAction: true,
          onClick:this.props.addForm
        },
        {
          icon: 'delete',
          tooltip: 'Supprimer cadre administratif',
          onClick: (e,rowData) => this.onCadreAdministratifDelete(rowData)
        }
      ]}
        />

          </div>
      </div>
    );
  }
}

export default CadreAdministratifTable;