import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
            height="100vh"
            projectID= '9e88ed74-6261-4f88-8128-0151e0adaa3b'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;