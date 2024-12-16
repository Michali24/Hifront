//עיצוב נוסף
//הכרטיסייה בעיצוב MUI 
//הקוד לא מסודר עד הסוף!!!!!
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeetup } from '../../slices/UpcomingMeetupSlice';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from '@mui/material';

export default function AddNewMeetup() {
  const dispatch = useDispatch();
  const [poster_img_meetup, setPoster_img_meetup] = useState(null);
  const [newMeetup, setNewMeetup] = useState({
    meetupNmae: '',
    meetupDescription: '',
    localmeetupDate: '',
    nameOfTheHostCompany: '',
    addressHostCompany: '',
    timeOfTheMeetup: '',
    whoIsthemeetupfor: '',
    poster_img_meetup: '',
    url_wase: null,
  });

  // טיפול בשינוי הקובץ
  const handelFileChange = (e) => {
    const file = e.target.files[0];
    setPoster_img_meetup(file);
  };

  // טיפול בשינוי השדות
  const handleChange = (e) => {
    const { name, value } = e.target;

    // אם השדה הוא התאריך, מבצעים המרה לפורמט YYYY-MM-DD
    if (name === 'localmeetupDate') {
      const formattedDate = new Date(value).toISOString().split('T')[0];
      setNewMeetup((prevData) => ({
        ...prevData,
        [name]: formattedDate,
      }));
    } else {
      setNewMeetup((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // טיפול בהגשת הטופס
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Uploading..', poster_img_meetup);

    // יצירת FormData
    const formData = new FormData();
    formData.append(
      'fileMeetapimSchedule',
      new Blob([JSON.stringify(newMeetup)], { type: 'application/json' })
    );
    formData.append('file', poster_img_meetup);

    console.log('FormData before dispatch:', formData);

    dispatch(addMeetup(formData));
  }

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        padding: 5,
        paddingTop: 10,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Add New Meetup
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" component="label" fullWidth>
              Upload Poster Image
              <input
                type="file"
                name="poster_img_meetup"
                onChange={handelFileChange}
                hidden
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Meetup Name"
              name="meetupNmae"
              value={newMeetup.meetupNmae}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Meetup Description"
              name="meetupDescription"
              value={newMeetup.meetupDescription}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Meetup Date"
              name="localmeetupDate"
              type="date"
              value={newMeetup.localmeetupDate}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Host Company Name"
              name="nameOfTheHostCompany"
              value={newMeetup.nameOfTheHostCompany}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Host Company Address"
              name="addressHostCompany"
              value={newMeetup.addressHostCompany}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Meetup Time"
              name="timeOfTheMeetup"
              type="time"
              value={newMeetup.timeOfTheMeetup}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Audience"
              name="whoIsthemeetupfor"
              value={newMeetup.whoIsthemeetupfor}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit New Meetup
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
