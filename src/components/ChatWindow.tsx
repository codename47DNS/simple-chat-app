import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useDispatch } from 'react-redux';
import { sendMessage, receiveMessage } from '../store/chatSlice';
import { Box, Grid2 as Grid } from '@mui/material';
import { AppDispatch } from '../store/store';

const ChatWindow = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Function to handle the user's message and respond based on its content
  const handleSend = (message: string) => {
    dispatch(sendMessage({
      content: message,
      sender: 'Vite',
      isSender: true,
      avatar: "/vite.svg",
    }));

    // receiving a response based on the user's message
    setTimeout(() => {
      const response = generateResponse(message);
      dispatch(receiveMessage({
        content: response,
        sender: 'React',
        avatar: "/react.svg",
      }));
    }, 1000);
  };

  // Function to generate a response based on the user's input
  const generateResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi')) {
      const greetings = [
        'Hello! How can I help you today?',
        'Hi there! What’s up?',
        'Hey! How are you doing?',
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];  // Random greeting
    } else if (message.includes('how are you')) {
      return 'I’m doing great! How about you?';
    } else if (message.includes('weather')) {
      return 'It’s a nice day today!';
    } else if (message.includes('bye')) {
      return 'Goodbye! Talk to you soon!';
    } else {
      return 'I’m not sure how to respond to that. Could you ask something else?';
    }
  };


  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={4}>
          <img src="/banner-left.svg" alt="" />
        </Grid>
        <Grid size={8} sx={{ background: "rgba(255,255,255,0.5)" }}>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} height={"100vh"}>
            <MessageList />
            <MessageInput onSend={handleSend} />

          </Box>
        </Grid>
      </Grid>


    </Box>
  );
};

export default ChatWindow;
