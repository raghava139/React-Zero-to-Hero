import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("contact page testing here", () => {
    render(<Contact />);
    let heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument();

})

test("contact page for button here", () => {
    render(<Contact />);
    let heading = screen.getByText('Submit')

    expect(heading).toBeInTheDocument();

})



test("contact page placholder test here", () => {
    render(<Contact />);
    let message = screen.getByPlaceholderText('message')

    expect(message).toBeInTheDocument();

})

test("contact page mutliple inputs test here", () => {
    // 1. Rendering
    render(<Contact />);

    // 2. Querying
    let input = screen.getAllByRole('textbox')
    console.log(input.length)


    // 3.Assertion
    // expect(input.length).toBe(2);
    expect(input.length).not.toBe(4);

})

// describe("new-one", () => {

//     describe("nest-one", () => {
//         it('something-it', () => {
//             let x = 20
//             expect(x).toBe(21);
//         })
//     })

//     describe("nest-two", () => {

//         test('something-it-2', () => {
//             let x = 24
//             expect(x).toBe(21);
//         })

//     })
// })