import React from 'react'
import {withRouter} from 'react-router-dom'
import * as Yup from 'yup'
import {Formik} from 'formik'
import {StyledForm, StyledField, TextArea, Label, InputContainer, Button, H3, P} from '../../styles'
import {DangerZone, Error} from './styles'

const CreateList = (props) => {
  const handleSubmit = (values) => {
    localStorage.setItem('title', values.title)
    localStorage.setItem('list', values.list)
    props.history.push('/list')
  }

  const formSchema = Yup.object().shape({
    title: Yup.string().required('* Please enter a list name.'),
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
              <Label>List title
              <P>
                Write the purpose of this list. Is it for a stand up meeting? Or deciding who gets to buy the next round of drinks?
              </P>
              {touched.title && errors.title && <Error>{errors.title}</Error>}
              <StyledField name="title" autoComplete="off" />
              </Label>
            </InputContainer>

            <InputContainer>
              <Label>Enter a list
              <P>
                Write all your list items separated by a comma or a line break. For example,
                "apple, orange, banana."
              </P>
              {touched.list && errors.list && <Error>{errors.list}</Error>}
              <TextArea name="list" autoComplete="off" component="textarea" />
              </Label>
            </InputContainer>
            
            <Button type="submit" disabled={errors.title || errors.list}>Save list</Button>

            {window.location.href.includes('edit') && 
              <DangerZone>
                <H3>Danger zone</H3>
                <P>Deleting a list is permanent, so make sure you're making the right decision!</P>
                <Button onClick={deleteList}>Delete list</Button>
              </DangerZone>
            }
          </StyledForm>
        </>
      )}
    </Formik>
  )
}

export default withRouter(CreateList)
