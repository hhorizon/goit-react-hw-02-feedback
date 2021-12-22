import PropTypes from "prop-types";
import styled from "styled-components";

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;

// ---styles---
const StyledSection = styled.section`
  padding-left: 25px;
  padding-top: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const StyledTitle = styled.h2`
  letter-spacing: 0.03em;
  margin-bottom: 15px;
`;
