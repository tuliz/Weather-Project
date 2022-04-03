import React, { useEffect } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { geolocationRequest } from '../Api';
import { setError } from '../Actions/appSlice';
import { setCity } from '../Actions/homeSlice';


const App = ()=>{
  const dispatch = useDispatch();
  const mode = useSelector(state=>state.app.mode);
  const error = useSelector((state)=>state.app.errorMsg);

  const Div = styled.div`
  .errorMsg{
    color:red;
  }
      margin:0px;
      background-color: ${mode === 'light' ? 'white' : 'gray'}
  
`;

useEffect(()=>{
  navigator.geolocation.getCurrentPosition(position=>{
    geolocationRequest(position.coords.latitude, position.coords.longitude)
    .then(result=>{dispatch(setCity({key: result.data.Key, name: result.data.LocalizedName}))}).catch(err=>dispatch(setError(err.error)));
       })
  }, []);
 


  const globalErr = (error ? <p className='errorMsg'>{error}</p> : null);

  return (   
    <Div>
      <Header/>
      {globalErr}
      <Outlet/>
    </Div>
  );
}

export default App;
