import { 
    Typography,
    createMuiTheme,
    ThemeProvider,
    makeStyles,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    ButtonGroup
} from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import CancelIcon from "@material-ui/icons/Cancel";
import SendIcon from "@material-ui/icons/Send";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const createClasses = makeStyles({
    textBox: { margin: "5px 0", width: 400 },
    headline: { fontSize: 30 }
})

function ContactUs(): JSX.Element {
    const classes = createClasses();

    const theme = createMuiTheme({
        typography: {
            fontFamily: 'Arial'
        },
        palette: {
            primary: { main: green[50] },
            secondary: { main: orange[600] }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <div className="contactUs-container">
                <Typography className={classes.headline}>
                    <MailOutlineIcon /> Contact Us
                </Typography>

                <TextField id="Name" label="Name" variant="outlined" />
                <br/>
                <TextField id="Email" label="Email" variant="outlined" />
                <br/>
                <TextField id="Message" label="Message" variant="outlined" />
                <br/>
                <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label="Send me updates via Email"
                />
                <br/>
                <ButtonGroup variant="contained">
                    <Button color="primary" startIcon={<SendIcon />}>Send</Button>
                    <Button color="secondary" startIcon={<CancelIcon />}>Cancel</Button>
                </ButtonGroup>
            </div>
        </ThemeProvider>
    )
}

export default ContactUs;