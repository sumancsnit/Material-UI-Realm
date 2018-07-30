import React from 'react'
import {AppBar, Toolbar, Typography } from '@material-ui/core'

export default () => <React.Fragment>
       <AppBar position="static" className="test-1234">
        <Toolbar>

          <Typography variant="headline" color="inherit" >
            Exercise Database
          </Typography>

          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
