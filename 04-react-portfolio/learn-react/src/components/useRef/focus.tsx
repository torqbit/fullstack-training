import React from 'react'
import { useState, useRef, useEffect, FC } from 'react'



interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const FocusManagement: FC = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);


  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const focusInput = (inputRef: React.RefObject<HTMLInputElement>) => {
    inputRef.current?.focus();
  };

  // TODO: Implement focus next input functionality
  const focusNextInput = (currentRef: React.RefObject<HTMLInputElement>) => {};


  const handleSubmit = (e: React.FormEvent) => {
    console.log("form has been submitted")
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value })}


  return (
    <div>
      <h2>Focus Management Form</h2>
      <form onSubmit={handleSubmit}>
      <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange= {handleInputChange}
            placeholder='firstName'
            ref={firstNameRef}
            required
          />
        <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange= {handleInputChange}
            placeholder='lastName'
            ref={lastNameRef}
            required
          />
        <input
            type="text"
            name="email"
            value={formData.email}
            onChange= {handleInputChange}
            placeholder='email'
            ref={emailRef}
            required
          />
        <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange= {handleInputChange}
            placeholder='phone'
            ref={phoneRef}
            required
          />
      </form>

      <div>
        <button onClick={()=>focusInput(firstNameRef)}>firstName</button>
        <button onClick={()=>focusInput(lastNameRef)}>lastName</button>
        <button onClick={()=>focusInput(emailRef)}>email</button>
        <button onClick={()=>focusInput(phoneRef)}>phone</button>
      </div>
    </div>
  );
};
