import React from 'react'
import classes from './Nav.module.css'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  //debugger;
  let NavBar = props.state.Nav.map( (item) => {
    return (<div className={classes.containerForLink}>
          <Link to={item.to} activeClassName={classes.activeLink}>{item.navName}</Link>
    </div>)
  })

    return (
        <nav className={classes.nav}>
        {NavBar}
      </nav>
    );
};

export default Nav;