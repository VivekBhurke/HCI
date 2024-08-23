import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, colors } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledAppBar = styled(AppBar)({
  backgroundColor: '', // Dark background color
});

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor:'#fff', // Slightly lighter on hover
    color:'black',
    transform: 'scale(1.05)', // Scale up on hover
  },
}));

const ToolbarCenter = styled(Toolbar)({
  justifyContent: 'center',
});

const Title = styled(Typography)({
  flexGrow: 1,
  textAlign: 'center',
  color: '#fff',
});

function Menu() {
  return (
    <StyledAppBar position="static">
      <ToolbarCenter>
        <Title variant="h6">University Forms</Title>
        <StyledButton color="inherit" component={Link} to="/classroom">Classroom</StyledButton>
        <StyledButton color="inherit" component={Link} to="/department">Department</StyledButton>
        <StyledButton color="inherit" component={Link} to="/course">Course</StyledButton>
        <StyledButton color="inherit" component={Link} to="/instructor">Instructor</StyledButton>
        <StyledButton color="inherit" component={Link} to="/section">Section</StyledButton>
        <StyledButton color="inherit" component={Link} to="/teaches">Teaches</StyledButton>
        <StyledButton color="inherit" component={Link} to="/student">Student</StyledButton>
        <StyledButton color="inherit" component={Link} to="/takes">Takes</StyledButton>
        <StyledButton color="inherit" component={Link} to="/advisor">Advisor</StyledButton>
        <StyledButton color="inherit" component={Link} to="/time-slot">Time Slot</StyledButton>
        <StyledButton color="inherit" component={Link} to="/prereq">Prereq</StyledButton>
      </ToolbarCenter>
    </StyledAppBar>
  );
}

export default Menu;
