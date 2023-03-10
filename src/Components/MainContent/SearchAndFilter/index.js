import Search from './Search'
import Filter from './Filter'
import styled from 'styled-components'

function SearchAndFilter() {
    return (
        <SearchAndFilterPane>
            <Search />
            <Filter />
        </SearchAndFilterPane>
    )
}

export default SearchAndFilter

const SearchAndFilterPane = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 8vh;
    // z-index: 10;
`