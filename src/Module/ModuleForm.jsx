import React, { Component } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class ModuleForm extends Component {
  state = {
    loading: false,
    type: 'Cours'
  }
  
  handleModuleSubmit = event => {
    event.preventDefault()
    
    this.setState({loading: true})
    let body = {
      libelle: event.target[0].value,
      niveau: event.target[2].value,
      type: this.state.type,

    };
   axios
 .post("http://localhost:8080/enseignants", body)
  .then(res => {
    this.props.onFormClose()
   })
  .catch(err => {
  });
    
  };

  handleChange = (e) =>{
    this.setState({type: e.target.value})
  }

  render() {
    return (
      <div>
        
        <Container maxWidth="sm">
        <h2 id="role-form-title">Ajouter les détails des module</h2>
        <div className="container">

        <div>
        <form  id="form" onSubmit={this.handleModuleSubmit}>
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
                label="Coefficient"
                style={{ margin: 8 }}
                placeholder="Coefficient"
                required
                margin="normal"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                fullWidth
              />
              </div>

              <div style={{ margin: 8 }}>
              <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Type
        </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.type}
                onChange={this.handleChange}
              >
                <MenuItem value={"Cours"}>Cours</MenuItem>
                <MenuItem value={"TD"}>TD</MenuItem>
                <MenuItem value={"TP"}>TP</MenuItem>
              </Select>
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

export default ModuleForm;