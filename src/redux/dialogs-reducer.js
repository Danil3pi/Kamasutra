const SEND_MESSAGE = 'SEND-MESSAGE';
const TYPING_NEW_MESSAGE = 'TYPING-NEW-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: "Anton",
            name: "Anton",
            ava: "https://clck.ru/UNMiH",
            messages: [
                { text: 'Привет', type: 'incoming' },
                { text: 'Привет)', type: 'answer' },
                { text: 'Ты диману писал?', type: 'incoming' },
                { text: 'нет', type: 'answer' },
                { text: 'Ну ладно', type: 'incoming' },
            ]
        },

        {
            id: "Diman",
            name: "Diman",
            ava: "https://clck.ru/UNMiX",
            messages: [
                { text: 'САп, нига', type: 'incoming' },
                { text: 'Привет, пес', type: 'answer' },
                { text: 'Я от зизяя съеxал', type: 'incoming' },
                { text: 'Наконец-то', type: 'answer' },
                { text: 'Приезжай в пераом', type: 'incoming' },
                { text: 'Я чо конч', type: 'answer' },
                { text: 'Го в мордовию', type: 'answer' },
                { text: 'Поеду заправлять', type: 'incoming' },
            ]
        },

        {
            id: "Max",
            name: "Max",
            ava: "https://clck.ru/UNMio",
            messages: [
                { text: 'Привет, Братишка!', type: 'incoming' },
                { text: 'Привет, Брат!', type: 'answer' },
                { text: 'Я мотоцикл купил)', type: 'incoming' },
                { text: 'Приезжай, покатаемся', type: 'incoming' },
                { text: 'Обязательно', type: 'answer' },
                { text: 'В лес поедем', type: 'answer' },
                { text: 'на Слияние', type: 'incoming' },
            ]
        },
        { id: "Travov", name: "Travov", ava: "https://clck.ru/UNMjL", messages: [] },
        { id: "Vova", name: "Vova", ava: "https://clck.ru/UNMjL", messages: [] },
    ],
    contantMessage: '',
};

const dialogsReducer = (state = initialState, action) => {

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