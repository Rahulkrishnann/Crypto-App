import { makeStyles } from "@material-ui/styles";
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";

const useStyles = makeStyles({
  App: {
    backgroundColor:'#14161a',
    color:'white',
    minHeight:'100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header />
    
      <Route path="/" component={Homepage} exact/>
      <Route path="/coins/:id" component={CoinPage}  />
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
