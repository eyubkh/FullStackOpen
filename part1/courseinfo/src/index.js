import React from 'react';
import ReactDOM from 'react-dom';

const data = {
    course: 'Half Stack application development',
    exercises: [
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
    ],
};

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
    return (
        <div>
            <Header title={data.course} />
            <Content exercises={data.exercises} />
            <Total exercises={data.exercises} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
