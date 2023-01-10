import React from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './MobileContact.css';

function MobileContact() {
  const SERVICE_ID = 'service_5q0reaj';
  const TEMPLATE_ID = 'template_jijt9r9';
  const USER_ID = 'd8GHA5g3Bt2faC61N';
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="mobileContact">
      <div className="mobileInfo">
        <h1>Contact Me!</h1>
        <p>
          I would love to hear from you! Whether it be a job opportunity, a fun
          project, or just a life update, please reach out and let's connect!
        </p>
      </div>
      <div className="mobileContactForm">
        <Form onSubmit={handleOnSubmit}>
          <div className="firstName">
            <p>First Name*</p>
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              name="user_first_name"
              required
              icon="user circle"
              iconPosition="left"
            />
          </div>
          <div>
            <p>Last Name*</p>
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              name="user_last_name"
              required
              icon="user circle"
              iconPosition="left"
            />
          </div>

          <div className="mobileEmail">
            <p>Email*</p>
            <Form.Field
              id="form-input-control-email"
              control={Input}
              name="user_email"
              required
              icon="mail"
              iconPosition="left"
            />
          </div>
          <div className="mobileNumber">
            <p>Number</p>
            <Form.Field
              id="form-input-control-phone"
              control={Input}
              name="user_phone"
              icon="mail"
              iconPosition="left"
              type="tel"
            />
          </div>

          <div className="message">
            <p>Message*</p>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              name="user_message"
              required
            />
          </div>
          <Button id="button" class="button" type="submit">
            Submit&nbsp;
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default MobileContact;
