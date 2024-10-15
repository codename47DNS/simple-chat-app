import { useRef, useEffect } from 'react';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MessageList = () => {
  const messages = useSelector<RootState, RootState["chat"]["messages"]>((state) => state.chat.messages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when a new message is added
  useEffect(() => {
    messagesEndRef.current && messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box flexGrow={1} overflow="auto">
      <List sx={{ width: '100%' }}>
        {messages.map((msg, index) => (
          <ListItem key={index} sx={{ maxWidth: 360, bgcolor: "rgba(255,255,255,0.8)", margin: "10px", borderRadius: "2rem", shadow: "2px 4px 4px 6px rgba(0, 0, 0, 0.8)", [`borderBottom${!msg.isSender ? "Left" : "Right"}Radius`]: 0, width: "fit-content", ml: msg.isSender ? "auto" : "10px" }} alignItems="flex-start">
            <ListItemAvatar>

              <Avatar alt={msg.sender} src={msg.avatar} sx={{ width: 24, height: 24 }} />

            </ListItemAvatar>
            <ListItemText
              primary={msg.sender}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    {msg.content}
                  </Typography>
                  <Typography display={"block"} variant="caption">{new Date(msg.timestamp).toLocaleTimeString()}</Typography>
                </>
              }
            />

          </ListItem>
        ))}
        {/* This element is used for auto-scroll */}
        <div ref={messagesEndRef} />
      </List>
    </Box>
  );
};

export default MessageList;
