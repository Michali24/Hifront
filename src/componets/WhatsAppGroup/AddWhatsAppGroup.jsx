//עיצוב עם תמונת רקע
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { postWhatsAppGroup } from '../../slices/WhatsAppGroupSlice';
import { TextField, Button, Alert } from '@mui/material';
import './AddWhatsAppGroup.css';  // הוסף את קובץ ה-CSS שלך כאן

export default function AddWhatsAppGroup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newWhatsAppGroup, setNewWhatsAppGroup] = useState({
    nameWhatsAppGroups: '',
    descriptionWhatsAppGroups: '',
    urlJoiningWhatsAppGroups: '',
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // success or error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWhatsAppGroup((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postWhatsAppGroup(newWhatsAppGroup));
      setAlertMessage('הקבוצה נוספה בהצלחה!');
      setAlertSeverity('success');

      // אחרי 3 שניות, ננקה את האינפוטים
      setTimeout(() => {
        setNewWhatsAppGroup({
          nameWhatsAppGroups: '',
          descriptionWhatsAppGroups: '',
          urlJoiningWhatsAppGroups: '',
        });
      }, 3000); // הזמן שבמהלכו יישארו האינפוטים מלאים (3 שניות)
    } catch (error) {
      setAlertMessage('לא הצלחנו להוסיף את הקבוצה, נסה שוב.');
      setAlertSeverity('error');
    }
  };

  return (
    <div className="add-whatsapp-group-page-container">
      {/* הצגת הודעת הצלחה או כישלון בראש העמוד */}
      {alertMessage && (
        <Alert severity={alertSeverity} style={{ marginBottom: '20px' }}>
          {alertMessage}
        </Alert>
      )}

      <div>הוסף קבוצה לווטסאפ</div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="שם הקבוצה"
          variant="outlined"
          name="nameWhatsAppGroups"
          placeholder="הכנס שם קבוצת ווטסאפ"
          value={newWhatsAppGroup.nameWhatsAppGroups}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="תיאור הקבוצה"
          variant="outlined"
          name="descriptionWhatsAppGroups"
          placeholder="הכנס תיאור לקבוצת ווטסאפ"
          value={newWhatsAppGroup.descriptionWhatsAppGroups}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="קישור הצטרפות"
          variant="outlined"
          name="urlJoiningWhatsAppGroups"
          placeholder="הכנס קישור הצטרפות"
          value={newWhatsAppGroup.urlJoiningWhatsAppGroups}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          שלח קבוצה חדשה
        </Button>
      </form>
    </div>
  );
}
