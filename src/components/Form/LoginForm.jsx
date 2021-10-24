import { useFormik } from "formik";
import * as yup from "yup";
import './LoginForm.scss';
import '../../App.css'

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
      <div className="Login ">
        <div className="container">
            <form onSubmit={formik.handleSubmit} className="form">
              <div className="formContent">
                <div className="mt-2">
                  <label htmlFor="email" style={{ display: "block" }}>
                    email
                  </label>
                  <input type="email" id="email" 
                  name="email"
                  {...formik.getFieldProps("email")} />
                  {
                    formik.errors.email &&(<div style={{color:"red"}}>{formik.errors.email}</div>)
                  }
                </div>
                <div className="mt-2">
                  <label htmlFor="password" style={{ display: "block" }}>
                    password
                  </label>
                  <input type="password" id="password" 
                  name="password"
                  {...formik.getFieldProps("password")}/>
                  {
                    formik.errors.password &&(<div style={{color: "red"}}>{formik.errors.password}</div>)
                  }
                </div>
        
                <div className="mt-2">
                  <label className="me-2">
                    remember me
                  </label>
                  <input type="checkbox" 
                  name="rememberMe"
                  {...formik.getFieldProps("rememberMe")}/>
                </div>

                <button className="btn btn-dark">submit</button>

              </div>
            </form>
        </div>
      </div>
    );
  };

export {LoginForm};