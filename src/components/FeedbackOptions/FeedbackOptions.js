import PropTypes from "prop-types";
import styled from 'styled-components';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {     
    return (
        <FeedbackOptionsList>
            {options.map(option => {
                const buttonName = option[0].toUpperCase() + option.slice(1);

                return (
                    <FeedbackOptionsItem key={option}>
                        <FeedbackBtn
                            type="button"
                            onClick={() => {onLeaveFeedback(option)}}
                        >
                            {buttonName}
                        </FeedbackBtn>
                    </FeedbackOptionsItem>
                )
            })}
        </FeedbackOptionsList>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;


// ---styles---

const FeedbackOptionsList = styled.ul`
    display: flex;
    padding: 10px;
    list-style-type: none;
`

const FeedbackOptionsItem = styled.li`
    &:not(:last-child) {
        margin-right: 10px;
    }
`

const FeedbackBtn = styled.button`
    background-color: #fff;
    padding: 3px 6px;
    border-radius: 4px;
    border: 1px solid #ccc; 
    font-weight: 600;
    font-size: 14px;
    
    &:active {
        background-color: #035bad;
    }
`