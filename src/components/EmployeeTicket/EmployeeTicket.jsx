import React from 'react';
import Counter from "../Counter/Counter";
import "./EmployeeTicket.scss";

const EmployeeTicket = (props) => {
    const {team} = props;
    const employeeTickets = team.map((employee) => {
        return (
        <div className='employee-ticket'>
        <h2 className='employee-ticket__name'>{employee.name}</h2>
        <h3 className='employee-ticket__role'>{employee.role}</h3>
        <Counter/>
        </div>
    )})
        return(
            <div className='employee-ticket__container'>{employeeTickets}</div>
        )
        }
export default EmployeeTicket