import React from 'react';
import styled from 'styled-components';
import { categories } from '../Data/CourseData';

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 48px;
  padding: 0 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  width: 70%;
  
  @media (max-width: 768px) {
    max-width: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 20px 10px 48px;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  font-size: 1rem;
  background: white;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus {
    outline: none;
    border-color: #2563EB;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 40%;
  transform: translateY(-50%);
  color: #9CA3AF;
  font-size: 1.2rem;
`;

const SelectGroup = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Select = styled.select`
  padding: 8px 20px;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 160px;
  
  &:focus {
    outline: none;
    border-color: #2563EB;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
  
  @media (max-width: 768px) {
    min-width: auto;
  }
`;

const ResultsCount = styled.div`
  text-align: center;
  margin-bottom: 32px;
  font-size: 1rem;
  color: #6B7280;
  font-weight: 500;
`;

const FilterControls = ({ 
  search, 
  setSearch, 
  filter, 
  setFilter, 
  category, 
  setCategory,
  resultsCount 
}) => {
  return (
    <>
      <FilterWrapper>
        <SearchContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search for courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContainer>
        
        <SelectGroup>
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Audiences</option>
            <option value="KG-12">KG to +2</option>
            <option value="UG/PG">UG / PG</option>
            <option value="All Ages">All Ages</option>
          </Select>
          
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Select>
        </SelectGroup>
      </FilterWrapper>
      
      {resultsCount > 0 && (
        <ResultsCount>
          {resultsCount === 1 ? '1 course found' : `${resultsCount} courses found`}
        </ResultsCount>
      )}
    </>
  );
};

export default FilterControls;