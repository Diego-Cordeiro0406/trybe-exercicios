import { React, useState, useEffect } from 'react';

import './App.css';

import messagesList from './helpers/messageList';
import Header from './components/Header';
import Emails from './components/Emails';
import { READ, UNREAD } from './constants';

import Controls from './components/Controls';

function App() {
    const [messages, setMessages] = useState(messagesList);

    useEffect(() => {
        const isAllMessagesRead = messages.every(({ status }) => status === READ);
      
        if (isAllMessagesRead) {
            alert('Parabéns! Você leu todas suas mensagens!');
        }
    }, [messages]);

    const setMessageStatus = (messageId, newStatus) => {
        const updatedMessages = messages.map((currentMessage) => {
            if (currentMessage.id === messageId) {
                return { ...currentMessage, status: newStatus };
            }
            return currentMessage;
        });
    
        setMessages(updatedMessages);
    };

    const markAllAsRead = () => {
        const allAsRead = messages.map((m) => ({ ...m, status: READ }));
        setMessages(allAsRead);
    };
    
    const markAllAsUnread = () => {
        const allAsRead = messages.map((m) => ({ ...m, status: UNREAD }));
        setMessages(allAsRead);
    };

    return (
        <div className="App">
            <Header />
            <Emails
                messages={ messages }
                setMessageStatus={ setMessageStatus }
            />
            <Controls
                markAllAsRead={ markAllAsRead }
                markAllAsUnread={ markAllAsUnread }
            />
        </div>
    );
}

export default App;
