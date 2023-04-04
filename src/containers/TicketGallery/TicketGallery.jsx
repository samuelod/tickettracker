import React from 'react';
import "./TIcketGallery.scss";
import EmployeeTicket from '../../components/EmployeeTicket/EmployeeTicket';

const TicketGallery = (props) => {
	const { EmployeeTicketArr } = props;

	const employeeTickets = EmployeeTicketArr.map((employee, index) => {
		return (
			<div className='employeeTicket'>
				<EmployeeTicket key={index} name={employee.name} role={employee.role} />
			</div>
		);
	});

  return (
    <div className='employeeTicket__container'>{employeeTickets}</div>
  )
}

export default TicketGallery