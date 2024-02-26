import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return (good / total) * 100 || 0;
  };

  render() {
    console.log(this.state);
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage().toFixed();

    return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.handleButton}
          />
        </Section>
        <Section title='Statistics'>
          {totalFeedback ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={percentage}
              title='Statistics'
            />
            :
            <Notification message='There is no feedback' />
          }
        </Section>
      </Container>
    );
  }
}

export default App;
