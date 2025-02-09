import { render, act, screen, fireEvent } from "@testing-library/react"
import RestroMenu from "../RestroMenu";
import MOCK_DATA from '../__tests__/MOCK_DATA/Mock_Restro_Menu.json'
import { Provider } from "react-redux";
import appStore from "../Utils/Redux RTK/AppStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it('should load the Restro Menu Component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <Cart/>
                <RestroMenu />
            </Provider>
        </BrowserRouter>
    ))

    const accordionsHeader = screen.getByText('Veg Pizza (14)');
    fireEvent.click(accordionsHeader);
    expect(screen.getAllByTestId('foodItems').length).toBe(14);
   
    const GetAddButtonHere = screen.getAllByRole('button', { name: "ADD +" })

    expect(screen.getByText('Cart ( 0 items )')).toBeInTheDocument();
    
    fireEvent.click(GetAddButtonHere[0])
    
    expect(screen.getByText('Cart ( 1 items )')).toBeInTheDocument();

    fireEvent.click(GetAddButtonHere[1])
    
    expect(screen.getByText('Cart ( 2 items )')).toBeInTheDocument();

    expect(screen.getAllByTestId('foodItems').length).toBe(16);

    const getTheclearButton = screen.getByRole('button',{name:'Clear Cart'});
    fireEvent.click(getTheclearButton);
    expect(screen.getAllByTestId('foodItems').length).toBe(14);

    expect(screen.getByText('Cart is Empty - Add Items to the Cart')).toBeInTheDocument();


})