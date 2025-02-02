import { render,screen,fireEvent } from "@testing-library/react"
import Searchitem from "../Components/Page/Searchitem"





describe('search-term',()=>{

    test('testing for search functionality',()=>{



//
const searchInput = screen.getByPlaceholderText(/search/i); // Assuming the input has a placeholder like 'Search...'

// Simulate typing into the input field
fireEvent.change(searchInput, { target: { value: 'example query' } });
fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
const searchResult = screen.getByText(/example query result/i); // Adjust text matcher to match your actual results
expect(searchResult).toBeInTheDocument();
    })
})