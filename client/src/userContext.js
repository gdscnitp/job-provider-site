import React, { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";

export const UserAuth = createContext({
	userId: null,

	isCustomer: false,
	isWorker: false,
	username: null,
	token: null,
	login: () => {},
	logout: () => {},
});

export function UserProvider({ children }) {
	const [isCustomer, setCustomer] = useState(false);
	const [isWorker, setWorker] = useState(false);
	const [username, setUser] = useState(null);
	const [userId, setId] = useState(null);
	const [token, setToken] = useState(null);
	const [tokenExpirationDate, setTokenExpirationDate] = useState();

	const login = useCallback(
		(userId, username, token, uesrType, expirationDate) => {
			setToken(token);
			setUser(username);
			setId(userId);
			if (uesrType === "customer") setCustomer(true);
			if (uesrType === "worker") setWorker(true);

			const tokenExpirationDate =
				expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
			setTokenExpirationDate(tokenExpirationDate);
			localStorage.setItem(
				"userData",
				JSON.stringify({
					userId: userId,
					username: username,
					uesrType: uesrType,
					token: token,
					expiration: tokenExpirationDate.toISOString(),
				})
			);
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		},
		[]
	);

	const logout = useCallback(() => {
		setToken(null);
		setTokenExpirationDate(null);
		setId(null);
		setUser(null);
		setCustomer(false);
		setWorker(false);

		localStorage.removeItem("userData");

		let token = null;
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	}, []);

	useEffect(() => {
		let logoutTimer;
		if (token && tokenExpirationDate) {
			const remainingTime =
				tokenExpirationDate.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logout, tokenExpirationDate]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));

		if (
			storedData &&
			storedData.token &&
			new Date(storedData.expiration) > new Date()
		) {
			login(
				storedData.userId,
				storedData.username,
				storedData.token,
				storedData.uesrType,
				new Date(storedData.expiration)
			);
		}
	}, [login]);

	return (
		<UserAuth.Provider
			value={{
				login: login,
				token: token,
				logout: logout,
				userId: userId,
				username: username,
				isCustomer: isCustomer,
				isWorker: isWorker,
			}}
		>
			{children}
		</UserAuth.Provider>
	);
}
