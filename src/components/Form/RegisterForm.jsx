import { Formik, Form} from "formik";
import * as yup from "yup";
import { ref } from "yup";
import FormikField from "./FormikField";
import { HoppiesField } from "./HoppiesFiels";
import './RegisterForm.scss'
const RegisterForm = () => {

    const initialValues = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        active: "false",
        gender: "",
        hoppies: [""]

    };
    // const onSubmit = (values) => console.log("Formmmmm", JSON.stringify(values));
    const validationSchema = yup.object({
        userName: yup.string().required("Please Enter Your Name"),
        email: yup
            .string()
            .email("Please enter a valid email address")
            .required("Email field is required"),
        password: yup.string().min(8, "Write At Least 8 Character").required("Password field is required"),
        confirmPassword: yup.string()
            .required("Please confirm your password")
            .oneOf([ref("password")], "Passwords do not match"),
        gender: yup.string().required("Plese Select Your Gender"),

    });

    return (
        <Formik initialValues={initialValues}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                console.log(JSON.stringify(values, null, 2));
            }}
            validationSchema={validationSchema}>
            {
                (formik) => {
                    console.log("formik",formik.values)
                    return (
                        <div className="register">
                            <div className="container">
                                <Form className="form ">
                                    <div className="formContent mt-5">
                                        <FormikField label="User Name" name="userName" type="text" ></FormikField>
                                        <FormikField label="Email" name="email" type="email" />
                                        <FormikField label="Password" name="password" type="password" />
                                        <FormikField label="Confirm Password" name="confirmPassword" type="password" />
                                        <div className="mb-2">
                                            <label for="cars">Your Gender:</label>
                                            <select id="cars" name="gender">
                                                <option value="female">Female</option>
                                                <option value="male">Male</option>
                                            </select>
                                        </div>
                                        <FormikField label="Active" name="active" type="checkBox" />
                                        <div className="mb-2">
                                            <label>List Of Hoppies</label>
                                            <HoppiesField name="hoppies"></HoppiesField>
                                        </div>
                                    
                                        <button type="submit" className="btn btn-dark">Register</button>

                                    </div>
                                </Form>
                            </div>
                        </div>
                    )
                }
            }
        </Formik >
    )
}

export { RegisterForm };