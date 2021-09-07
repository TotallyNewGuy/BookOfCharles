import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '500px',
    },
    create: {
        marginTop: '10px',
        fontWeight: 400,
        fontSize: '1.2rem',
    },
    title: {
        color: '#002984',
        fontWeight: 400,
        fontSize: '2.2rem',
    },
    tag: {
        fontWeight: 400,
        marginTop: '10px',
        fontSize: '1.1rem',
    },
    card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
    },
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
    },
    imageSection: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            // marginBottom: '25px',
        },
    },
    recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    loadingPaper: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
    },
}));