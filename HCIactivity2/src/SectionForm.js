import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const SectionSchema = Yup.object().shape({
  courseId: Yup.string().required('Course ID is required'),
  secId: Yup.string().required('Section ID is required'),
  semester: Yup.string().required('Semester is required'),
  year: Yup.number().required('Year is required'),
  building: Yup.string().required('Building is required'),
  roomNumber: Yup.number().required('Room number is required'),
  timeSlotId: Yup.string().required('Time slot ID is required'),
});

function SectionForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Section Form</Typography>
      <Formik
        initialValues={{ courseId: '', secId: '', semester: '', year: '', building: '', roomNumber: '', timeSlotId: '' }}
        validationSchema={SectionSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Section information saved!");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="courseId"
              as={TextField}
              label="Course ID"
              fullWidth
              margin="normal"
              error={touched.courseId && Boolean(errors.courseId)}
              helperText={touched.courseId && errors.courseId}
            />
            <Field
              name="secId"
              as={TextField}
              label="Section ID"
              fullWidth
              margin="normal"
              error={touched.secId && Boolean(errors.secId)}
              helperText={touched.secId && errors.secId}
            />
            <Field
              name="semester"
              as={TextField}
              label="Semester"
              fullWidth
              margin="normal"
              error={touched.semester && Boolean(errors.semester)}
              helperText={touched.semester && errors.semester}
            />
            <Field
              name="year"
              as={TextField}
              label="Year"
              type="number"
              fullWidth
              margin="normal"
              error={touched.year && Boolean(errors.year)}
              helperText={touched.year && errors.year}
            />
            <Field
              name="building"
              as={TextField}
              label="Building"
              fullWidth
              margin="normal"
              error={touched.building && Boolean(errors.building)}
              helperText={touched.building && errors.building}
            />
            <Field
              name="roomNumber"
              as={TextField}
              label="Room Number"
              type="number"
              fullWidth
              margin="normal"
              error={touched.roomNumber && Boolean(errors.roomNumber)}
              helperText={touched.roomNumber && errors.roomNumber}
            />
            <Field
              name="timeSlotId"
              as={TextField}
              label="Time Slot ID"
              fullWidth
              margin="normal"
              error={touched.timeSlotId && Boolean(errors.timeSlotId)}
              helperText={touched.timeSlotId && errors.timeSlotId}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default SectionForm;
