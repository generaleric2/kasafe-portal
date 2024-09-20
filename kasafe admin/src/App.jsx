import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Admin/Pages/home"
// import InboxPage from "./Admin/Pages/inbox"
// import Mail from "./Admin/Pages/mail"
// import Register from "./Admin/Pages/register"
// import Users from "./Admin/Pages/users"
// import Transactions from "./Admin/Pages/transactions"
// import Groups from "./Admin/Pages/groups"
// import Login from "./Admin/Pages/login"
// import Twofactor from "./Admin/Pages/2fa"

function App() {
  return (
    <div>
<Router>
  <Routes>
  <Route path="/home" element={<Home/>}/>
  {/* <Route path="/inbox" element={<InboxPage/>}/>
  <Route path="/mail" element={<Mail/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/users" element={<Users/>}/>
  <Route path="/transactions" element={<Transactions/>}/>
  <Route path="/groups" element={<Groups/>}/>
  <Route path="/" element={<Login/>}/>
  <Route path="/2fa" element={<Twofactor/>}/> */}
  </Routes>
</Router>
</div>
);
}

export default App;