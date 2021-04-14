import React, { Fragment, useState, useEffect } from 'react';
import Bonus from './bonus';
import Regular from './regular';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import paperIcon from './butons/paper-icon';
import scoreRegular from './../actions/score-regular';
import axios from 'axios';
import { set } from 'mongoose';
import ResultsRegular from './results-page/results-regular';
import socketIOClient from 'socket.io-client';
import { useDispatch } from 'react-redux';
import WIN_DISPLAY from '../actions/regular-win';
import LOOSE_DISPLAY from '../actions/regular-loose';

function Main({ regular }) {
	const [userChoice, setUserChoice] = useState('');
	const [toggle, setToggle] = useState(true);
	const [computerChoice, setComputerChoice] = useState('');
	const [response, setResponse] = useState('');
	window.history.replaceState(null, 'Main', '/');
	window.addEventListener('popstate', (event) => {
		location.reload();
	});

	let result;
	let display = {};
	function referee() {
		var training = {};
		function learn(winner, loser) {
			if (!training[winner]) training[winner] = {};
			training[winner][loser] = 1;
		}
		function judge(play1, play2) {
			if (play1 === play2) {
				return 'tie';
			}
			return training[play1][play2] === 1 ? 1 : 2;
		}
		function validate(choice) {
			return choice in training;
		}
		function choices() {
			return Object.keys(training);
		}
		return {
			learn: learn,
			judge: judge,
			validAction: validate,
			getChoices: choices,
		};
	}
	var ref = referee();
	ref.learn('rock', 'scissors');
	ref.learn('paper', 'rock');
	ref.learn('scissors', 'paper');
	const dispatch = useDispatch();
	//	console.log(ref.judge(userChoice, computerChoice));
	const test = useDispatch();
	function resultFunction() {
		if (userChoice != '') {
			let regularResult = ref.judge(userChoice, computerChoice);
			if (regularResult === 1) {
				dispatch(scoreRegular());
				dispatch(WIN_DISPLAY());
			} else if (regularResult === 2) {
				dispatch(LOOSE_DISPLAY());
			}
		}
	}

	resultFunction();

	const changeToggle = (e) => {
		setToggle((state) => !state);
	};

	const toggleFunction = () => {
		if (toggle) {
			return (display = { display: 'block' });
		} else {
			return (display = { display: 'none' });
		}
	};
	toggleFunction();

	vtps: return (
		<Fragment>
			<Router>
				<div className={'main'}>
					<nav>
						<ul style={display}>
							<li>
								<Link
									to={'/regular'}
									onClick={() => {
										setToggle((state) => !state);
									}}
								>
									{'Regular'}
								</Link>
							</li>
							<li>
								<Link
									to={'/bonus'}
									onClick={() => {
										setToggle((state) => !state);
									}}
								>
									{'Bonus'}
								</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route
							path={'/regular'}
							render={() => (
								<Regular
									setuserchoice={setUserChoice}
									userchoice={userChoice}
									toggle={toggle}
									onClick={changeToggle}
									setcomputerchoice={setComputerChoice}
									computerchoice={computerChoice}
									referee={ref}
								/>
							)}
						/>
						<Route path={'/bonus'} render={() => <Bonus toggle={toggle} onClick={changeToggle} />} />
					</Switch>
				</div>
			</Router>
		</Fragment>
	);
}
export default Main;
