import { Part } from '../molecule/Part'
import { Total } from '../molecule/Total'
import { Header } from './Header'
import '../../style/content.css'

export function Content({content , title}) {
    
    const numExercises = content.map(item => item.exercises)
    function parts(part){
        return (<Part 
        key={part.id} 
        name={part.name} 
        exercises={part.exercises} 
        />)
    }


    return(
        <section className='parts'>
        <Header title={title} />
        {content.map(parts)}
        <Total numberExercises={numExercises} />
        </section>
    )
}