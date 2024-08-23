import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const AdvisorSchema = Yup.object().shape({
  sId: Yup.string().required('Student ID is required'),
  iId: Yup.string().required('Instructor ID is required'),
});

function AdvisorForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Advisor Form</Typography>
      <Formik
        initialValues={{ sId: '', iId: '' }}
        validationSchema={AdvisorSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Advisor information saved!");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="sId"
              as={TextField}
              label="Student ID"
              fullWidth
              margin="normal"
              error={touched.sId && Boolean(errors.sId)}
              helperText={touched.sId && errors.sId}
            />
            <Field
              name="iId"
              as={TextField}
              label="Instructor ID"
              fullWidth
              margin="normal"
              error={touched.iId && Boolean(errors.iId)}
              helperText={touched.iId && errors.iId}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AdvisorForm;
