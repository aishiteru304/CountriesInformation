import { FaChevronDown, FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa'
import { GiWorld, GiEarthAsiaOceania } from 'react-icons/gi'
import styled from 'styled-components'
import { useContext, useRef, useState, useEffect } from 'react'
import { ThemeContext } from '../../ThemeContext/themeContext'
import { Link } from 'react-router-dom'

function Filter() {
    const themeContext = useContext(ThemeContext)
    const refSelect = useRef(null)
    const [isSelect, setIsSelect] = useState(false);

    const handleSelect = () => {
        setIsSelect(!isSelect)
    }
    useEffect(() => {
        function handleClickOutside(e) {
            if (refSelect.current && !refSelect.current.contains(e.target)) {
                setIsSelect(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [refSelect]);

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const [region, setRegion] = useState('All')

    return (
        <FilterPane>
            <h3>Filter by regions:</h3>
            <SelectPane id='selectPane'>
                <Select className={themeContext.theme} onClick={handleSelect} ref={refSelect}>
                    <span >{region}</span>
                    <FaChevronDown />
                </Select>

                <SelectOption className={`${themeContext.theme} ${(isSelect ? '' : 'displayNone')} `}>
                    <Link to='/all'>
                        <SelectItem id='all' onClick={() => setRegion(regions[0])} >
                            <GiWorld />
                            <span>{regions[0]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/africa'>
                        <SelectItem id='africa' onClick={() => setRegion(regions[1])} >
                            <FaGlobeAfrica />
                            <span>{regions[1]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/americas'>
                        <SelectItem id='americas' onClick={() => setRegion(regions[2])} >
                            <FaGlobeAmericas />
                            <span>{regions[2]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/asia'>
                        <SelectItem id='asia' onClick={() => setRegion(regions[3])} >
                            <FaGlobeAsia />
                            <span>{regions[3]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/europe'>
                        <SelectItem id='europe' onClick={() => setRegion(regions[4])} >
                            <FaGlobeEurope />
                            <span>{regions[4]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/oceania'>
                        <SelectItem id='oceania' onClick={() => setRegion(regions[5])} >
                            <GiEarthAsiaOceania />
                            <span>{regions[5]}</span>
                        </SelectItem>
                    </Link>


                </SelectOption>

            </SelectPane>
        </FilterPane>
    )
}

export default Filter

const FilterPane = styled.div`
    max-width: 160px;
    width: 100%;
    margin-top: 20px;
    padding-right: 20px;
    h3{
        font-size: 1.8rem;
        font-weight: 600px;
        text-shadow: var(--text-shadow);
    }
`

const SelectPane = styled.div`
    width: 100%;
    margin-top: 8px;
    box-shadow: var(--box-shadow);
    position: ralative;
    cursor: pointer;

`
const Select = styled.div`
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    height: 34px;
    user-select: none;

    span{
        font-size: 1.8rem;
        font-weight: bold;
    }
`

const SelectOption = styled.ul`
    width: 100%;
    max-width: 160px;
    margin-top: 2px;
    border-radius: 4px;
    position: absolute;
    overflow: hidden;
    z-index: 10;

    a{
        text-decoration: none;
        color: #000;
    }
`

const SelectItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    &:hover{
        font-weight: bold;
        background: var(--toggle-color);
    }

    span{
        margin-left: 4px;
    }
`
