import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 25px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: '5px 15px',
        },
    },
    heading: {
        color: '#115293',
        textDecoration: 'none',
        fontSize: '3em',
        fontWeight: 300,

        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
            fontWeight: 200,
        },
    },
    image: {
        marginRight: '15px',
        marginTop: '2px',
        [theme.breakpoints.down('sm')]: {
            margin: '0px',
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '310px',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginTop: 20,
            justifyContent: 'center',
        },
    },
    logout: {
        marginLeft: '20px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 15,
        },
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));
