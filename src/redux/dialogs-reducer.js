const SEND_MESSAGE = 'SEND-MESSAGE';
const TYPING_NEW_MESSAGE = 'TYPING-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                text: state.contantMessage,
                type: 'answer',
            };

            for (let friend of state.dialogs) {
                if (friend.id === action.friend) {
                    friend.messages.push(newMessage);
                }
            }

            state.contantMessage = '';

            return state;
        };

        case TYPING_NEW_MESSAGE: {
            state.contantMessage = action.newTextMessage;

            return state;
        }
        default: return state; //!!!!!!!!!!!!!!!!!!!!!!!!!!!Не забывать про default
    }

};


export const createActionTyping = (newTextMessage) => ({ type: 'TYPING-NEW-MESSAGE', newTextMessage });
export const createActionSendingMessage = (friend) => ({ type: 'SEND-MESSAGE', friend });


export default dialogsReducer;