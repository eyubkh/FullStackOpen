import React from 'react';
import ReactDOM from 'react-dom';

//////////// Header

const Header = ({ title }) => (
    <>
        <h1>{title}</h1>
    </>
);

//////////// Content

const Content = ({ exercises }) => (
    <>
        {exercises.map((item, key) => (
            <Part
                key={key}
                part={item.part}
                exercises={item.exercises}
            />
        ))}
    </>
);

const Part = ({ part, exercises }) => <p>{`${part} ${exercises}`}</p>;

//////////// Total

const Total = ({ exercises }) => {
    let totalExercises = 0;
    exercises.map(item => (totalExercises += item.exercises));
    return (
        <p>
            Number of exercises <strong>{totalExercises}</strong>
        </p>
    );
};

////

const App = () => {
    const course = 'Half Stack application development';

    const exercises = [
        {
            part: 'Fundamentals of React',
            exercises: 10,
        },
        {
            part: 'Using props to pass data',
            exercises: 7,
        },
        {
            part: 'State of a component',
            exercises: 14,
        },
    ];

    return (
        <div>
            <Header title={course} />
            <Content exercises={exercises} />
            <Total exercises={exercises} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
