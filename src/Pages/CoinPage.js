import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinInfo from '../Components/CoinInfo';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    sidebar: {
        width:"30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margintop: 25,
        borderRight: "2px solid grey"
    }
    
});



const CoinPage = () => {
    const classes = useStyles();
    
    const { id } = useParams();
    const [coin, setCoin] = useState();
    const { currency,  symbol } = CryptoState();
    const fetchCoin = async() => {
        const { data } = await axios.get(SingleCoin(id));
        setCoin(data);
    };
    console.log(coin);
    useEffect(() => {
        fetchCoin();
    },[]);
    
        
  return (
    
        <div className={classes.container} >
        <div className={classes.sidebar} >
            <img src={coin?.image.large} alt={coin?.name} 
            height="200"
            style={{ marginBottom: 20 }} />
            <Typography variant="h3" className={classes.heading}>
                {coin?.name}
            </Typography>
        </div>
        <CoinInfo coin={coin} />
    </div>
    
    
  );
};

export default CoinPage