import { ErrorMessage, useFormik } from "formik";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import * as yup from "yup";

const LoginForm = () => {
  const initialValues={
    email:"",
    password:"",
    rememberMe:""
  };
  const onSubmit =(values)=>console.log(JSON.stringify(values, null, 4));
  const validationSchema =  yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
  });
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema
    });


    return (
      <form onSubmit={formik.handleSubmit}>
        <div style={{ padding: 20 }}>
          <label htmlFor="email" style={{ display: "block" }}>
            email
          </label>
          <input type="email" id="email" 
          name="email"
          {...formik.getFieldProps("email")} />

          {
            formik.errors.email &&(<div style={{color:"red"}}>{formik.errors.email}</div>)
          }
  
          <label htmlFor="password" style={{ display: "block" }}>
            password
          </label>
          <input type="password" id="password" 
          name="password"
          {...formik.getFieldProps("password")}/>
          {
            formik.errors.password &&(<div style={{color: "red"}}>{formik.errors.password}</div>)
          }
  
          <label htmlFor="rememberMe" style={{ display: "block" }}>
            remember me
          </label>
          <input type="checkbox" id="rememberMe" 
          name="rememberMe"
          {...formik.getFieldProps("rememberMe")}/>
  
          <button style={{ display: "block" }}>submit</button>
        </div>
        {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
      </form>
    );
  };

export {LoginForm};