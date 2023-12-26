
function DisplayTable() {
  //
  const studentData = JSON.parse(localStorage.getItem('studentData')) ;
  console.log(studentData);
  return (
<>
<div className="container p-5">
<table  class="table">
<thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>{studentData.name}</td>
            <td>{studentData.address}</td>
            <td>{studentData.mobile}</td>
            <td>{studentData.email}</td>
            <td>{studentData.gender}</td>
            <td>{studentData.dob}</td>
            <td>{studentData.course}</td>
          </tr>
          
        </tbody>
       
        
        
</table>
</div>

</>  )
}

export default DisplayTable