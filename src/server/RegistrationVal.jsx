import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./Registration.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";


export function RegistrationVal() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/register");

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  

  const onSubmit = async (data) => {
    try {
      console.log("Submitting data:", data);
      const response = await axios.post("http://localhost:4600/gymdb/register", data);
  
      alert("Form submitted successfully!");
      console.log("Server response:", response.data);
    } catch (error) {
      alert("Form submission failed!");
      console.error("Error:", error);
  
      // Log the response if available
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    
    <div className="Register template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary ">
      <div
        className="container-fluid p-5 rounded bg-white"
        style={{ width: "50%" }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-6">
            <h2>Registration Form </h2>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Name must be at most 20 characters long",
                  },
                })}
                type="text"
                placeholder="Enter name"
                defaultValue=""
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters long",
                  },
                })}
                type="password"
                placeholder="Enter Password"
                defaultValue=""
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>

                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email is invalid",
                    },
                  }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Date Of Birth</Form.Label>

            <Controller
              name="dob"
              control={control}
              defaultValue=""
              rules={{
                required: "Date of birth is required",
                validate: (value) => {
                  const today = new Date();
                  const dob = new Date(value);
                  if (dob >= today) {
                    return "Date of birth must be in the past";
                  }
                  return true;
                },
              }}
              render={({ field }) => <Form.Control {...field} type="date" />}
            />
            {errors.dob && <p className="text-danger">{errors.dob.message}</p>}
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Contact Number</Form.Label>

            <Form.Control
              {...register("contact", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Contact number must be 10 digits long",
                },
              })}
              type="text"
              placeholder="contact number"
              defaultValue=""
            />
            {errors.contact && (
              <p className="text-danger">{errors.contact.message}</p>
            )}
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Address</Form.Label>

            <Form.Control
              {...register("address", {
                required: "Address is required",
                minLength: {
                  value: 10,
                  message: "Address must be at least 10 characters long",
                },
                maxLength: {
                  value: 100,
                  message: "Address must be at most 100 characters long",
                },
              })}
              type="text"
              placeholder="address"
              defaultValue=""
            />
            {errors.address && (
              <p className="text-danger">{errors.address.message}</p>
            )}
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Weight</Form.Label>

            <Form.Control
              {...register("weight", {
                required: "Weight is required",
                min: {
                  value: 1,
                  message: "Weight must be at least 1 kg",
                },
                max: {
                  value: 200,
                  message: "Weight must be at most 200 kg",
                },
              })}
              type="text"
              placeholder="weight kg"
              defaultValue=""
            />
            {errors.weight && (
              <p className="text-danger">{errors.weight.message}</p>
            )}
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label className="label">Select Plan</Form.Label>

            <Form.Check
              type="radio"
              label="Normal Package"
              name="Plan"
              {...register("plan", {
                required: "You must select a plan",
              })}
              value="Normal Package"
              //onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="Economy Package"
              name="Plan"
              value="Economy Package"
              // onChange={handleChange}
              {...register("plan", {
                required: "You must select a plan",
              })}
            />
            <Form.Check
              type="radio"
              label="Deluxe Package"
              name="Plan"
              value="Deluxe Package"
              // onChange={handleChange}
              {...register("plan", {
                required: "You must select a plan",
              })}
            />

            {errors.plan && (
              <p className="text-danger">{errors.plan.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              {...register("terms", {
                required: "You must agree to the terms and conditions",
              })}
              label="Agree to terms and conditions"
              feedback={errors.terms?.message}
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    </div>
 
  );
}
