export const FilmInfo = ({title, genre, seasonsCount}) => {
    return (
        <>
            <p>{title || "Unknown film"}</p>
            <p>{genre}</p>
            <p>{seasonsCount > 0 ? `Count - ${seasonsCount}`: "waiting for release"}</p>
        </>
    )
}
