import team from "./data/team";
import "./App.scss";
import EmployeeTicket from "./components/EmployeeTicket/EmployeeTicket";

function App() {
  return (
    <div className="app">
      <h1 className='ticket-tracker__heading'>Ticket Tracker</h1>
      <main className='ticket-tracker__cards'>
        <EmployeeTicket team = {team}/>
      </main>
    </div>
  );
};

export default App;
