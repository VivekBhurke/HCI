import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const DepartmentSchema = Yup.object().shape({
  deptName: Yup.string().required('Department name is required'),
  building: Yup.string().required('Building is required'),
  budget: Yup.number().required('Budget is required'),
});

function DepartmentForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Department Form</Typography>
      <Formik
        initialValues={{ deptName: '', building: '', budget: '' }}
        validationSchema={DepartmentSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Department information saved!");
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
              name="building"
              as={TextField}
              label="Building"
              fullWidth
              margin="normal"
              error={touched.building && Boolean(errors.building)}
              helperText={touched.building && errors.building}
            />
            <Field
              name="budget"
              as={TextField}
              label="Budget"
              type="number"
              fullWidth
              margin="normal"
              error={touched.budget && Boolean(errors.budget)}
              helperText={touched.budget && errors.budget}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default DepartmentForm;
