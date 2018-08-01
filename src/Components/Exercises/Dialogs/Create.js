import React, {Component, Fragment} from 'react'

import Add from '@material-ui/icons/Add';
import {TextField} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class extends Component {

    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleToogle = () => {
        this.setState({
            open: !this.state.open,
            
        })
    }

    handleClose = () => {
        this.setState({open: false})
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
            
        })
    }

    render() {

        const { open, exercise: { title, description, muscles }} = this.state

        return <Fragment>

            <Button onClick={this.handleToogle} variant="fab" mini>
                <Add/>
            </Button>

            <Dialog open={open} onClose={this.handleClose}>

                <DialogTitle>
                    Create a New Exercise
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>

                    <form>

                        <TextField
                            label="Title"
                            value={title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                            <br/>
                        <TextField
                            label="Description"
                            value={description}
                            multiline
                            rows="4"
                            onChange={this.handleChange('description')}
                            margin="normal"

                        />
                            <br/>
                        <TextField
                            label="Title"
                            value={title}
                            onChange={this.handleChange('title')}
                            margin="normal"

                        />

                    </form>

                </DialogContent>

                <DialogActions>
                    <Button color="primary" variant="raised">
                        Cancel
                    </Button>
                </DialogActions>

            </Dialog>

        </Fragment>
    }
}
