import React, {useState} from "react";
import { InputGroup, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';


const SearchBar = ({ setStudents, students }) => {
  const [initialStudents, setInitialStudents]= useState(students)



  const handleSearch = (e) => {
    const searchFiled = document.getElementById('searchInput')
    const stdentsCopy = [ ...initialStudents ]
    console.log(stdentsCopy)
    console.log(searchFiled.value)
    let filteredStudents = stdentsCopy.filter(el => el.name.toLowerCase().includes(searchFiled.value.toLowerCase()) || el.lastName.toLowerCase().includes(searchFiled.value.toLowerCase()) ||  el.studentID.toLowerCase().includes(searchFiled.value.toLowerCase()))
    setStudents(filteredStudents)
  }

  const handleChangeSerach = (e) =>{
    if(!e.target.value){
      setStudents([...initialStudents])
    }

  }


  return (
    <>
      <InputGroup className='searchBar'>
        <FormControl
          placeholder="Search student"
          aria-label="Search student"
          aria-describedby="basic-addon2"
          id='searchInput'
          onChange={(e)=>handleChangeSerach(e)}
        />
        <InputGroup.Append  >
          <Button variant="outline-dark" className='searchBtns' type='submit' onClick={() => handleSearch()}>Search</Button>
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-dark searchBtns"
            title="Generation"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Generation 2020-03</Dropdown.Item>
            <Dropdown.Item href="#">Generation 2020-06</Dropdown.Item>
          </DropdownButton>
        </InputGroup.Append>
      </InputGroup>

    </>
  );
}

export default SearchBar;