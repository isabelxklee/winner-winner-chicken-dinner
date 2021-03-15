import React from 'react'
import {withRouter} from 'react-router-dom'
import * as Yup from 'yup'
import {Formik} from 'formik'
import {StyledForm, StyledField, TextArea, Label, InputContainer, Button, H3, P} from '../../styles'
import {DangerZone} from './styles'

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

  const deleteList = () => {
    localStorage.clear()
    props.history.push('/')
  }

  return (
    <Formik
      initialValues={{
        title: `${localStorage.title ? localStorage.title : ''}`,
        list: `${localStorage.list ? localStorage.list : ''}`,
      }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      {({errors, touched}) => (
        <>
          <h1>{window.location.href.includes('create') ? 'Create your list' : 'Edit list'}</h1>
          <StyledForm>
            <InputContainer>
              <Label htmlFor="title">List title</Label>
              <P>
                What's the purpose of this list? Is it for a stand down meeting? Or deciding who
                gets to pet the cute dog next?
              </P>
              {touched.title && errors.title && <div>{errors.title}</div>}
              <StyledField name="title" autoComplete="off" />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="list">Enter a list</Label>
              <P>
                Write all the items or names separated by a comma or a line break. For example,
                "apple, orange, banana."
              </P>
              {touched.list && errors.list && <div>{errors.list}</div>}
              <TextArea name="list" autoComplete="off" component="textarea" />
            </InputContainer>

            {errors.title || errors.list ? (
              <Button type="submit">Save list</Button>
            ) : (
              <Button type="submit">Save list</Button>
            )}

            {window.location.href.includes('edit') ? (
              <DangerZone>
                <H3>Danger zone</H3>
                <P>Deleting a list is permanent, so make sure you're making the right decision!</P>
                <Button onClick={deleteList}>Delete list</Button>
              </DangerZone>
            ) : null}
          </StyledForm>
        </>
      )}
    </Formik>
  )
}

export default withRouter(CreateList)
