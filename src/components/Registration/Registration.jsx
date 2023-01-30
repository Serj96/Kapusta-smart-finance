import { useFormik } from 'formik';
import {
  FormTitle,
  FormSubTitle,
  ButtonLink,
  ErrorMsg,
  LoginForm,
  ButtonWrapper,
  LinkRegistr,
} from './Registration.styled';
import { SubmitButton } from '../Theme/Button/Button';
import googleIcon from '../image/googleIcon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterLink } from 'components/Login/Login.styled';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/authOperaions';
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'This is a required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'This is a required field';
  }

  if (!values.password) {
    errors.password = 'This is a required field';
  }
  return errors;
};

export const Registration = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      dispath(register(values));
      navigate("/home")
    },
  });
  return (
    <LoginForm onSubmit={formik.handleSubmit}>
      <FormTitle>You can log in with your Google Account:</FormTitle>
      <ButtonLink href="shorturl.at/pAB18">
        <img src={googleIcon} alt="googleIcon" />
        <span>Google</span>
      </ButtonLink>
      <FormSubTitle>
        Or log in using an email and password, after registering:
      </FormSubTitle>
      <label htmlFor="email">Email :</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="your@email.com"
      />
      {formik.errors.email ? <ErrorMsg>{formik.errors.email}</ErrorMsg> : null}

      <label htmlFor="password">Password :</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        placeholder="Password"
      />
      {formik.errors.password ? (
        <ErrorMsg>{formik.errors.password}</ErrorMsg>
      ) : null}
      <ButtonWrapper>
        <SubmitButton type={'submit'}>Registration</SubmitButton>
        <LinkRegistr>
          <RegisterLink to="/home" styled={{ textDecoration: 'none' }}>
            Log In
          </RegisterLink>
        </LinkRegistr>
      </ButtonWrapper>
    </LoginForm>
  );
};