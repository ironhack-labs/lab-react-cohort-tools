import React from 'react'
import allStudents from "../assets/students.json"

import {useParms} from "react-router-dom";

function UserStudent() {

    const parametrosD= useParams();

    const userToPrint=  allStudents.find((eachStudent)=>{
        return eachStudent.firstName
    })

  return (
    <div>

    </div>
  )
}

export default UserStudent