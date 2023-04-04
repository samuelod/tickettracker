import React from 'react';
import Counter from "../Counter/Counter";
import "./EmployeeTicket.scss";

const EmployeeTicket = (props) => {
    const { name, role } = props;
  return (
    <div>
        <h2 className='employee-ticket__name'>{name}</h2>
        <h3 className='employee-ticket__role'>{role}</h3>
        <Counter />
    </div>
  )
}

export default EmployeeTicket