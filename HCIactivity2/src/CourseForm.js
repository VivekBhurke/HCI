import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const CourseSchema = Yup.object().shape({
  courseId: Yup.string().required('Course ID is required'),
  title: Yup.string().required('Title is required'),
  deptName: Yup.string().required('Department name is required'),
  credits: Yup.number().required('Credits are required'),
});

function CourseForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Course Form</Typography>
      <Formik
        initialValues={{ courseId: '', title: '', deptName: '', credits: '' }}
        validationSchema={CourseSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Course information saved!");
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
              name="title"
              as={TextField}
              label="Title"
              fullWidth
              margin="normal"
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
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
              name="credits"
              as={TextField}
              label="Credits"
              type="number"
              fullWidth
              margin="normal"
              error={touched.credits && Boolean(errors.credits)}
              helperText={touched.credits && errors.credits}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default CourseForm;
