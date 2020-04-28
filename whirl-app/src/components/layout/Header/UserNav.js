import React from 'react';
import { connect } from 'react-redux';

function UserNav(props) {
	const renderAuth = () => {
		switch (props.auth) {
			case null:
				return null;
			case false:
				return (
					<nav className="user-nav">
						<a href="/auth/google" className="user-nav__login-box">
							<svg className="user-nav__icon--google">
								<use xlinkHref="img/sprite.svg#icon-google" />
							</svg>
							<span href="/auth/google" className="user-nav__login">
								Login with Google
							</span>
						</a>
					</nav>
				);
			default:
				return (
					<nav className="user-nav">
						<div className="user-nav__icon-box">
							<svg className="user-nav__icon">
								<use xlinkHref="/img/sprite.svg#icon-bookmark" />
							</svg>
							<span className="user-nav__notification">7</span>
						</div>
						<div className="user-nav__icon-box">
							<svg className="user-nav__icon">
								<use xlinkHref="/img/sprite.svg#icon-chat" />
							</svg>
							<span className="user-nav__notification">13</span>
						</div>
						<div tabIndex="0" className="user-nav__user">
							<img
								src={props.auth.picture}
								alt="User"
								className="user-nav__user-photo"
							/>
							<span className="user-nav__user-name">
								Welcome, {props.auth.firstName}
							</span>
							<ul className="user-nav__dropdown">
								<li className="user-nav__dropdown-item">
									<svg className="user-nav__dropdown-icon">
										<use xlinkHref="/img/sprite.svg#icon-log-out" />
									</svg>
									<a href="/api/logout" className="user-nav__dropdown-link">
										Log out
									</a>
								</li>
							</ul>
						</div>
					</nav>
				);
		}
	};

	return renderAuth();
}

const mapStateToProps = state => {
	return { auth: state.auth };
};

export default connect(mapStateToProps)(UserNav);
