import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import SearchCity from "../components/SearchCity"
import weatherStore from '../store/store'

beforeEach(() => {
    render(<Provider store={weatherStore}><SearchCity /></Provider>)
})

const clickOnSearchBtn = () => {
    const btnSearch = screen.getByRole("button", {
        name: /search/i
    });
    userEvent.click(btnSearch);
}

describe("Search City Component", () => {

    test("check initial stage of the component", () => {
        expect(screen.getByRole("textbox").value).toBe("");
        expect(screen.queryByText(/enter city to search/i)).not.toBeInTheDocument();
        expect(screen.queryByRole("div", {
            class: /alert-danger/i
        })).not.toBeInTheDocument();
        expect(screen.queryByRole("div", {
            class: /spinner-border/i
        })).not.toBeInTheDocument();
    })

    test("clicking search button without entering city should show validation message", () => {
        clickOnSearchBtn();
        expect(screen.queryByText(/enter city to search/i)).toBeInTheDocument();
    })

    test("clicking search button with invalid city input should show error alert div", () => {
        userEvent.type(screen.getByRole("textbox"), "abc");
        clickOnSearchBtn();
        expect(screen.queryByRole("div", {
            class: /alert-danger/i
        })).not.toBeInTheDocument();
    })

    test("Should show no error or alert for valid city and search button click", () => {
        userEvent.type(screen.getByRole("textbox"), "Mumbai")
        clickOnSearchBtn();
        expect(screen.queryByText(/enter city to search/i)).not.toBeInTheDocument();
        expect(screen.queryByRole("div", {
            class: /alert-danger/i
        })).not.toBeInTheDocument();
        expect(screen.queryByRole("div", {
            class: /spinner-border/i
        })).not.toBeInTheDocument();
    })
})