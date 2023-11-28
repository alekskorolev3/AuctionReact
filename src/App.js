import './App.scss';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Account from "./Components/Account/Account";
import Saved from "./Components/Account/Saved";
import Cart from "./Components/Account/Cart";
import Notifications from "./Components/Account/Notifications";
import MyAds from "./Components/Account/MyAds";
import Wallet from "./Components/Account/Wallet";
import CreateAd from "./Components/Account/CreateAd";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" exact={true} element={<Home/>}></Route>
            <Route path="/account" exact={true} element={<Account/>}></Route>
            <Route path="/account/my_ads" exact={true} element={<MyAds/>}></Route>
            <Route path="/account/saved" exact={true} element={<Saved/>}></Route>
            <Route path="/account/cart" exact={true} element={<Cart/>}></Route>
            <Route path="/account/notifications" exact={true} element={<Notifications/>}></Route>
            <Route path="/account/wallet" exact={true} element={<Wallet/>}></Route>
            <Route path="/account/create" exact={true} element={<CreateAd/>}></Route>
        </Routes>
        <Menu/>
    </div>
  );
}

export default App;
