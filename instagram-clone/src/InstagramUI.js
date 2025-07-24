import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  InputBase,
  Grid,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  TextField
} from '@mui/material';
import {
  FavoriteBorder,
  ChatBubbleOutline,
  Send,
  MoreHoriz,
  BookmarkBorder,
  ExploreOutlined,
  HomeOutlined,
  AddBoxOutlined,
  MovieOutlined
} from '@mui/icons-material';

export default function InstagramUI() {
  const [comments, setComments] = useState(["Nice pic!", "Awesome!"]);
  const [newComment, setNewComment] = useState("");
  const [dmOpen, setDmOpen] = useState(false);
  const [dmMessage, setDmMessage] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: '#fafafa', minHeight: '100vh' }}>
      {/* Left Sidebar */}
      <Box sx={{ width: 240, p: 2, display: { xs: 'none', md: 'block' }, borderRight: '1px solid #ddd' }}>
        <Typography variant="h5" sx={{ mb: 4, fontFamily: 'Grand Hotel, cursive' }}>
          Instagram
        </Typography>
        <List>
          <ListItem button onClick={() => setDmOpen(!dmOpen)}><ChatBubbleOutline sx={{ mr: 2 }} /> Messages</ListItem>
          <ListItem button><HomeOutlined sx={{ mr: 2 }} /> Home</ListItem>
          <ListItem button><ExploreOutlined sx={{ mr: 2 }} /> Explore</ListItem>
          <ListItem button><MovieOutlined sx={{ mr: 2 }} /> Reels</ListItem>
          <ListItem button><BookmarkBorder sx={{ mr: 2 }} /> Saved</ListItem>
          <ListItem button><AddBoxOutlined sx={{ mr: 2 }} /> Create</ListItem>
        </List>

        {dmOpen && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Direct Message</Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              value={dmMessage}
              onChange={(e) => setDmMessage(e.target.value)}
              placeholder="Type a message..."
              variant="outlined"
              size="small"
            />
            <Button fullWidth sx={{ mt: 1 }} variant="contained">Send</Button>
          </Box>
        )}
      </Box>

      {/* Main Feed */}
      <Box sx={{ flexGrow: 1, maxWidth: 600, mx: 'auto', mt: 4 }}>
        {/* Stories Row */}
        <Paper elevation={0} sx={{ display: 'flex', overflowX: 'auto', p: 1, mb: 2 }}>
          {[...Array(8)].map((_, i) => (
            <Box key={i} sx={{ mx: 1, textAlign: 'center' }}>
              <Avatar src={`https://i.pravatar.cc/150?img=${i + 1}`} sx={{ width: 56, height: 56, border: '2px solid red' }} />
              <Typography variant="caption">user{i + 1}</Typography>
            </Box>
          ))}
        </Paper>

        {/* Feed Post */}
        <Card sx={{ mb: 4 }}>
          <CardHeader
            avatar={<Avatar src={`https://i.pravatar.cc/150?img=3`} />}
            action={<IconButton><MoreHoriz /></IconButton>}
            title={`user3`}
            subheader="3 hours ago"
          />
          <CardMedia
            component="img"
            height="400"
            image={`https://source.unsplash.com/random/800x600`}
            alt="Post"
          />
          <CardActions disableSpacing>
            <IconButton><FavoriteBorder /></IconButton>
            <IconButton><ChatBubbleOutline /></IconButton>
            <IconButton><Send /></IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton><BookmarkBorder /></IconButton>
          </CardActions>
          <CardContent>
            <Typography variant="body2">
              <strong>user3</strong> This is a beautiful post!
            </Typography>
            <Box sx={{ mt: 1 }}>
              {comments.map((comment, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                  <strong>user{index + 5}</strong> {comment}
                </Typography>
              ))}
              <Box sx={{ display: 'flex', mt: 1 }}>
                <TextField
                  variant="standard"
                  placeholder="Add a comment..."
                  fullWidth
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button onClick={handleAddComment}>Post</Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Right Sidebar - Suggestions */}
      <Box sx={{ width: 320, p: 2, display: { xs: 'none', lg: 'block' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src='https://i.pravatar.cc/150?img=12' />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2">yourusername</Typography>
            <Typography variant="caption" color="text.secondary">Your Name</Typography>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <Button size="small">Switch</Button>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Suggestions For You</Typography>
        {[...Array(4)].map((_, i) => (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }} key={i}>
            <Avatar src={`https://i.pravatar.cc/150?img=${i + 20}`} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2">suggestion{i}</Typography>
              <Typography variant="caption" color="text.secondary">Follows you</Typography>
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <Button size="small">Follow</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}