export function Total({numberExercises}) {
    const total = numberExercises.reduce((acc , curr) => acc + curr);
    return(
        <p>Total of <strong>{total}</strong> exercises</p>
    );
};