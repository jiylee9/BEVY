import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import pink from '@material-ui/core/colors/pink'
import { withStyles } from '@material-ui/core/styles';

import {login} from './Auth'

const styles = theme => ({  
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(./login.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: pink[500],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  palette: {
    primary: {
        main: pink[500],
      },
      secondary: {
        main: pink[500],
      },
  },

});

class Login extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: '', 
            password: ''
        }

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const user = target.user;
        const password = target.password; 
    
        this.setState({
          [user]: value,
          [password]: value
        });
      }

      handleSubmit = e => {
        e.preventDefault();
        login(this.state.email, this.state.password).catch(error => {
          alert('Invalid username/password.');
        });
      };
    
    render() {

        const { classes } = this.props; 

        return (
            
            <Grid container component="main" className={classes.root}>
              <CssBaseline />
              <Grid item xs={false} sm={4} md={7} className={classes.image} />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <form className={classes.form} 
                  onSubmit={event => this.handleSubmit(event)}
                  noValidate>
                 
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="user"
                      label="Username"
                      name="user"
                      autoComplete="user"
                      autoFocus
                      onChange={(newValue) => this.setState({user: newValue})}
                    />
                    
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(newValue) => this.setState({password: newValue})}
                    />

                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign In
                    </Button>

                    <Grid container>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                    <Box mt={5}>
                    </Box>
                  </form>
                </div>
              </Grid>
            </Grid>
          );
    }

}
  

export default withStyles(styles)(Login); 