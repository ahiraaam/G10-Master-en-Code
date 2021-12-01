import './App.css';
import User from "./User";
import WithUser from "./withUser";

function App() {

  //HOC
  const CurrentUser = WithUser(User);


  return (
    <>
      <CurrentUser  userId={1}/>
      <CurrentUser  userId={2}/>
      <CurrentUser  userId={3}/>
    </>
  );
}

export default App;
