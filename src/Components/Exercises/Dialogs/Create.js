import React, {Component, Fragment} from 'react'

import Add from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import {Dialog, Button} from '@material-ui/core';
import {DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core/Dialog'

export default class extends Component {

    state = {
        open: false
    }

    render() {

        const open = this.state.open

        return <Fragment>

            <Button variant="fab" mini>
                <Add/>
            </Button>

            <Dialog
                open={open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Create a New Exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>

                    <form></form>

                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
}
