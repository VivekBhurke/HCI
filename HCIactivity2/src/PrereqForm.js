import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const PrereqSchema = Yup.object().shape({
  courseId: Yup.string().required('Course ID is required'),
  prereqId: Yup.string().required('Prerequisite ID is required'),
});

function PrereqForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Prerequisite Form</Typography>
      <Formik
        initialValues={{ courseId: '', prereqId: '' }}
        validationSchema={PrereqSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Prerequisite information saved!");
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
              name="prereqId"
              as={TextField}
              label="Prerequisite ID"
              fullWidth
              margin="normal"
              error={touched.prereqId && Boolean(errors.prereqId)}
              helperText={touched.prereqId && errors.prereqId}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default PrereqForm;
