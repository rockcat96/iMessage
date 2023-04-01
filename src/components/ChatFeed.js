import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
import MessageForm from './MessageForm';
import ChatTitle from './ChatTitle';

const ChatFeed = (props) => {
  console.log(props)
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);
    console.log(keys)

    return keys.map((key, index) => {
      const message = messages[key];
      //if there are messages we need to find the last nessage
      const isMyMessage = userName === message.sender.username//check the current user's username against the sender of this message's username

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage
              ? <MyMessage message={message} />
              : <OtherMessage message={message}/>}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="chat-feed">
      <ChatTitle chatTitle= {chat?.title}/>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <MessageForm {...props} chatId={activeChat} />
    </div>
  );
};

export default ChatFeed;