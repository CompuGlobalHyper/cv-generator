export function Resume ({ form, isSubmitted }) {
    if (isSubmitted) return (
        <>
            <div className='medium text bold title'>{form.name}</div>
            <div className='small text title'>{form.email}</div>
            <div className='small text title'>{form.phone}</div>
            <div className='small text title'> I went to {form.school} and got graduated with a {form.degree} on {form.gradDate}.</div>
            <div className='small text title'>I worked for {form.company} as a {form.position}.</div>
            <div className='small text title'>My role involved {form.duties}.</div>
            <div className='small text title'>I started on {form.startDate} and left on {form.endDate}.</div>

        </>
    )
}