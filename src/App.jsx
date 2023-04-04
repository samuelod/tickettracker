import './App.css';
import team from "./data/team";
import TicketGallery from "./containers/TicketGallery/TicketGallery";

function App() {
  return (
    <div className="app">
      <h1 className='ticket-tracker__heading'>Ticket Tracker</h1>
      <main className='ticket-tracker__cards'>
        <TicketGallery EmployeeArr={team} />
      </main>
    </div>
  );
};

export default App;
