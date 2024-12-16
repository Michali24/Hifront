//עיצוב אחר שך swal
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
import { addJoiningMeetupList, getAllJoiningMeetupList } from '../../slices/JoiningMeetupSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './JoiningMeetup.css';

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('שם פרטי חובה')
    .min(3, 'השם חייב להכיל לפחות 3 תווים'),

  familyName: Yup.string()
    .required('שם משפחה חובה')
    .min(3, 'שם המשפחה חייב להכיל לפחות 3 תווים'),

  email: Yup.string()
    .email('כתובת מייל לא תקינה')
    .required('כתובת מייל חובה'),

  phoneNumber: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'פורמט מספר הטלפון לא תקין')
    .required('מספר טלפון חובה'),

  role: Yup.string()
    .required('תפקיד בחברה חובה')
    .min(3, 'התפקיד חייב להכיל לפחות 3 תווים'),
});

export default function JoiningMeetup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lastMeetup = useSelector((state) => state.meetup.lastMeetup);

  useEffect(() => {
    dispatch(getMeetupLast());
    dispatch(getAllJoiningMeetupList());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const handleSuccess = () => {
    Swal.fire({
      title: 'נרשמת בהצלחה!',
      html: '<div class="animate-like">👍</div>',
      icon: 'success',
      timer: 3000,
      showConfirmButton: false,
      didClose: () => {
        navigate('/Home'); 
        reset();
      },
    });
  };

  const onSubmit = (data) => {
    const JoiningMeetupToAdd = {
      ...data,
      meetapimSchedule_id: lastMeetup.id,
    };

    // Dispatch action
    dispatch(addJoiningMeetupList(JoiningMeetupToAdd));

    // Show success message
    handleSuccess();

    console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);
  };

  return (
    <div className="joining-meetup-container">
      <h2 className="header">הרשמה למיטאפ הקרוב</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="שם פרטי"
            {...register('name')}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            id="familyName"
            placeholder="שם משפחה"
            {...register('familyName')}
          />
          {errors.familyName && <p className="error-message">{errors.familyName.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            id="phoneNumber"
            placeholder="טלפון"
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            id="role"
            placeholder="תפקיד בחברה"
            {...register('role')}
          />
          {errors.role && <p className="error-message">{errors.role.message}</p>}
        </div>
        <button type="submit" className="submit-button">שלח</button>
      </form>
      <footer className="footer">
        {lastMeetup && lastMeetup.poster_img_meetup ? (
          <img
            src={`data:image/jpeg;base64,${lastMeetup.poster_img_meetup}`}
            alt="Footer Banner"
            className="footer-image"
          />
        ) : (
          <p className="footer-placeholder">לא נמצאה תמונה להצגה</p>
        )}
      </footer>
    </div>
  );
}
