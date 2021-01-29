import {makeStyles} from '@material-ui/core/styles' ;


export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0,100,255, 1)',
  
  },
  heading: {
    color: 'rgba(255,255,255, 1)',
   
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down ('sm')] : {

    mainContainer : {
      flexDirection : "column-reverse"
      
    } 
  },
  appBar2: {
    borderRadius: 15,
    margin: '0px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0,100,255, 1)',
  
  },
  
  
}))