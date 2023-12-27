import React from 'react';
import OptionsFilter from './OptionsFilter';

const SideFilter = () => {
  return (
    <div className='w-1/5 flex flex-col text-2xl font-bold '>
      <OptionsFilter name="Status" />
      <OptionsFilter name="Status" />
      <OptionsFilter name="Status" />
      <OptionsFilter name="Status" />
      <OptionsFilter name="Status" />
    </div>
  );
}

export default SideFilter;
