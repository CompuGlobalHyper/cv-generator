import { useState } from 'react'
import { Resume } from './resume.jsx'
import { Form } from './form.jsx'
import './App.css'

function App() {

  let status = 'incomplete'
  
  const [form, setForm] = useState({ 
    name: '',
    email: '',
    phone: '',
    school: '',
    degree: '',
    gradDate: '',
    company: '',
    position: '',
    duties: '',
    startDate: '',
    endDate: ''
  })

  const [resume, setResume] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    degree: '',
    gradDate: '',
    company: '',
    position: '',
    duties: '',
    startDate: '',
    endDate: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  function handleSubmit() {
    let status = 'incomplete'
    let formComplete = Object.keys(form).every(key => {
      return !!form[key]
    })
    if (formComplete) status = 'complete'
    if (status === 'incomplete') {
      console.log("Incomplete form")
      return false
    } else {
      setResume(form)
      setIsSubmitted(true)
    }
  }

  function handleEdit() {
    setIsSubmitted(false)
  }

  return (
    <div className='main-container'>
      <div className='form-container'>
        <div className='large bold text title'>Resume Generator</div>
        <Form form={form} onChange={handleChange} onSubmit={handleSubmit} disabled={isSubmitted} onEdit={handleEdit}
        >
        </Form>
      </div>
      <div className="resume-container">
        <Resume form={resume} isSubmitted={isSubmitted}
        >
        </Resume>
      </div>
    </div>
  )
}

export default App
