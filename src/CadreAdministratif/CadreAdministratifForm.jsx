import React, { Component } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class CadreAdministratifForm extends Component {
  state = {
    roleData: [],
    loading: false
  }
  
  handleCadreAdministratifSubmit = event => {
    event.preventDefault()
    
    this.setState({loading: true})
    let body = {
      nom: event.target[0].value,
      prenom: event.target[2].value,
      cin: event.target[4].value,
      adresse: event.target[6].value,
      tel: event.target[8].value,
      poste: event.target[10].value,

    };
   axios
 .post("http://localhost:8080/cadreadministratif", body)
  .then(res => {
    this.props.onFormClose()
   })
  .catch(err => {
  });
    
  };

  render() {
    return (
      <div>
        
        <Container maxWidth="sm">
        <h2 id="role-form-title">Ajouter les détails de cadre administratif</h2>
        <div className="container">

        <div>
        <form  id="form" onSubmit={this.handleCadreAdministratifSubmit}>
        <TextField
          label="Nom"
          style={{ margin: 8 }}
          placeholder="Nom"
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          fullWidth
        />
      <div>

      <TextField
                label="Prenom"
                style={{ margin: 8 }}
                placeholder="Prenom"
                required
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                fullWidth
              />
              </div>

              <div>
            <TextField
            fullWidth
                label="CIN"
                style={{ margin: 8 }}
                placeholder="CIN"
                required
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="text"
              />
              </div>
              <div>
            <TextField
            fullWidth
                label="Adresse"
                style={{ margin: 8 }}
                placeholder="Adresse"
                required
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="text"
              />
              </div>
          <div>
            <TextField
            fullWidth
                label="Num.Tel"
                style={{ margin: 8 }}
                placeholder="Num.Tel"
                required
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="text"
              />
              </div>
              <div>
              <TextField
              fullWidth
                label="Poste"
                style={{ margin: 8 }}
                placeholder="Poste"
                required
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="text"
              />
        </div>
       
        <div style={{margin: "10px"}}>
            <Button fullWidth type="submit" variant="contained">Enregistrer</Button>
            </div>
            <div style={{margin: "10px"}}>
            <Button fullWidth type="reset" variant="contained" onClick={this.props.onFormClose}>Annuler</Button>
            </div>
          </form>
          <RingLoader
        css={override}
        sizeUnit={"px"}
        size={50}
        color={"#0000ff"}
        loading={this.state.loading}
              />
        </div>
        </div>
</Container>
      </div>
      
    );
  }
}

export default CadreAdministratifForm;