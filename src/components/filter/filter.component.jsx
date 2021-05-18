import React from 'react'
import data from '../data/data';
import './filter.styles.css';

//Get all available levels and groups
const levels = [];
const groups = [];

data.forEach(d => {
  if(levels.indexOf(d.Level) === -1) levels.push(d.Level);
  if(groups.indexOf(d.Group) === -1) groups.push(d.Group);
})


const Filter = ({ setFilters, filterObject }) => {
  return(
    <div className='filter-container'>
      <span>Filter by:</span>
      <select value={filterObject.group} onChange={e => setFilters({ ...filterObject, group : e.target.value })}>
        <option disabled value="">Group</option>
        {groups.map((group, i) => <option key={i} value={group}>{group}</option>)}
      </select>
      <select value={filterObject.level} onChange={e => setFilters({ ...filterObject, level : e.target.value })}>
        <option disabled value="">Level</option>
        {levels.map((level, i) => <option key={i} value={level}>{level}</option>)}
      </select>
      <button className='cfButton' onClick={() => setFilters({ group : '', level : '' })}>
        Clear Filter
      </button>
    </div>
  )
}


export default Filter