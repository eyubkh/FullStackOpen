import React,{ useState } from 'react';
import './App.css';

const DATA = {
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0
};

function Button({handleClick,text}) {
    return (<button onClick={handleClick}>{text}</button>);
};

function Statistic({text,value}) {
    return(
        <tbody>
            <tr>
                <td>{text}:</td> 
                <td>{value}</td>
            </tr>
        </tbody>
    );
};
    
function App() {
    const [feedBack , setFeedBack] = useState(DATA);

    const  handleClic = (item) => {
        setFeedBack({
            ...feedBack,
            [item]: feedBack[item] + 1,
            all: feedBack.all + 1
        });
    };  

    function Statistics() {
        return (
            <>
                <h2>Statistics</h2>
                <table>
                    <Statistic text='Good' value={feedBack.good} />
                    <Statistic text='Neutral' value={feedBack.neutral} />
                    <Statistic text='Bad' value={feedBack.bad} />
                    <Statistic text='All' value={feedBack.all} />
                    <Statistic text='Avarage' value={avarage.toFixed(2)} />
                    <Statistic text='Positive' value={positive.toFixed(2) + '%' } />
                </table>
            </>
        );
    }

    const avarage = feedBack.all / 3; 
    const positive = (feedBack.good * 100) / feedBack.all;

    return (
        <div className="App">
            <h1>Give feedback</h1>
            <Button text="good" handleClick={() => handleClic('good')} />
            <Button text="neutral" handleClick={() => handleClic('neutral')}/>
            <Button text="bad" handleClick={() => handleClic('bad')} />
            {feedBack.all === 0 ? <p>No feedback given </p> :<Statistics />}
        </div>
    );
};

export default App;
