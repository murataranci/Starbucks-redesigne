import { Formik, Field, Form } from 'formik';
import React from 'react'

const SignInUp = () => {
    const dispatch = useDispatch();
    const _login = (loginModel) => {
      dispatch(authCreateToken(loginModel));
    };
  
    return (
      <div className='col-6 offset-3 mt-5'>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-signin-tab" data-bs-toggle="tab" data-bs-target="#nav-signin" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Giriş Yap</button>
            <button className="nav-link" id="nav-signup-tab" data-bs-toggle="tab" data-bs-target="#nav-signup" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Kayıt Ol</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-signin" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
            <Formik
              initialValues={SignInModel}
              validationSchema={SignInValidationScheme}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                _login(values);
              }}
            >{({ isSubmitting, handleSubmit,
              errors, touched, handleChange }) => (
              <Form>
                <img className="mb-4" src="/images/quiz.webp" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
                <div className="form-floating">
                  <input type="text" name='email' onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                  {errors.email && touched.email ? <small >{errors.email}</small> : null}
                </div>
                <div className="form-floating">
                  <input type="password" name="password" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                  {errors.password && touched.password ? <small>{errors.password}</small> : null}
                </div>
  
                {/* <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div> */}
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
              </Form>
            )}</Formik>
          </div>
          <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab" tabIndex="1">
            <Formik
              initialValues={SignUpModel}
              validationSchema={SignUpValidationScheme}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("başarılı!")
              }}
            >{({ isSubmitting, handleSubmit,
              errors, touched, handleChange }) => (
              <Form>
                <img className="mb-4" src="/images/quiz.webp" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
  
                <div className="form-floating">
                  <input type="text" name='fullName' onChange={handleChange} className="form-control" id="floatingInput" />
                  <label for="floatingInput">Full Name</label>
                  {errors.fullName && touched.fullName ? <small >{errors.fullName}</small> : null}
                </div>
                <div className="form-floating">
                  <input type="text" name='email' onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                  {errors.email && touched.email ? <small >{errors.email}</small> : null}
                </div>
                <div className="form-floating">
                  <input type="password" name="password" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                  {errors.password && touched.password ? <small>{errors.password}</small> : null}
                </div>
                <div className="form-floating">
                  <input type="password" name="rePassword" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Re-Password" />
                  <label for="floatingPassword">Re-Password</label>
                  {errors.rePassword && touched.rePassword ? <small>{errors.rePassword}</small> : null}
                </div>
  
                {/* <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div> */}
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
              </Form>
            )}</Formik>
          </div>
        </div>
      </div>
    )
  }
  
  export default SignInUp