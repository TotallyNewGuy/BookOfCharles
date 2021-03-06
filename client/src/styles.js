import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontSize: 70
  },
  image: {
    marginLeft: '15px',
  },

  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
      fontSize: 32,
    },
    image: {
      marginLeft: '15px',
      height: 40,
    },
  },

}));