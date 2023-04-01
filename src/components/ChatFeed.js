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

      //we need to return th message component and check whether the messages are ours vs others to apply specific styling
      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage
            //need to pass message accessed as specific key as a meesage to the message components
              ? <MyMessage message={message} />
              : <OtherMessage message={message}/>}
          </div>
        </div>
      );
    });
  };

  //need to create a way to notify use when chat is still loading 
  if (!chat) return 'Chat is loading please wait...';

  return (
    <div className="chat-feed">
      <ChatTitle chatTitle= {chat.title}/>
      {renderMessages()}
      {/* leave some space off so the messages don't overlap the form */}
      <div style={{ height: '100px' }} />
      <MessageForm {...props} chatId={activeChat} />
    </div>
  );
};

export default ChatFeed;