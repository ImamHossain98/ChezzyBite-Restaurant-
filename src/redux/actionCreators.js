
import * as actionTypes from "./actionTypes";
import axios from "axios";
import { baseUrl } from "./baseUrl";


export const addComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    axios.post(baseUrl + 'comments', newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)))
}

//---->>>comment functions<<<<-----

export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})
export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

    axios.get(baseUrl + "comments")
        .then(response => response.data)
        .then(comments => dispatch(loadComments(comments)))
}



//-----Dishes functions------>>>

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING

})

export const dishesFailed = (errMsg) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMsg
})

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading());

    axios.get(baseUrl + "dishes")
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
}
