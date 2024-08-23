import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const InstructorSchema = Yup.object().shape({
  id: Yup.string().required('ID is required'),
  name: Yup.string().required('Name is required'),
  deptName: Yup.string().required('Department name is required'),
  salary: Yup.number().required('Salary is required'),
});

function InstructorForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Instructor Form</Typography>
      <Formik
        initialValues={{ id: '', name: '', deptName: '', salary: '' }}
        validationSchema={InstructorSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Instructor information saved!");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="id"
              as={TextField}
              label="ID"
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
              name="salary"
              as={TextField}
              label="Salary"
              type="number"
              fullWidth
              margin="normal"
              error={touched.salary && Boolean(errors.salary)}
              helperText={touched.salary && errors.salary}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default InstructorForm;
