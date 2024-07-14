import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{
    if(!localStorage.getItem('username'))return<LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="3fdec4b6-b249-461c-b844-8bfd694d1b1f"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
        />
    );
}

export default App;