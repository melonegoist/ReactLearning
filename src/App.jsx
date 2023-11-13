// export const App = () => {
//     return(
//         <div>
//             <h2>Hello, world!</h2>
//             ...
//             <h2>with components!!!</h2>
//         </div>
//     )
// }

//data to use
const filmDetails = {
    title: "Harry Potter",
    genre: "Fantasy",
    seasonsCount: 8,
    reviews: {
        review1: {
            name: "Ro",
            rating: 5
        },

        review2: {
            name: "Af",
            rating: 5
        },

        review3: {
            name: "St",
            rating: 4
        },

        review4: {
            name: "Av",
            rating: 4
        },

        review5: {
            name: "Bo",
            rating: 5
        }
    }
}




//component creation, component = function => returns: React.element(tag)
export const App = () => {
    const filmRating = useMemo(() => {
        return Math.floor(
            filmDetails.reviews.reduce((sum, review) => {
                return sum + review.rating
            }, 0) / filmDetails.reviews.length
        )
    }, [filmDetails.reviews])


    return ( //syntax sugar, returns only ONE element(div)
        <div> 
            <header />
        
            <FilmDetails
                title = {filmDetails.title}
                genre = {filmDetails.genre}
                seasonsCount = {filmDetails.seasonsCount}
            />

            <Reviews reviews={filmDetails.reviews}/>
            <Recommendations/>

            <footer/>
        </div>
    )
}