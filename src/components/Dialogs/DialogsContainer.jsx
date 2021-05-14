import { createActionTyping, createActionSendingMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    const getGeter = () => {
        //Если на страниуе сообщений можно будет переходить еще на другие страницы, то это уже будет индекс не последненго слеша.
        //И имя пользователя будет уже другое
        let path = window.location.pathname;
        const lastIndexSlash = path.lastIndexOf('/');

        const friendName = path.split('').splice(lastIndexSlash + 1).join('');

        return friendName;
    };

    const typingMessage = (newTextMessage) => {
        props.dispatch(createActionTyping(newTextMessage));
    };

    const sendMessage = () => {
        const friend = getGeter();
        props.dispatch(createActionSendingMessage(friend))
    };
    
    return (
        <Dialogs    updateText={typingMessage} 
                    sendMessage={sendMessage}
                    dialogs={props.state.dialogs}
                    contantMessage={props.state.contantMessage}/>
    )
}

export default DialogsContainer;