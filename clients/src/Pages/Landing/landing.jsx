import React, { useEffect, useState, useCallback } from "react";
import CustomCard from "../../Components/Card/card";
import InputFeild from "../../Components/InputFeild/inputFeild";
import Dropdown from "../../Components/Dropdown/dropdown";
import { ApiCall } from '../../services'
import './landing.css'

const Landing = () => {

    const [cardData, setCardData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(10)
    const [dropdownValue, setDropdownValue] = useState('')
    const [searchTerm, setSearchTerm] = useState('')


    const fetchData = useCallback(() => {
        ApiCall(currentPage, pageSize, searchTerm, dropdownValue).then((data) => {
            setCardData(data.results)
            setTotalPages(data.totalPages)
        })
    }, [currentPage, searchTerm, dropdownValue]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handlePre = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }

    }
    const handleNext = () => {
        if (totalPages !== 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handleInput = async (e) => {
        setCurrentPage(1)
        setSearchTerm(e.target.value)
    }

    const handleDropdown = async (e) => {
        setDropdownValue(e.target.value)
    }

    return (
        <div>
            <div className="first-header-main-wrapper">

                <InputFeild type={'text'} id={'search'} placeholder={'Search...'} handleInput={handleInput} />
                <Dropdown handleDropdown={handleDropdown} />
            </div>
            <div className="card-container">
                {cardData.map((data, index) => {
                    return (<CustomCard key={index} name={data.name} image={data.image} description={data.description} />);
                })}
            </div>
            {<div className="pagination-main-container">
                {currentPage > 1 ? <div className="previous-btn-wrapper" onClick={handlePre}>&laquo; Previous</div> : <div></div>}
                <a className="pagination-link">{currentPage}</a>
                {totalPages === currentPage ? <div></div> : <div className="next-btn-wrapper" onClick={handleNext}>Next &raquo;</div>}
            </div>}
        </div>
    )
}

export default Landing;