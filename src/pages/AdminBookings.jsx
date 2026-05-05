import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadBookings();
    }
  }, []);

  const loadBookings = () => {
    const data = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(data);
  };

  const handleLogin = () => {
    if (password === 'admin2024') {
      localStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      loadBookings();
    } else {
      alert('Wachtwoord incorrect');
    }
  };

  const deleteBooking = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Admin - Bookings</h1>
        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '0.75rem',
            fontSize: '1rem',
            marginRight: '1rem',
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#A82A6F',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1>📋 Alle Bookings ({bookings.length})</h1>
        <button
          onClick={() => {
            localStorage.removeItem('adminAuth');
            setIsAuthenticated(false);
          }}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ccc',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>

      {bookings.length === 0 ? (
        <p>Nog geen bookings</p>
      ) : (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #ddd',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                Naam
              </th>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                Email
              </th>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                Bedrijf
              </th>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                WhatsApp
              </th>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                Datum
              </th>
              <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid #ddd' }}>
                Actie
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem' }}>{booking.name}</td>
                <td style={{ padding: '1rem' }}>{booking.email}</td>
                <td style={{ padding: '1rem' }}>{booking.businessName}</td>
                <td style={{ padding: '1rem' }}>{booking.whatsapp}</td>
                <td style={{ padding: '1rem' }}>
                  {new Date(booking.createdAt).toLocaleString('nl-NL')}
                </td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>
                  <button
                    onClick={() => deleteBooking(index)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#ff4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
