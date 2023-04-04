import React from 'react';
import Counter from "../Counter/Counter";

const EmployeeTicket = (props) => {
    const {team} = props;
    const employeeTickets = team.map((employee, index) => {
        return (
        <div>
        <h2 className='employee-ticket__name'>{employee.name}</h2>
        <h3 className='employee-ticket__role'>{employee.role}</h3>
        <Counter/>
    </div>
    )})
        return(
            <div>{employeeTickets}</div>
        )
        }
export default EmployeeTicket