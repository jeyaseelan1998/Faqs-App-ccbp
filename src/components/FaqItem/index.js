// Write your code here.
import { Component } from "react";
import './index.css'

class FaqItem extends Component {
    state = {
        showAnswer: false
    }

    onClickPlusButton = () => 
        this.setState(prevState => ({showAnswer: !prevState.showAnswer}))

    render() {
        const { faqDetails: { questionText, answerText } } = this.props
        const { showAnswer } = this.state
        const iconImageUrl = showAnswer ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png' : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
        const altText = showAnswer ? 'minus' : 'plus'
        return (
            <li className='faq-container'>
                <div className="question-btn-container">
                    <h1 className='question'>{questionText}</h1>
                    <button className="button" type="button" onClick={this.onClickPlusButton}>
                        <img alt={altText} src={iconImageUrl} className='icon' />
                    </button>
                </div>
                {showAnswer &&
                    <>
                        <hr className='separator' />
                        <p className='answer'>{answerText}</p>
                    </>
                }
            </li>
        )
    }
}

export default FaqItem