import { Field, FieldArray } from "formik";

const HoppiesField = ({ name }) => {
    return (
        <FieldArray name={name}>
            {   
                (fieldArrProps) => {
                    // console.log("fieldArrProps", fieldArrProps)
                    const { push, remove, form } = fieldArrProps
                    const { values } = form
                    const { hoppies } = values
                    return (<div>
                        {
                            hoppies.map((hoppy, index) => (
                                <div key={index}>
                                    <Field name={`${name}[${index}]`}></Field>
                                    {
                                        index > 0 &&
                                        <button type="button" onClick={() => remove(index)}>-</button>
                                    }
                                    <button type="button" onClick={() => push("")}>+</button>
                                </div>
                            ))
                        }
                    </div>)
                }
            }
        </FieldArray>
    )
}

export { HoppiesField };