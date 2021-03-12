import React from 'react'
import {withRouter} from 'react-router-dom'
import * as Yup from 'yup'
import {Formik} from 'formik'
import {StyledForm, StyledField, Label, InputContainer, Button} from '../../styles'

const CreateList = (props) => {
  const handleSubmit = (values) => {
    localStorage.setItem('title', values.title)
    localStorage.setItem('list', values.list)
    props.history.push('/list')

    console.log(localStorage)
  }

  const formSchema = Yup.object().shape({
    title: Yup.string().required('* Please enter your name.'),
    list: Yup.string().required('* Please enter at least one list item.'),
  })

  return (
    <Formik
      initialValues={{
        title: '',
        list: '',
      }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      {({errors, touched}) => (
        <>
          <h1>Create your list</h1>
          <StyledForm>
            <InputContainer>
              <Label htmlFor="title">List title</Label>
              <p>
                What's the purpose of this list? Is it for a stand down meeting? Or deciding who
                gets to pet the cute dog next?
              </p>
              {touched.title && errors.title && <div>{errors.title}</div>}
              <StyledField name="title" autoComplete="off" />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="list">Enter a list</Label>
              <p>
                Write all the items or names separated by a comma. For example, "apple, orange,
                banana."
              </p>
              {touched.list && errors.list && <div>{errors.list}</div>}
              <StyledField name="list" autoComplete="off" />
            </InputContainer>

            {errors.title || errors.list ? (
              <Button type="submit">Create list</Button>
            ) : (
              <Button type="submit">Create list</Button>
            )}
          </StyledForm>
        </>
      )}
    </Formik>
  )
}

export default withRouter(CreateList)
