import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext.js";
export function RouteGuards() {
	const {user} = useContext(AuthContext);
	if (!user) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
}
