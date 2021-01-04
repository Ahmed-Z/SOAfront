  
import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table'




class SeanceTable extends Component {
  state = {
    SeanceData: [],
    loading: false,

    columnDefs: [
      {
        title: "Jour",
        field: "Jour",
      },
      {
        title: "Heure",
        field: "Heure",

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
  SeanceObj = [];
  rowDataT = [];

  loadSeanceData = () => {
    axios
      .get("http://localhost:8080/seances")
      .then(response => {
        this.SeanceObj = response.data;
        this.setState({ SeanceData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        this.SeanceObj.map(data => {
          let temp = {
            data,
            Jour: data["jour"],
            Heure: data["heure"],
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
      axios.delete("http://localhost:8080/seances/"+data.data.id)
      .then(res => {
        this.componentDidMount();
      })
    }
  };
  
  componentDidMount() {
    this.loadSeanceData();
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
              title="Détails des seances"
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
          tooltip: 'Ajouter seance',
          isFreeAction: true,
          onClick:this.props.addForm
        },
        {
          icon: 'delete',
          tooltip: 'Supprimer seance',
          onClick: (e,rowData) => this.onModuleDelete(rowData)
        }
      ]}
        />

          </div>
      </div>
    );
  }
}

export default SeanceTable;