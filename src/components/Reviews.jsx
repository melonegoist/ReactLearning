export const Reviews = ({reviews}) => {
    return (
        <div>
            {
                reviews.length > 0 && reviews.map((review) => (
                    <Review
                        name={review.name}
                        author={review.author}
                        rating={review.rating}
                    />
                ))
            }
        </div>
    )
}
