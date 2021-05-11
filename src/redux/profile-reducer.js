const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        { message: "How are you?", likes_count: 123 },
        { message: "Hello, world!", likes_count: 23 },
        { message: "Stay like!", likes_count: 20000 },
        { message: "What are you doing here? -_-", likes_count: 0 },
        { message: "Goood", likes_count: 23 },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText !== '') {
                let post = {
                    message: state.newPostText,
                    likes_count: 0,
                };

                state.newPostText = "";

                state.posts.push(post);
            }

            return state;
        };
        case UPDATE_POST_TEXT: {
            state.newPostText = action.newPostText;

            return state;
        };
        default: return state;
    }

    // Не делаем перерисовку. Это уже ответсвенность не редьюсера
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (newPostText) => ({ type: UPDATE_POST_TEXT, newPostText });


export default profileReducer;