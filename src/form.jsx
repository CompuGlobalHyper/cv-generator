import { Input } from './input.jsx'
import { Button } from './button.jsx'

export function Form ({ form, onChange, onSubmit, disabled, onEdit}) {
    return (
        <>
        <div className='medium text bold'>Personal Information</div>
        <Input  label={'Name:'} name="name" value={form.name} onChange={onChange} type={"text"} disabled={disabled}></Input>
        <Input  label={'Email:'} name="email" value={form.email} onChange={onChange} type={"text"} disabled={disabled}></Input>
        <Input  label={'Phone Number:'} name="phone" value={form.phone} onChange={onChange} type={"text"} disabled={disabled}></Input>
        <div className='medium text bold'>Educational Background</div>
        <Input  label={'School Name:'} name="school" value={form.school} onChange={onChange} type={"text"} disabled={disabled}></Input>
        <Input  label={'Degree:'} name="degree" value={form.degree} onChange={onChange} type={"text"} disabled={disabled}></Input>
        <Input  label={'Graduation Date:'} name="gradDate" value={form.gradDate} onChange={onChange} type={"date"} disabled={disabled}></Input>
        <div className='medium text bold'>Work Experience</div>
        <Input  label={'Company:'} name="company" value={form.company} onChange={onChange} type={"text"} disabled={disabled}></Input>
        <Input  label={'Position:'} name="position" value={form.position} onChange={onChange} type={"text"} disabled={disabled}></Input>
        <label className='medium text'>Duties:<textarea  label={'Duties:'} name="duties" value={form.duties} onChange={onChange} type={"textBox"} disabled={disabled}></textarea></label>
        <Input  label={'Start Date:'} name="startDate" value={form.startDate} onChange={onChange} type={"date"} disabled={disabled}></Input>
        <Input  label={'End Date:'} name="endDate" value={form.endDate} onChange={onChange} type={"date"} disabled={disabled}></Input>
        <div>
          <Button 
                buttonName='Edit' onClick={onEdit}>
          </Button>
          <Button 
                buttonName='Submit' onClick={onSubmit}>
          </Button>
        </div>
      </>
    )
}