import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButton = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return (good / total) * 100 || 0;
  };

  const option = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage().toFixed();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={option}
          onLeaveFeedback={handleButton}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percentage}
            title="Statistics"
          />
          :
          <Notification message="There is no feedback" />
        }
      </Section>
    </Container>
  );
};

export default App;
