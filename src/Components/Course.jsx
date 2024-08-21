const Course = ({courses}) =>
{
    return(
        <div>
            {courses.map(
                course=>
                    <div key={course.id}>

                        <h3>{course.name}</h3>

                        {course.parts.map(
                            part=>
                                <p key={part.id}>{part.name} {part.exercises}</p>  
                        )}

                        
                        <p>
                            {course.parts.reduce( 
                                    (exercises, part) =>
                                    {
                                        console.log("This is sum",exercises)
                                        console.log("This is order",part.exercises)
                                        return exercises + part.exercises
                                    }
                                , 0)}
                        </p>
                        
                    </div>
            )}
        </div>
    )
}

export default Course



