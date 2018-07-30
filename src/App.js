import React, {Component, Fragment} from 'react'
import './App.css'
import {Header, Footer} from './Components/Layout'
import Exercise from './Components/Exercises'
import {muscles, exercises} from './store'

class App extends Component {

    state = {
        exercises,
        category: '',
        exercise: {}
    }

    getExercisesByMuscles() {

        return Object.entries(this.state.exercises.reduce((exercises, exercise ) => {
            const {muscles} = exercise
            // const muscles = exercise.muscles

            exercises[muscles] = exercises[muscles]
                ? [
                    ...exercises[muscles],
                    exercise
                ]
                : [exercise]

            return exercises
        }, {}))
    }

    handleCategorySelected = category => {
        this.setState({category})
    }

    handleExerciseSelected = (id) => {
        this.setState(({ exercise }) => ({
            exercise: exercises.find(ex => ex.id === id)
        }))
    }

    render() {
        const exercises = this.getExercisesByMuscles(), { category, exercise } = this.state

        return <Fragment>
            <Header/>

            <Exercise 
                exercise={exercise}
                category={category} 
                exercises={exercises} 
                onSelect={this.handleExerciseSelected}

                />

            <Footer
                category={category}
                muscles={muscles}
                onSelect={this.handleCategorySelected}/>

        </Fragment>

    }
}

export default App;
