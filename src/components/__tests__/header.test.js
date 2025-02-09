import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../Utils/Redux RTK/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it('should load the here component if the login button is there', () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );

    // const loginbutton = screen.getByRole('button', { name: "LOGIN" });

    // const cartext = screen.getByText('Cart ( 0 items )');

    // const cartext = screen.getByText(/Cart/);

    const loginbutton = screen.getByRole('button', { name: "LOGIN" });

    fireEvent.click(loginbutton);

    const logoutbutton = screen.getByRole('button', { name: "LOGOUT" });
    expect(logoutbutton).toBeInTheDocument();
})