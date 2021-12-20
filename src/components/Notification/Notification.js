import PropTypes from "prop-types";
import styled from 'styled-components';


const Notification = ({message}) => {
    return (
        <StatisticsMess>{message}</StatisticsMess>
    )
} 

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;


// ---styles---

const StatisticsMess = styled.p`
    font-weight: 600;
    font-size: 18px; 
`