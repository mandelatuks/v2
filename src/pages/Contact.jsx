import React from 'react'
import { useForm} from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xvoydgzj");
  if (state.succeeded) {
      return <p>Thank you for Contacting me!</p>;
  }
  return (
    //   <form onSubmit={handleSubmit}>
    //       <label htmlFor="email">
    //     Full Names
    //   </label>
    //   <input
    //     id="name"
    //     type="name" 
    //     name="name"
    //   />
    //   <label htmlFor="email">
    //     Email Address
    //   </label>
    //   <input
    //     id="email"
    //     type="email" 
    //     name="email"
    //   />
    //   <ValidationError 
    //     prefix="Email" 
    //     field="email"
    //     errors={state.errors}
    //   />
    //   <textarea
    //     id="message"
    //     name="message"
    //     placeholder=""Text Area
    //   />
    //   <ValidationError 
    //     prefix="Message" 
    //     field="message"
    //     errors={state.errors}
    //   />
    //   <button type="submit" disabled={state.submitting}>
    //     Submit
    //   </button>
    // </form>
    <div class="w-full md:w-96 md:max-w-full mx-auto">
      <p> Contact Me Here</p>
  <div class="p-6  sm:rounded-md">
    <form onSubmit={handleSubmit}>
      <label className="block mb-6">
        <span className="text-gray-700">Your name</span>
        <input
          type="text"
          name="name"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Craig Banda"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Email address</span>
        <input
          name="email"
          type="email"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="johndoe@example.com"
          required
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Message</span>
        <textarea
          name="message"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="Write your message here"
        ></textarea>
      </label>
      <div class="mb-6">
        <button
          type="submit"
          className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Contact Me
        </button>
      </div>
    </form>
  </div>
</div>

  );
}

export default Contact;