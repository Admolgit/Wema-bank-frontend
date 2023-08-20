import React, { useState } from 'react';
import IconCloud from '../assets/simple-line-icons_cloud-download.svg';
import { useRegisterMutation } from '../redux/actions/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { GoEye } from 'react-icons/go';
import * as Yup from 'yup';
import Navbar from '../component/Navbar';
import { customToast } from '../utils/customToast';

function Register() {
  const [avatarPreview, setAvatarPreview] = useState('');
  const [avatar, setAvatar] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { user } = useSelector((state) => state.auth);

  const setFieldValue = (field, value) => {
    formik.setFieldValue(field, value);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      businessCategory: '',
      accNum: '',
      homeAddress: '',
      street: '',
      city: '',
      state: '',
      contactName: '',
      contactNumber: '',
      contactAddress: '',
      password: '',
      confirmPassword: '',
    },

    onSubmit:  async (values) => {
      try {
        
        const res = await register(values).unwrap();
        // dispatch(setUserCredentials({ ...res }));
        customToast.info(`You are logged in as ${values.email}`);
        navigate('/');
        
      } catch (error) {
        customToast.error(error?.data?.message || error?.error);
      }
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required'),
      phone: Yup.string()
        .min(11, 'phone number must be 11 characters or above.')
        .required('Phone number  is required'),
      businessCategory: Yup.string().required(
        'Please select your business category',
      ),
      email: Yup.string()
        .email('invalid email address')
        .required('Email required'),
      homeAddress: Yup.string().required('House number is required'),
      street: Yup.string().required('Street is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      contactName: Yup.string().required('Contact name is required'),
      contactNumber: Yup.string().required('Contact number is required'),
      contactAddress: Yup.string().required('Contact address is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
  });

  const [step, setStep] = useState(0);

  function handleNextClick() {
    setStep(step + 1);
  }

  function handlePrevClick() {
    setStep(step - 1);
  }

  console.log(Object.values(formik.errors));

  return (
    <>
      <Navbar />
      <section className="mx-6 py-[2rem] flex justify-center ">
        <form
          className="flex justify-center m-auto items-center mx-5 md:mx-auto gap-[66px] md:flex-row md:items-start bg-[#fff] px-8 py-6 "
          onSubmit={formik.handleSubmit}
        >
          <div className=" ">
            {step === 0 && (
              <div className="form-layout mt-4 ">
                <div>
                  <div>
                    <h1 className="text-[#039BF0] font-[500] text-[24px] leading-[29.05px] ">
                      Welcome to Xpress Rewards
                    </h1>
                    <p className="text-[#606060] text-[12px] leading-[14.52px] font-[400] py-[1rem] ">
                      Complete the form below to get started
                    </p>
                  </div>
                  <hr className="text-[#F5F6F8]" />
                </div>

                <div className="bg-[] ">
                  <h3 className="text-[#039BF0] text-[14px] leading-[16.94px] py-[1rem] ">
                    Business Information
                  </h3>
                  <label
                    className={`block text-[14px] font-[500] mb-1 ${
                      formik.touched.name && formik.errors.name
                        ? 'text-red-600'
                        : ''
                    }`}
                    htmlFor="name"
                  >
                    {formik.touched.name && formik.errors.name
                      ? formik.errors.name
                      : 'Business name '}
                  </label>
                  <div className="#CCCCCC">
                    <input
                      type="text"
                      className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[60%] mb-3 text-gray-500 md:w-[400px] focus:border-2 focus:border-[#039BF0]"
                      placeholder=""
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
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
                      : 'Business Email Address'}
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
                      formik.touched.phone && formik.errors.phone
                        ? 'text-red-600'
                        : ''
                    }`}
                  >
                    {formik.touched.phone && formik.errors.phone
                      ? formik.errors.phone
                      : 'Business Phone Number'}
                  </label>
                  <input
                    type="text"
                    className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[60%] mb-3 text-gray-500 md:w-[400px] focus:border-2 focus:border-[#039BF0]"
                    placeholder=""
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <label
                    className={`block text-[14px] font-[500] mb-1 ${
                      formik.touched.businessCategory &&
                      formik.errors.businessCategory
                        ? 'text-red-600'
                        : ''
                    }`}
                  >
                    {formik.touched.businessCategory &&
                    formik.errors.businessCategory
                      ? formik.errors.businessCategory
                      : ' Business Category'}
                  </label>
                  <select
                    type="select"
                    className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[60%] mb-3 text-gray-500 md:w-[400px] focus:border-2 focus:border-[#039BF0] form-select "
                    placeholder=" Eg: Small, Medium, Large"
                    name="businessCategory"
                    value={formik.values.businessCategory}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value=""> Eg: Small, Medium, Large</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>
                <div>
                  <label
                    className={`block text-[14px] font-[500] mb-1 ${
                      formik.touched.accNum && formik.errors.accNum
                        ? 'text-red-600'
                        : ''
                    }`}
                  >
                    {formik.touched.accNum && formik.errors.accNum
                      ? formik.errors.accNum
                      : 'Account No'}
                  </label>
                  <input
                    type="text"
                    className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[60%] mb-3 text-gray-500 md:w-[400px] focus:border-2 focus:border-[#039BF0]"
                    placeholder=""
                    name="accNum"
                    value={formik.values.accNum}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <label
                    className={`block text-[14px] font-[500] mb-1 ${
                      formik.touched.image && formik.errors.image
                        ? 'text-red-600'
                        : ''
                    }`}
                  >
                    {formik.touched.image && formik.errors.image
                      ? formik.errors.image
                      : 'Image (Logo)'}
                  </label>
                  <div className=" flex flex-col items-center border-2 border-dotted ">
                    <div className="px-4 py-2 flex flex-col items-center">
                      <img src={IconCloud} alt="" />
                      <p className="text-[12px] leading-[17.76px] ">
                        Drag here or click the button below to upload{' '}
                      </p>

                      <div className="p-4 flex flex-col items-center gap-2 rounded-lg cursor-pointer">
                        {/* <img className="" src={Icon} alt="" /> */}
                        <input
                          type="file"
                          accept="image/*"
                          className="form-input border-2 bg-[#039BF0] rounded-md placeholder:none px-[15px] py-[8px] text-[14px] font-[500] w-[40%] mb-3 text-gray-500 focus:border-2 focus:border-[#039BF0]"
                          name="image"
                          // value={formik.values.image}
                          // onChange={formik.handleChange}
                          onChange={(e) => {
                            const fileReader = new FileReader();
                            fileReader.onload = () => {
                              if (fileReader.readyState === 2) {
                                setFieldValue('image', fileReader.result);
                                setAvatarPreview(fileReader.result);
                              }
                            };
                            fileReader.readAsDataURL(e.target.files[0]);
                          }}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      <p>Maximum upload size: 10MB (.jpg)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mt-[3rem] gap-4 text-[14px] ">
                  <button
                    className="transition-colors transition duration-700 ease-in-out bg-[#039BF0] text-white hover:bg-[] px-[20px] py-[16px] rounded-[4px] text-[14px] font-[500] shadow-md cursor-pointer "
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                  <p>Step 1 of 2</p>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="form-layout mt-4 ">
                <div>
                  <div>
                    <h1 className="text-[#039BF0] font-[500] text-[24px] leading-[29.05px] ">
                      Welcome to Xpress Rewards
                    </h1>
                    <p className="text-[#606060] text-[12px] leading-[14.52px] font-[400] py-[1rem] ">
                      Complete the form below to get started
                    </p>
                  </div>
                  <hr className="text-[#F5F6F8] mb-[1rem] " />
                </div>

                <div>
                  <h3 className="text-[#039BF0] text-[14px] leading-[16.94px] py-[1rem] ">
                    Business Information
                  </h3>
                  <div className="flex gap-4 ">
                    <div className="flex-1 ">
                      <label
                        className={`block text-[14px] font-[500] mb-1 ${
                          formik.touched.homeAddress &&
                          formik.errors.homeAddress
                            ? 'text-red-600'
                            : ''
                        }`}
                      >
                        {formik.touched.homeAddress && formik.errors.homeAddress
                          ? formik.errors.homeAddress
                          : 'House Number'}
                      </label>
                      <input
                        type="text"
                        className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[60%] mb-3 text-gray-500 focus:border-2 focus:border-[#039BF0]"
                        placeholder=""
                        name="homeAddress"
                        value={formik.values.homeAddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    <div className="flex-1 ml-[-6rem] ">
                      <label
                        className={`block text-[14px] font-[500] mb-1 ${
                          formik.touched.street && formik.errors.street
                            ? 'text-red-600'
                            : ''
                        }`}
                      >
                        {formik.touched.street && formik.errors.street
                          ? formik.errors.street
                          : 'Street'}
                      </label>
                      <input
                        type="text"
                        className="form-input border-2 rounded-md
                     placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[100%] mb-3 text-gray-500 focus:border-2 focus:border-[#039BF0]"
                        placeholder=""
                        name="street"
                        value={formik.values.street}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 ">
                    <div className="flex-1 ">
                      <label
                        className={`block text-[14px] font-[500] mb-1 ${
                          formik.touched.city && formik.errors.city
                            ? 'text-red-600'
                            : ''
                        }`}
                      >
                        {formik.touched.city && formik.errors.city
                          ? formik.errors.city
                          : 'City'}
                      </label>
                      <input
                        type="text"
                        className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[100%] mb-3 text-gray-500 focus:border-2 focus:border-[#039BF0]"
                        placeholder=""
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    <div className="flex-1 ">
                      <div>
                        <label
                          className={`block text-[14px] font-[500] mb-1 ${
                            formik.touched.state && formik.errors.state
                              ? 'text-red-600'
                              : ''
                          }`}
                        >
                          {formik.touched.state && formik.errors.state
                            ? formik.errors.state
                            : 'State'}
                        </label>
                        <select
                          type="select"
                          className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[100%] mb-3 text-gray-500 focus:border-2 focus:border-[#039BF0]"
                          placeholder=""
                          name="state"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value=""></option>
                          <option value="Abia State">Abia State</option>
                          <option value="Adamawa State">Adamawa State</option>
                          <option value="Medium">Medium</option>
                          <option value="Akwa Ibom State">
                            Akwa Ibom State
                          </option>
                          <option value="Anambra State">Anambra State</option>
                          <option value="Bauchi State">Bauchi State</option>
                          <option value="Bayelsa State">Bayelsa State</option>
                          <option value="Benue State">Benue State</option>
                          <option value="Borno State">Borno State</option>
                          <option value="Cross River State">
                            Cross River State
                          </option>
                          <option value="Delta State">Delta State</option>
                          <option value="Ebonyi State">Ebonyi State</option>
                          <option value="Edo State">Edo State</option>
                          <option value="Ekiti State">Ekiti State</option>
                          <option value="Enugu State">Enugu State</option>
                          <option value="Gombe State">Large</option>
                          <option value="Imo State">Imo State</option>
                          <option value="Jigawa State">Jigawa State</option>
                          <option value="Kaduna State">Kaduna State</option>
                          <option value="Kano State">Kano State</option>
                          <option value="Katsina State">Katsina State</option>
                          <option value="Kebbi State">Kebbi State</option>
                          <option value="Kogi State">Kogi State</option>
                          <option value="Kwara State">Kwara State</option>
                          <option value="Lagos State">Lagos State</option>
                          <option value="Nasarawa State">Nasarawa State</option>
                          <option value="Niger State">Niger State</option>
                          <option value="Ogun State">Ogun State</option>
                          <option value="Ondo State">Ondo State</option>
                          <option value="Osun State">Osun State</option>
                          <option value="Oyo State">Oyo State</option>
                          <option value="Plateau State">Plateau State</option>
                          <option value="Rivers State">Rivers State</option>
                          <option value="Sokoto State">Sokoto State</option>
                          <option value="Taraba State">Taraba State</option>
                          <option value="Yobe State">Yobe State</option>
                          <option value="Zamfara State">Zamfara State</option>
                          <option value="Zamfara State">FCT</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#039BF0] text-[14px] leading-[16.94px] py-[1rem] ">
                      Contact Information
                    </h3>

                    <div>
                      <label
                        className={`block text-[14px] font-[500] mb-1 ${
                          formik.touched.contactName &&
                          formik.errors.contactName
                            ? 'text-red-600'
                            : ''
                        }`}
                      >
                        {formik.touched.contactName && formik.errors.contactName
                          ? formik.errors.contactName
                          : 'Contact Name'}
                      </label>
                      <input
                        type="text"
                        className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[60%] mb-3 text-gray-500 md:w-[400px] focus:border-2 focus:border-[#039BF0]"
                        placeholder=""
                        name="contactName"
                        value={formik.values.contactName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-[14px] font-[500] mb-1 ${
                          formik.touched.contactNumber &&
                          formik.errors.contactNumber
                            ? 'text-red-600'
                            : ''
                        }`}
                      >
                        {formik.touched.contactNumber &&
                        formik.errors.contactNumber
                          ? formik.errors.contactNumber
                          : 'Contact Phone Number'}
                      </label>
                      <input
                        type="text"
                        className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[60%] mb-3 text-gray-500 md:w-[400px] focus:border-2 focus:border-[#039BF0]"
                        placeholder=""
                        name="contactNumber"
                        value={formik.values.contactNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    <div>
                      <div>
                        <label
                          className={`block text-[14px] font-[500] mb-1 ${
                            formik.touched.contactAddress &&
                            formik.errors.contactAddress
                              ? 'text-red-600'
                              : ''
                          }`}
                        >
                          {formik.touched.contactAddress &&
                          formik.errors.contactAddress
                            ? formik.errors.contactAddress
                            : 'Contact Email Address'}
                        </label>
                        <input
                          type="text"
                          className="form-input border-2 rounded-md placeholder:text-gray-400 px-[15px] py-[8px] text-[14px] font-[500] w-[60%] mb-3 text-gray-500 md:w-[400px] focus:border-2 focus:border-[#039BF0]"
                          placeholder=""
                          name="contactAddress"
                          value={formik.values.contactAddress}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#039BF0] text-[14px] leading-[16.94px] py-[1rem] ">
                      Password
                    </h3>

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

                    <div>
                      <label
                        className={`block text-[14px] font-[500] mb-1 ${
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                            ? 'text-red-600'
                            : ''
                        }`}
                      >
                        {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                          ? formik.errors.confirmPassword
                          : 'Password'}
                      </label>
                      <div className="flex gap-2 items-center form-input border-2 rounded-md placeholder:text-gray-400 text-[14px] font-[500] w-[100%] mb-3 text-gray-500 focus:border-2">
                        <input
                          type="password"
                          className=" w-[100%]  px-[15px] py-[8px] text-[14px] bg-[#fff]"
                          placeholder=""
                          name="confirmPassword"
                          value={formik.values.confirmPassword}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <GoEye className="mx-3" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-[3rem] gap-4 text-[14px] ">
                    <input
                      type="submit"
                      className="transition-colors transition duration-700 ease-in-out bg-[#039BF0] text-white hover:bg-[] px-[20px] py-[16px] rounded-[4px] text-[14px] font-[500] shadow-md cursor-pointer "
                      disabled={Object.values(formik.errors) > 0 ? true : false}
                      value="Sign up"
                    />
                    <p>Step 2 of 2</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
