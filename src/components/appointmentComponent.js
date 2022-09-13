import React from "react";
import {
  AppointmentContainer,
  RescheduleButton,
} from "../styledComponent/index";
import RescheduleModal from "./RescheduleModal";
function Appointment(props) {
  console.log("props", props);
  const [openModal, setOpenModal] = React.useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AppointmentContainer>
        {props.p1} - Time: {props.Time}: 00<br />
        {props.p2} - Time: {props.Time}: 00<br />
        {props.p3} - Time: {props.Time}: 00<br />
        {props.p4} - Time: {props.Time}: 00<br />
        Task - {props.Task} <br />
      </AppointmentContainer>
      <div style={{ backgroundColor: "#000080", marginBottom: "10px" }}>
        <RescheduleButton onClick={() => setOpenModal(true)}>
          Reschedule
        </RescheduleButton>
      </div>
      <RescheduleModal
        modalState={openModal}
        data={props}
        closeModal={closeModal}
      />
    </>
  );
}

export default Appointment;
