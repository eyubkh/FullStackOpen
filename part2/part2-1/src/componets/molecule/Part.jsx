export function Part({ name,exercises }) {
    return(
        <article>
            <h3>{name}</h3>
            <p>Number of exersises: {exercises}</p>
        </article>
    )
}