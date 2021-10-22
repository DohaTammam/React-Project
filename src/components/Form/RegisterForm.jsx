import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { ref } from "yup";
import FormikField from "./FormikField";
import { GenderField } from "./GenderField";
import { HoppiesField } from "./HoppiesFiels";
const RegisterForm = () => {

    const initialValues = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        active: false,
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
                        <Form>
                            <div style={{ padding: 20 }}>
                                <FormikField label="User Name" name="userName" type="text"></FormikField>
                                <FormikField label="Email" name="email" type="email" />
                                <FormikField label="Password" name="password" type="password" />
                                <FormikField label="Confirm Password" name="confirmPassword" type="password" />
                                <GenderField name="gender"></GenderField>
                                <FormikField label="Active" name="active" type="checkBox" />
                                <div>
                                    <label>List Of Hoppies</label>
                                    <HoppiesField name="hoppies"></HoppiesField>
                                </div>
                                <div>
                                    <button type="submit">Register</button>
                                </div>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik >
    )
}

export { RegisterForm };