import React from 'react';
import dateFormat from 'date-format';
import Loading from './Loading';


const loadComments = (props) => {
    if (props.commentsIsLoading) {

        return <Loading />;
    }
    else {
        return (
            props.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                        <p>Rating : {comment.rating}</p>
                        <p>{dateFormat(comment.date, ('hh:mm:ss', new Date()))}</p>

                    </div>
                )
            })

        );
    }

};

export default loadComments;