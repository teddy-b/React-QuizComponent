import React, { Component } from 'react'

import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(buttonText) {
    const { quiz_question: { answer }, showNextQuestionHandler } = this.props

    if (buttonText === answer) {
      showNextQuestionHandler()
    }
  }

  render() {
    // the test requires not to use destructuring
    // const { quiz_question: { instruction_text, answer_options } } = this.props

    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) => (
              <QuizQuestionButton
                key={index}
                button_text={answer_option}
                clickHandler={this.handleClick}
              />
            ))}
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
