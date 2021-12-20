import React, { Component } from "react";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import Section from './components/Section/Section'
import styled from 'styled-components';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    if (this.countTotalFeedback() === 0) {
      return 0
    } else {
      return Math.round(good / (good + neutral + bad) * 100);
    }
  }

  leaveFeedback = (option) => {
    this.setState({ [option]: this.state[option] + 1 });
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
    <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
    </Container>
  )
  }
}

export default App;


// ---styles---

const Container = styled.div`
  margin-left: 100px;
`