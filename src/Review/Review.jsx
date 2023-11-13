export const Review = ({name, author, rating}) => {
    return (
        <div>
            <span>{name}</span>
            <span>{author}</span>
            <span>{rating}</span>
        </div>
    )
}