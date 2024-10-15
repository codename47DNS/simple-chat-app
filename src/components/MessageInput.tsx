import { TextField, Button } from '@mui/material';
import { FormEvent, useState } from 'react';
import Box from '@mui/material/Box';

type MessageInputProps = {
  onSend: (message: string) => void;
}

const MessageInput = ({ onSend }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = (e: FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      onSend(message);  // Call the function to send the message
      setMessage('');    // Clear the input field after sending
    }
  };

  return (
    <form onSubmit={handleSend}>
      <Box display='flex' bgcolor={"rgba(255,255,255,0.8)"} sx={{ padding: "10px", borderRadius: "10px" }} gap={1} alignItems={"center"}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          variant='filled'
          fullWidth
        />
        <Button type='submit' variant='outlined'>Send</Button>

      </Box>
    </form>
  );
};

export default MessageInput;
