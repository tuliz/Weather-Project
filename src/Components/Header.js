import styled from '@emotion/styled';
import {Home, Favorite, Brightness4} from '@mui/icons-material';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../Actions/appSlice';

const Header = () =>{

    const dispatch = useDispatch();
    const mode = useSelector(state => state.app.mode);
    
    const Div = styled.div`
      background-color:white;
      #header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        background-color: ${mode === 'light'? '#4E5D89' : 'black'};
        color: white;
      }
      h2{
        padding-left:10px;
      }
      .IconName{
         display: flex;
         flex-direction: column;
         align-items: center;
         font-size: 80%;
         font-weight:bolder;
      }
      .IconsDiv{
        display: flex;
      }
       Button{
         color: ${mode === 'light' ? 'white' : 'gray'} ;
      }
       Button:hover{
         color: ${mode === 'light' ? 'black' : 'white'};
      }
    `;

   

    const handleChangeMode = ()=> mode === 'light' ? dispatch(changeMode('dark')) : dispatch(changeMode('light'));
    


    return(
        <Div>
          <div id='header'>
            <h2>What's My Weather</h2>
            <div className='IconsDiv'>
              
              <div className='IconName'><Button onClick={handleChangeMode}><Brightness4/></Button>Mode</div> 
              <div className='IconName'><Link to='/home'><Button><Home/></Button></Link>Home</div> 
              <div className='IconName'><Link to='/favorites'><Button><Favorite/></Button></ Link>Favorites</div> 
            
            </div>

          </div>
        </Div>

    )
}

export default Header;