import styled from '@emotion/styled';
import {Card, CardMedia} from '@mui/material';

const Div = styled.div`
display:inline-flex;
margin:10px;
 .Card{
        background-color: #F1F1F1;
        margin: 1%;
        padding: 0.3rem;
        width: 15vw;
        height: 35vh;
    }
    .cardHeader{
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
    .CardSubHeader{
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    
    @media(max-width: 700px){
           .Card{
               width:40vw;
               height:65vw;
           }
}

`;

const Item = (props)=>{
    return(
        <Div>
        <Card className='Card'>
            <p className='cardHeader'>{props.day || props.cityname}</p>
            <p className='CardSubHeader'>{props.date}</p>
            <CardMedia className='Image'
            image = {require(`../images/${props.img}.png`)} alt='rain'
            title = 'img'
            style={{ paddingTop: '56%' }}

            />

            <p className='CardSubHeader'>{props.degrees}</p>
            <p className='CardSubHeader'>{props.weather}</p>
        </Card>
        </Div>
    );
}

export default Item;