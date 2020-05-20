import React, { Component } from 'react'

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { button_text, clickHandler } = this.props
    clickHandler(button_text)
  }

  render() {
    const { button_text } = this.props

    return (
      <li>
        <button onClick={this.handleClick}>{button_text}</button>
      </li>
    )
  }
}

export default QuizQuestionButton
