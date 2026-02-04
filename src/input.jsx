export function Input ({ label, name, value, onChange, type, disabled }) {
    return (
        <>
            <label className='small text'>{label}
                <input value={value} name={name} onChange={onChange} type={type} className="text" disabled={disabled}></input>
            </label>
        </>
    )
}