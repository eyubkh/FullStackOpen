import React, { useState } from 'react'
import './App.css';


const DATA  = [
    {
        anecdotes: 'If it hurts, do it more often',
        votes: 18
    },
    {
        anecdotes: 'Adding manpower to a late software project makes it later!',
        votes: 3
    },
    {
        anecdotes: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        votes: 9
    },
    {
        anecdotes: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes: 9
    },
    {
        anecdotes: 'Premature optimization is the root of all evil.',
        votes: 2
    },
    {
        anecdotes: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        votes: 0
    }
];

const votesCopy = DATA.map( i => i.votes);


function Anecdotes({data}){

    let [number , setNumber] = useState(0);
    const [votes , setVotes] = useState(votesCopy);

    function handleClick() {
        setNumber(number === data.length - 1 ? number = 0 : number + 1);
    }

    function handleClickVote(){
        setVotes({
            ...votes,
            [number]: votes[number] + 1
        })
    }

    let mostVoted = [0,undefined]

    for(let key in votes){
        if(votes[key] > mostVoted[0]){
            mostVoted[0] = votes[key]
            mostVoted[1] = key
        }
    }

    return(
        <>
            <h1>{data[number].anecdotes}</h1>
            <p>has {votes[number]} votes</p>
            <button onClick={handleClickVote}>Vote</button>
            <button onClick={handleClick}>Next</button>
            <h3>{DATA[mostVoted[1]].anecdotes}</h3>
            <h3>{mostVoted[0]}</h3>
        </>
    )
}



function App() {

    return (
        <div className="App">
        <Anecdotes data={DATA} />
        </div>
    );
};

export default App;
