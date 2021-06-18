import {Part} from '../molecule/Part'
import {Total} from '../molecule/Total'
export function Content({content}) {
    const numExercises = content.map(item => item.exercises)

    return(
        <section>
        {   content.map(part => (
                <Part 
                key={part.id} 
                name={part.name} 
                exercises={part.exercises} 
                />
            ))
        }
        <Total numberExercises={numExercises} />
        </section>
    );
};