'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ProjectDetails = () => {

  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);

  const fetchProjectDetails = () => {
    fetch('http://localhost:5000/project/getbyid/' + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProjectDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProjectDetails();
  }, [])  

  const displayProjectDetails = () => {
    if (projectDetails === null) {
      return <div>Loading...</div>
    } else {
      return <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-6'>
          <img className='rounded-md' src={"http://localhost:5000/" + projectDetails.cover} alt="" />
        </div>
        <div className='col-span-6 space-y-4'>
          <h1 className='text-6xl font-bold'>{projectDetails.title}</h1>
          <p className='text-lg'>Category : {projectDetails.category}</p>
          <p className='text-lg'>Sub-Category : {projectDetails.subCategory}</p>
          {/* <p className='text-lg'>Cover : {projectDetails.cover}</p> */}
          <p className='text-lg'>Department : {projectDetails.department}</p>
          <p className='text-lg'>Branch : {projectDetails.branch}</p>
          <p className='text-lg'>Batch : {projectDetails.batch}</p>
        </div>
      </div>
    }
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      {displayProjectDetails()}

    </div>
  )
}

export default ProjectDetails;