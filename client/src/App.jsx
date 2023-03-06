import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="cards">
      {data.map((user) => (
        <div key={data.id} className="card">
          <div className="card-header">
            <span className="avatar">{user.name[0]}</span>
            <span className="names">
              {user.name} {user.lastname}
            </span>
            <span className="id">#{user.id.toString().padStart(3, '0')}</span>
          </div>
          <div className="card-body">
            <ul className="list">
              <li className="item">Phone: {user.phone}</li>
              <li className="item">Age: {user.age}</li>
              <li className="item">Email: {user.email}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
