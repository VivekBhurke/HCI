import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const TimeSlotSchema = Yup.object().shape({
  timeSlotId: Yup.string().required('Time slot ID is required'),
  day: Yup.string().required('Day is required'),
  startTime: Yup.string().required('Start time is required'),
  endTime: Yup.string().required('End time is required'),
});

function TimeSlotForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Time Slot Form</Typography>
      <Formik
        initialValues={{ timeSlotId: '', day: '', startTime: '', endTime: '' }}
        validationSchema={TimeSlotSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Time slot information saved!");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="timeSlotId"
              as={TextField}
              label="Time Slot ID"
              fullWidth
              margin="normal"
              error={touched.timeSlotId && Boolean(errors.timeSlotId)}
              helperText={touched.timeSlotId && errors.timeSlotId}
            />
            <Field
              name="day"
              as={TextField}
              label="Day"
              fullWidth
              margin="normal"
              error={touched.day && Boolean(errors.day)}
              helperText={touched.day && errors.day}
            />
            <Field
              name="startTime"
              as={TextField}
              label="Start Time"
              fullWidth
              margin="normal"
              error={touched.startTime && Boolean(errors.startTime)}
              helperText={touched.startTime && errors.startTime}
            />
            <Field
              name="endTime"
              as={TextField}
              label="End Time"
              fullWidth
              margin="normal"
              error={touched.endTime && Boolean(errors.endTime)}
              helperText={touched.endTime && errors.endTime}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default TimeSlotForm;
