import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(theme => ({
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    width: '100%'
  },
  titulo: {
    padding: 20,
    fontSize: 20,
    color: 'aqua',
    fontWeight: 'bold'

  }
}))

export default function MainMenu() {
  
  const classes = useStyle()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <MenuIcon />
        </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <span className={classes.titulo}> Aluno</span>
        <MenuItem onClick={handleClose}>
          <Link to='/aluno' className={classes.link}> Listagem de Alunos</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/aluno/novo' className={classes.link}> Cadastrar Novo Aluno</Link>
        </MenuItem>
        <span className={classes.titulo}> Curso</span>
        <MenuItem onClick={handleClose}>
          <Link to='/curso' className={classes.link}> Listagem de Cursos</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/curso/novo' className={classes.link}> Cadastrar Novo Curso</Link>
        </MenuItem>
        <span className={classes.titulo}> Professor</span>
        <MenuItem onClick={handleClose}>
          <Link to='/professor' className={classes.link}> Listagem de Professor</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/professor/novo' className={classes.link}> Cadastrar Novo Professor</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
