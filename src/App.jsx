import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("http://localhost:1729/view")
      .then((response) => {
        const updatedUsers = response.data.map(user => ({
          ...user,
          password: user.username.toLowerCase() + user._id
        }));
        setUsers(updatedUsers);
      })
      .catch((err) => console.log(`error as ${err}`));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredUsers = users.filter(user =>
    Object.values(user).some(field =>
      field.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <>
      <div className="container mt-4">
        

        <h2 className="text-center mb-4">User Information</h2>
        {/* Search bar */}
        <div style={{width:'30vw'}}>
          <Form.Group controlId="search">
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Form.Group>
        </div>
        <br />
        <div className="table-responsive" style={{ fontSize: '20.5px' }}>
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Room Number</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Phone</th>
                <th scope="col">Aadhar</th>
                <th scope="col">In Time</th>
                <th scope="col">Out Time</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.aadhar}</td>
                  <td>{new Date(user.intime).toLocaleString()}</td>
                  <td>{new Date(user.outtime).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="d-flex justify-content-center">
          <Pagination>
            {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, index) => (
              <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default App;
