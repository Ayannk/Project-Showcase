'use client';
import { useFormik } from 'formik'
import React from 'react'


const Contact = () => {

  const contactForm = useFormik({
    initialValues: {
      fname: '',
      lname:'',
      email: '',
      number: '',
      details: ""
    },
    onSubmit: (values) => {
      fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          console.log(res.status);
          console.log(values);
         
        }).catch((err) => {
          console.log(err);
        });
    }
  })

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Contact Us
            </h2>
          
          </div>
          {/* text - end */}
          {/* form - start */}
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                First name*
              </label>
              <input
                name="first-name"
                value={contactForm.values.fname}
                    onChange={contactForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last name*
              </label>
              <input
                name="last-name"
                value={contactForm.values.lname}
                    onChange={contactForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
           
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                name="email"
                value={contactForm.values.email}
                    onChange={contactForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Number*
              </label>
              <input
                name="subject"
                value={contactForm.values.subject}
                    onChange={contactForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Details*
              </label>
              <textarea
                name="details"
                value={contactForm.values.message}
                    onChange={contactForm.handleChange}
                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="flex items-center justify-between sm:col-span-2">
              <button className=" w-full inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>
           
            </div>
           
          </form>
          {/* form - end */}
        </div>
      </div>

    </div>

  )
}

export default Contact