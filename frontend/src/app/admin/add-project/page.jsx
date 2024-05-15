'use client';
import { Input } from 'postcss';
import React from 'react'
import { useFormik } from "formik";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const AddProject = () => {

    const router = useRouter();

    const projectForm = useFormik({
        initialValues: {
            title: '',
            category: '',
            subCategory: '',
            cover: '',
            media: '',
            department: '',
            branch: '',
            batch: ''
        },
        onSubmit: (values, { resetForm }) => {
            fetch('http://localhost:5000/project/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    console.log(res.status);
                    if (res.status === 200) {
                        toast.success('Project Added successfully')
                        resetForm();
                    }
                }).catch((err) => {
                    console.log(err);
                });
        }
    })

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            console.log("file uploaded");
            projectForm.setFieldValue('cover', file.name);
          }
        });
      };

    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* text - start */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Project Details
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            This is a section of some simple filler text, also known as placeholder
                            text. It shares some characteristics of a real written text but is
                            random or otherwise generated.
                        </p>
                    </div>
                    {/* text - end */}
                    {/* form - start */}
                    <form onSubmit={projectForm.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="Title"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Title
                            </label>
                            <input
                                id='title'
                                onChange={projectForm.handleChange}
                                value={projectForm.values.title}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="Category"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Category
                            </label>
                            <input
                                id='category'
                                onChange={projectForm.handleChange}
                                value={projectForm.values.category}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="Subcategory"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Subcategory
                            </label>
                            <input
                                id='subCategory'
                                onChange={projectForm.handleChange}
                                value={projectForm.values.subCategory}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="Cover"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Cover*
                            </label>
                            <input
                                type='file'
                                onChange={uploadFile}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="Media"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Media*
                            </label>
                            <input
                                name="Media"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="MadeBy"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                MadeBy*
                            </label>
                            <input
                                name="MadeBy"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="Department"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Department*
                            </label>
                            <input
                                id='department'
                                onChange={projectForm.handleChange}
                                value={projectForm.values.department}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />

                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="Branch"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Branch*
                            </label>
                            <input
                                id='branch'
                                onChange={projectForm.handleChange}
                                value={projectForm.values.branch}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="Batech"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Batch*
                            </label>
                            <input
                                id='batch'
                                onChange={projectForm.handleChange}
                                value={projectForm.values.batch}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        <div className="flex items-center justify-between sm:col-span-2">
                            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                Send
                            </button>
                            <span className="text-sm text-gray-500">*Required</span>
                        </div>
                        <p className="text-xs text-gray-400">
                            By signing up to our newsletter you agree to our{" "}
                            <a
                                href="#"
                                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </form>
                    {/* form - end */}
                </div>
            </div>

        </div>
    )
}

export default AddProject;