import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const StudentSchema = Yup.object().shape({
  id: Yup.string().required('Student ID is required'),
  name: Yup.string().required('Name is required'),
  deptName: Yup.string().required('Department name is required'),
  totCred: Yup.number().required('Total credits are required'),
});

function StudentForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Student Form</Typography>
      <Formik
        initialValues={{ id: '', name: '', deptName: '', totCred: '' }}
        validationSchema={StudentSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Student information saved!");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="id"
              as={TextField}
              label="Student ID"
              fullWidth
              margin="normal"
              error={touched.id && Boolean(errors.id)}
              helperText={touched.id && errors.id}
            />
            <Field
              name="name"
              as={TextField}
              label="Name"
              fullWidth
              margin="normal"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <Field
              name="deptName"
              as={TextField}
              label="Department Name"
              fullWidth
              margin="normal"
              error={touched.deptName && Boolean(errors.deptName)}
              helperText={touched.deptName && errors.deptName}
            />
            <Field
              name="totCred"
              as={TextField}
              label="Total Credits"
              type="number"
              fullWidth
              margin="normal"
              error={touched.totCred && Boolean(errors.totCred)}
              helperText={touched.totCred && errors.totCred}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default StudentForm;
