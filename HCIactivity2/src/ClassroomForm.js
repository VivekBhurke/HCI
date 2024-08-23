import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const ClassroomSchema = Yup.object().shape({
  building: Yup.string().required('Building is required'),
  roomNumber: Yup.number().required('Room number is required'),
  capacity: Yup.number().required('Capacity is required'),
});

function ClassroomForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Classroom Form</Typography>
      <Formik
        initialValues={{ building: '', roomNumber: '', capacity: '' }}
        validationSchema={ClassroomSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Classroom information saved!");
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
              name="capacity"
              as={TextField}
              label="Capacity"
              type="number"
              fullWidth
              margin="normal"
              error={touched.capacity && Boolean(errors.capacity)}
              helperText={touched.capacity && errors.capacity}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default ClassroomForm;
