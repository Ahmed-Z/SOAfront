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

class ClasseForm extends Component {
  state = {
    loading: false
  }
  
  handleClasseSubmit = event => {
    event.preventDefault()
    
    this.setState({loading: true})
    let body = {
      libelle: event.target[0].value,
      niveau: event.target[2].value,
      groupe: event.target[4].value,

    };
   axios
 .post("http://localhost:8080/enseignants", body)
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
        <h2 id="role-form-title">Ajouter les détails des classes</h2>
        <div className="container">

        <div>
        <form  id="form" onSubmit={this.handleClasseSubmit}>
        <TextField
          label="Libelle"
          style={{ margin: 8 }}
          placeholder="Libelle"
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
                label="Niveau"
                style={{ margin: 8 }}
                placeholder="Niveau"
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
                label="Groupe"
                style={{ margin: 8 }}
                placeholder="Groupe"
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

export default ClasseForm;