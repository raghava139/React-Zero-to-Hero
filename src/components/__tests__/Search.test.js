import { render, act, screen, fireEvent } from "@testing-library/react"
import Body from "../Body"
import MOCK_Data from './MOCK_DATA/ALL_Resto_List.json'
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_Data)
        }
    })
})

it('should search  rest list for pizza component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>)
    )

    const cardslist_org = screen.getAllByTestId('my_Restro_Cards');
    expect(cardslist_org.length).toBe(8);
    const searchBtn = screen.getByRole("button", { name: 'search' })
    const inputSearch = screen.getByTestId('input_search_test');
    fireEvent.change(inputSearch, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);
    // expect(searchBtn).toBeInTheDocument();

    //assertion
    const cardslist = screen.getAllByTestId('my_Restro_Cards');
    expect(cardslist.length).toBe(2);
})

it('should search top Rated restros',async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const totalcardsList = screen.getAllByTestId('my_Restro_Cards')
    expect(totalcardsList.length).toBe(8);

    const TopRatedButton = screen.getByRole("button",{name:'Top Rated Restaruants'});
    fireEvent.click(TopRatedButton);

    const topratedcards = screen.getAllByTestId('my_Restro_Cards');
    expect(topratedcards.length).toBe(6)
})