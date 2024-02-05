import * as React from "react";
import axios from "axios";
import './App.css'
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";


export default function App() {
  
  const [baseCurrency, setBaseCurrency] = React.useState("USD")
  const [currency, setCurrency] = React.useState("EUR")

  const [rate, setRate] = React.useState()
  
  const handleBaseChange = (event) => {
    setBaseCurrency(event.target.value)
  };

  const handleCurChange = (event) => {
    setCurrency(event.target.value)
  };

  function fetchAPIdata() {
    const apiKey = '014651a2c23d06dbbb41a0c4146e76ee';
    const url = `https://api.forexrateapi.com/v1/latest?api_key=${apiKey}&base=${baseCurrency}&currencies=${currency}`
      axios.get(url)
      .then(response => {
        var temp = response.data.rates[Object.keys(response.data.rates)[0]];
        setRate(temp);
      })
      .catch(error => {
        alert(error);
      });
    }
  
  return (
    <div className="container">
    <div className="nav">
      <h1 className="heading">Global Currency Rate</h1>
    </div>
      <div className="main">
        <div className="container1">
          <h1>Base Currency</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">From</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={baseCurrency}
              label="From"
              onChange={handleBaseChange}
            >
              <MenuItem value="USD">Dollar - USA</MenuItem>
              <MenuItem value="EUR">Euro - Europe</MenuItem>
              <MenuItem value="INR">Rupees - India</MenuItem>
              <MenuItem value="GBP">Pound - UK</MenuItem>
              <MenuItem value="RUB">Rubles - Russia</MenuItem>
              <MenuItem value="AUD">Dollar - Australia</MenuItem>
              <MenuItem value="CNY">Yan Renmibi - China</MenuItem>
              <MenuItem value="CAD">Dollar - Canada</MenuItem>
              <MenuItem value="JPY">Yen - Japan</MenuItem>
            </Select>
          </FormControl>
          <h1>Select Currency</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">To</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="To"
              onChange={handleCurChange}
            >
              <MenuItem value="USD">Dollar - USA</MenuItem>
              <MenuItem value="EUR">Euro - Europe</MenuItem>
              <MenuItem value="INR">Rupees - India</MenuItem>
              <MenuItem value="GBP">Pound - UK</MenuItem>
              <MenuItem value="RUB">Rubles - Russia</MenuItem>
              <MenuItem value="AUD">Dollar - Australia</MenuItem>
              <MenuItem value="CNY">Yan Renmibi - China</MenuItem>
              <MenuItem value="CAD">Dollar - Canada</MenuItem>
              <MenuItem value="JPY">Yen - Japan</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" size="large" className="submit" style={{marginTop: "15px"}} onClick={()=>{
            fetchAPIdata();
          }
          }>Submit</Button>
        </div>

        <div className="container2">
          <h1>Currency Rate</h1>
          <p> {currency} : {rate}</p>
        </div>

        <footer>©️ Copyright Naitik Desai</footer>
      </div>
    </div>
  );
}
