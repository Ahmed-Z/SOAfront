import React from 'react'
import {Drawer as MUIDrawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    List,

} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
    container:{width: "160px",
    marginLeft: '10px'
}
})

const Drawer = ({onRouteChange}) =>{
    const classes = useStyles()
    return(
        <MUIDrawer variant={'permanent'} className={classes.container}>
            <List>
          {['Etudiant', 'Enseignant', 'Cadre administratif','Classe','Seance','Module'].map((text, index) => (
              <span >
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} onClick={()=>onRouteChange(text)}/>
            </ListItem>
            </span>
          ))}
        </List>
        </MUIDrawer>
    )
}
export default Drawer;