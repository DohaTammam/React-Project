const GenderField = ({name,label}) => {
    return (
        <>
        <label for="cars">{label}</label>
        <select id="cars" name={name}>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
        </>
    )
}
export {GenderField}