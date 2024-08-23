import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const TeachesSchema = Yup.object().shape({
  id: Yup.string().required('Instructor ID is required'),
  courseId: Yup.string().required('Course ID is required'),
  secId: Yup.string().required('Section ID is required'),
  semester: Yup.string().required('Semester is required'),
  year: Yup.number().required('Year is required'),
});

function TeachesForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Teaches Form</Typography>
      <Formik
        initialValues={{ id: '', courseId: '', secId: '', semester: '', year: '' }}
        validationSchema={TeachesSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Teaches information saved!");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="id"
              as={TextField}
              label="Instructor ID"
              fullWidth
              margin="normal"
              error={touched.id && Boolean(errors.id)}
              helperText={touched.id && errors.id}
            />
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
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default TeachesForm;
