import { render ,screen} from "@testing-library/react"
import RestaruantCard, { withPromotedLabel } from "../RestaruantCard"
import mockdata from './MOCK_DATA/restro_card.json'
import "@testing-library/jest-dom"

it('should the restro cards using props', () => {

    render(<RestaruantCard resData={mockdata}/>)

    const testName = screen.getByText("Pan-Asian,Japanese,Sushi,Chinese,Korean,Oriental")

    expect(testName).toBeInTheDocument();
})

//Hoc Component passing 
it("Should be testing the High Order Component",()=>{
    const PromotedCard = withPromotedLabel(RestaruantCard)

    render(<PromotedCard resData={mockdata}/>);

    const promptedTesting  = screen.getByText("Promoted");

    expect(promptedTesting).toBeInTheDocument();
})