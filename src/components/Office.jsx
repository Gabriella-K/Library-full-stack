import LibraryButton from "./LibraryButton";
import { useEffect, useState } from "react";
import axios from "axios";

function Office() {

  const [OfficeName, setOfficeName] = useState("");
  const [officeNumber, setOfficeNumber] = useState("");

  const saveOffice = async () => {
    const response = await axios.post("http://localhost:8080/api/office/save",
    
    {
      name: OfficeName,
      officeNumber: officeNumber,
    });

    if (response.status == 200) {
      alert("Office Saved Successfully");
    } else {
      alert("The office is not saved");
    }
  };

  const deleteOffice = async () => {
    const response = await axios.delete(
      `http://localhost:8080/api/office/delete/number/${officeNumber}`,
    );

    if (response.status == 200) {
      alert("Office Deleted Successfully");
    } else {
      alert("Office is not deleted");
    }
  };

  const [offices, setOffices] = useState([]);

  const getOffices = async () => {
    const response = await axios.get("http://localhost:8080/api/office/all");
    setOffices(response.data);
  };

  useEffect(() => {
    getOffices();
  }, []);

 
  const [search, setSearch] = useState("");

  const searchOffices = async () => {
    const response = await axios.get("http://localhost:8080/api/office/all");
    const allOffices = response.data;

    const results = allOffices.filter(
      (office) =>
        office.name.toLowerCase().includes(search.toLowerCase()) ||
        office.officeNumber.toString().includes(search),
    );

    setOffices(results);
  };

  return (
    <div>

      <h1>SAVE OFFICE</h1>

      <label>Office Name:</label>
      <input type="text" onChange={(e) => setOfficeName(e.target.value)} />
      <br></br>

      <label>Office Number:</label>
      <input type="text" onChange={(e) => setOfficeNumber(e.target.value)} />
      <br></br>
      
      <LibraryButton buttonLabel="SAVE OFFICE" onClickButton={saveOffice} />
      
      <h2>Delete the office</h2>
      <input type="text" onChange={(e) => setOfficeNumber(e.target.value)} />
      <br></br>
      <LibraryButton buttonLabel="DELETE OFFICE" onClickButton={deleteOffice} />

      <hr />

      <h1>ALL OFFICES</h1>

      <input type="text" placeholder="Search by name or office number" value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <LibraryButton buttonLabel="SEARCH" onClickButton={searchOffices} />
      <br></br>
      <br></br>

      <table border="1">
        <thead>
          <tr>
            <th>Office Name</th>
            <th>Office Number</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {offices.map((office) => (
            <tr key={office.id}>
              <td>{office.name}</td>

              <td>{office.officeNumber}</td>

              <td>
                <button
                  onClick={() => deleteOfficeFromTable(office.officeNumber)}
                >
                  DELETE
                </button>

                <button>UPDATE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Office;
