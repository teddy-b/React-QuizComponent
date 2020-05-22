import React, { Component } from 'react'

import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      incorrectAnswer: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(buttonText) {
    const { quiz_question: { answer }, showNextQuestionHandler } = this.props

    if (buttonText === answer) {
      this.setState({
        incorrectAnswer: false
      })
      showNextQuestionHandler()
    } else {
      this.setState({
        incorrectAnswer: true
      })
    }
  }

  render() {
    const { incorrectAnswer } = this.state

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
        {incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null}
      </main>
    )
  }
}

export default QuizQuestion
