import { render, screen } from "@testing-library/react"
import {App} from './App'

describe('App Component', () => {
    test("check if both searchCity and WeatherList components are rendered", () => {
        render(<App/>)
        expect(screen.queryByTestId("citySearchSection")).toBeInTheDocument();
        expect(screen.queryByTestId("weatherListSection")).toBeInTheDocument();        
    })
})