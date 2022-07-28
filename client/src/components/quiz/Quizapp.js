import React, { useState } from 'react';
import './quizapp.css' 

export default function Quizapp() {
	const questions = [
		{
			questionText: 'Around how many babies are treated for Shaken Baby Syndrome in the U.S. this past year?',
			answerOptions: [
				{ answerText: '500', isCorrect: false },
				{ answerText: '1300', isCorrect: true },
				{ answerText: '2500', isCorrect: false },
				{ answerText: '4000', isCorrect: false },
			],
		},
		{
			questionText: 'Shaken Baby Syndrome is the leading cause of physical child abuse deaths in the U.S.',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: true },
				
			],
		},
		{
			questionText: 'Is Shaken Baby Syndrome preventable?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'What percent of surviving victims suffer lifelong effects?',
			answerOptions: [
				{ answerText: '50%', isCorrect: false },
				{ answerText: '63%', isCorrect: false },
				{ answerText: '75%', isCorrect: false },
				{ answerText: '80%', isCorrect: true },
			],
		},
        {
			questionText: 'What is the number #1 trigger for caregivers shaking a baby?',
			answerOptions: [
				{ answerText: 'Smiling', isCorrect: false },
				{ answerText: 'Hiccuping', isCorrect: false },
				{ answerText: 'Laughing', isCorrect: false },
				{ answerText: 'Crying', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app2'>
			{showScore ? (
				<div className='score-section'>
                    <div>You scored {score} out of {questions.length}</div>
                    <div>Correct Answers:</div>
					<h4>Question 1: 1300</h4>
					<h4>Question 2: True</h4>
					<h4>Question 3: Yes</h4>
					<h4>Question 3: 80%</h4>
					<h4>Question 3: Crying</h4>
					
				</div>
                
                
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className= "quizbutton" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}