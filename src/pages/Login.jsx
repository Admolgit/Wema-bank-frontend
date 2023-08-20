import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../redux/actions/userSlice';
import { setUserCredentials } from '../redux/slices/authSlice';
import { customToast } from '../utils/customToast';
import { GoEye } from 'react-icons/go';
import * as Yup from 'yup';
import LoginNavbar from '../component/LoginNavbar';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { user } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values) => {
      try {
        
        const res = await login(values).unwrap();
        dispatch(setUserCredentials({ ...res }));
        customToast.info(`You are logged in as ${values.email}`);
        navigate('/dashboard');
        
      } catch (error) {
        customToast.error(error?.data?.message || error?.error);
      }
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('invalid email address')
        .required('Email required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    }),
  });

  return (
    <>
      <LoginNavbar />
      <section className="h-[85vh] flex justify-center">
        <form
          className="flex mt-[4rem] justify-center m-auto items-center mx-5 md:mx-auto gap-[66px] bg-[#fff] px-8 py-6 "
          onSubmit={formik.handleSubmit}
        >
          <div className="form-layout mt-4 ">
            <div>
              <div>
                <h1 className="text-[#039BF0] font-[500] text-[24px] leading-[29.05px] ">
                  Welcome Back!
                </h1>
                <p className="text-[#606060] text-[12px] leading-[14.52px] font-[400] py-[1rem] ">
                  Sign in to your Xpress reward partner’s dashboard
                </p>
              </div>
              <hr className="text-[#F5F6F8]" />
            </div>

            <div>
              <label
                className={`block text-[14px] font-[500] mb-1 ${
                  formik.touched.email && formik.errors.email
                    ? 'text-red-600'
                    : ''
                }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : 'Email Address'}
              </label>
              <div className="#CCCCCC">
                <input
                  type="email"
                  className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[60%] mb-3 text-gray-500 md:w-[400px] focus:border-2 focus:border-[#039BF0]"
                  placeholder=""
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <div>
              <label
                className={`block text-[14px] font-[500] mb-1 ${
                  formik.touched.password && formik.errors.password
                    ? 'text-red-600'
                    : ''
                }`}
              >
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : 'Password'}
              </label>
              <div className="flex gap-2 items-center form-input border-2 rounded-md placeholder:text-gray-400 text-[14px] font-[500] w-[100%] mb-3 text-gray-500 focus:border-2">
                <input
                  type="password"
                  className=" w-[100%]  px-[15px] py-[8px] text-[14px] bg-[#fff]"
                  placeholder=""
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <GoEye className="mx-3" />
              </div>
            </div>
            <div className="flex gap-6 text-[14px] leading-[16.94px] ">
              <h1 className="text-[#606060] ">Forgot Password?</h1>
              <p className="text-[#039BF0] ">Reset it</p>
            </div>
            <input
              type="submit"
              className="transition-colors transition duration-700 w-[100%] mt-[2rem] ease-in-out bg-[#039BF0] text-white hover:bg-[] px-[20px] py-[16px] rounded-[4px] text-[14px] font-[500] shadow-md cursor-pointer "
              disabled={Object.values(formik.errors) > 0 ? true : false}
              value="Sign in"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
