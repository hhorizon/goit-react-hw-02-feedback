import PropTypes from "prop-types";
import styled from 'styled-components';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            {total === 0 ? (
                <StatisticsMess>No feedback given</StatisticsMess>
            ) : (
                <StatisticsList>
                    <StatisticsItem className="stat-item">Good: {good}</StatisticsItem>
                    <StatisticsItem className="stat-item">Neutral: {neutral}</StatisticsItem>
                    <StatisticsItem className="stat-item">Bad: {bad}</StatisticsItem>
                    <StatisticsItem className="stat-item">Total: {total}</StatisticsItem>
                    <StatisticsItem className="stat-item">Positive feedback: {positivePercentage}%</StatisticsItem>
                </StatisticsList>    
            )}
        </>  
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;


// ---styles---

const StatisticsList = styled.ul`
    list-style-type: none;
`

const StatisticsItem = styled.li`
    font-weight: 600;
    font-size: 18px;
    &:not(:last-child) {
        margin-bottom: 3px;
    }
`

const StatisticsMess = styled.p`
    font-weight: 600;
    font-size: 18px; 
`