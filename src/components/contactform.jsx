import React, { useState } from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Text,
  Button,
  Column,
  Row,
  Input,
  Textarea,
  Subtitle,
  Label
} from "../theme/index";
import { Colors, Responsive } from "../theme/styles";

const FormWrapper = styled.div`
  width: ${props => props.width || "100%"};
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0 auto;
//   border: 2px solid ${Colors.lightBlue};
  padding-top: ${props => props.paddingtop || "48px"};
  padding-bottom: 48px;
  background-color: ${props => props.background || `${Colors.white}`};
box-shadow: ${props => props.boxshadow || `0px 3px 8px ${Colors.blue}`};
border-radius: 10px;
  //   @media
  //     (max-width: 992px) {
  //     width: 100%;
  //     height: auto;
  //   }
  //   @media (max-width: 780px) {
  //     width: 95%;
  //     height: auto;
  //   }
    @media (max-width: 600px) {
      width: 100%;
      height: auto;
    }
`;

const Form = styled.form`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 780px) {
    width: 85%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  margin-top: 24px;
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  // border: ${props =>
    props.error ? `1px solid ${Colors.blue}` : `1px solid ${Colors.red}`};
  border: ${props => props.inputborder};
  background-color: ${props => props.inputbackground || `${Colors.white}`};
  outline: none;
  padding: 0 16px;
  margin-top: 12px;
  transition: 250ms;
`;

const Checkbox = styled.div`
  .checkbox-label {
    display: block;
    position: relative;
    margin: auto;
    cursor: pointer;
    line-height: 24px;
    height: 20px;
    width: 20px;
    clear: both;
  }

  .checkbox-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkbox-label .checkbox-custom {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 2px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    border: 1px solid ${Colors.red};
  }

  .checkbox-label input:checked ~ .checkbox-custom {
    background-color: #ffffff;
    border-radius: 2px;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity: 1;
    border: 1px solid ${Colors.red};
  }

  .checkbox-label .checkbox-custom::after {
    position: absolute;
    content: "";
    left: 12px;
    top: 12px;
    height: 0px;
    width: 0px;
    border-radius: 2px;
    border: 1px solid ${Colors.red};
    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity: 1;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
  }

  .checkbox-label input:checked ~ .checkbox-custom::after {
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity: 1;
    left: 6px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: 2px solid ${Colors.red};
    border-width: 0 2px 2px 0;
    background-color: transparent;
    border-radius: 0;
  }
`;

const StyledButton = styled(Button)`
  ${Responsive.sm`
    width: 100%;
    background: ${props => props.background || `${Colors.red}`};
    height: 50px;
    border-radius: 5px;
    border: ${props => props.border};
    color: ${Colors.white};
  `}
`;

const StyledText = styled(Subtitle)`
  text-align: left;
  color: ${props => props.color || `${Colors.red}`};
  font-size: 32px;
`;

const NewsletterText = styled(Text)`
  color: ${props => props.color || `${Colors.red}`};
  width: 100%;
  margin: -10px 0 15px 10px;
`;

export const ContactForm = ({
  width,
  background,
  color,
  boxshadow,
  border,
  inputcolor,
  inputborder,
  paddingtop,
  inputbackground
}) => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleChange = () => {
    setIsChecked(!isChecked);
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          name: "",
          phoneNumber: "",
          message: ""
        }}
        validationSchema={yup.object().shape({
          email: yup.string().required("Email Required"),
          name: yup.string().required("First Name Required"),
          phoneNumber: yup.string(),
          message: yup.string()
        })}
        onSubmit={(values, { setErrors, setSubmitting, setStatus }) => {
          fetch("/?no-cache=1", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact",
              ...values
            })
          })
            .then(() => {
              if (isChecked === true) {
                addToMailchimp(values.email, {
                  FNAME: values.name,
                  PHONE: values.phoneNumber
                }).then(data => {
                  if (data.result === "error") {
                    setErrors({ msg: "Error submitting your inquiry" });
                    setSubmitting(false);
                  } else {
                    setStatus({
                      success:
                        "Success! Thanks for your inquiry and signing up for the CheshTech Newsletter! Expect an email shortly."
                    });
                    setSubmitting(false);
                  }
                });
              } else if (isChecked === false) {
                setStatus({
                  success:
                    "Thanks for contacting CheshTech! We'll get back to you as soon as possible."
                });
                setSubmitting(false);
              } else {
                setErrors({
                  submitErr:
                    "Error. Please make sure required fields are filled out correctly."
                });
                setSubmitting(false);
              }
            })
            .catch(err => {
              setErrors({ submitErr: "Network error. Please try again" });
            });
        }}
      >
        {({
          handleChange,
          handleSubmit,
          submitForm,
          status,
          handleBlur,
          values,
          errors,
          touched
        }) => (
          <FormWrapper
            width={width}
            background={background}
            boxshadow={boxshadow}
            paddingtop={paddingtop}
          >
            <Form
              id="email-capture"
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div>
                <StyledText color={color}>
                  Contact us, <em>today</em>
                </StyledText>
                <Grid>
                  <Label color={color}>
                    {errors.name && touched.name
                      ? "Please fill out first name"
                      : "First Name"}
                    <StyledInput
                      inputbackground={inputbackground}
                      inputcolor={inputcolor}
                      color={color}
                      inputborder={inputborder}
                      placeholder="First Name"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                      name="name"
                      error={touched.name && errors.name}
                      required
                    />
                  </Label>
                  <Label color={color}>
                    {errors.email && touched.email
                      ? "Please make sure email is filled out"
                      : "Email"}
                    <StyledInput
                      inputbackground={inputbackground}
                      inputcolor={inputcolor}
                      inputborder={inputborder}
                      color={color}
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={touched.email && errors.email}
                      required
                    />
                  </Label>
                </Grid>
              </div>
              <Label color={color}>
                Message
                <Textarea
                  placeholder="Message"
                  color={color}
                  border={border}
                  inputborder={inputborder}
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  inputbackground={inputbackground}
                  inputcolor={inputcolor}
                ></Textarea>
              </Label>
              <Row margin="5px">
                <Checkbox>
                  <label className="checkbox-label">
                    <input
                      name="newsletter"
                      onChange={toggleChange}
                      checked={isChecked}
                      type="checkbox"
                    />
                    <span className="checkbox-custom"></span>
                  </label>
                </Checkbox>
                <NewsletterText small color={color}>
                  Sign up for the Shokunin Newsletter!
                </NewsletterText>
              </Row>
              <div>
                <Text style={{ width: "90%" }}>
                  {
                    (errors =
                      errors.email && touched.email
                        ? errors.submitErr
                        : errors.name
                        ? errors.submitErr
                        : errors.submitErr
                        ? errors.submitErr
                        : errors.msg
                        ? errors.msg
                        : null)
                  }
                  {status && isChecked
                    ? status.success
                    : status
                    ? status.success
                    : null}
                </Text>
              </div>
              <Column width="100%" alignitems="flex-end" margin="10px 0 0 0">
                <StyledButton
                  type="submit"
                  className="cta-btn cta-btn--form"
                  border={border}
                >
                  Submit
                </StyledButton>
              </Column>
            </Form>
          </FormWrapper>
        )}
      </Formik>
    </div>
  );
};
