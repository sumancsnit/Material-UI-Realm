import React from 'react'
import {Paper, Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

export default({ muscles, onSelect, category }) => {

    const index = category 
        ? muscles.findIndex(group => group === category) + 1
        : 0
    
    const onIndexSelect = (e, index) => 
        onSelect(index === 0 ? '' : muscles[index - 1])

    return (
        <React.Fragment>
        <Paper className="footer">
            <Tabs
                value={index}
                onChange={onIndexSelect}
                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab label="All"/> {muscles.map(group => <Tab key={group} label={group}/>)}
            </Tabs>
        </Paper>
    </React.Fragment>
    
    ) 
}


