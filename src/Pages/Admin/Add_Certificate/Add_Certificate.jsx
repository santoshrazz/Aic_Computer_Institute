import React from 'react'
import ButtonComp from '../../../Components/ButtonComp'

const Add_Certificate = () => {
    return (
        <section className=" py-1 bg-blueGray-50">
            <div className="w-full lg:w-9/12 px-4 mx-auto mt-6">
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Add Certificate
                            </h6>
                            <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button">
                                All Certificate
                            </button>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Add Details
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Applicant Name
                                        </label>
                                        <input type="text" placeholder='Name'
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Father Name
                                        </label>
                                        <input type="text" placeholder='Father Name'
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Gender
                                        </label>
                                        <select name="gender" id="gender" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                                            <option value="Male">Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Select Course
                                        </label>
                                        <select name="course" id="course" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                                            <option value="Select_Course">Select Course</option>
                                            <option value="Dca">Dca</option>
                                            <option value="ADCA">ADCA</option>
                                            <option value="Tally">Tally</option>
                                            <option value="DTP">DTP</option>
                                            <option value="ENGLISH TYPING">ENGLISH TYPING</option>
                                            <option value="HINDI TYPING">HINDI TYPING</option>
                                            <option value="JAVA">JAVA</option>
                                            <option value="PYTHON">PYTHON</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Select Franchaise
                                        </label>
                                        <select name="course" id="course" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                                            <option value="Select_Course">Select Frencheise</option>
                                            <option value="Dca">Dca</option>
                                            <option value="ADCA">ADCA</option>
                                            <option value="Tally">Tally</option>
                                            <option value="DTP">DTP</option>
                                            <option value="ENGLISH TYPING">ENGLISH TYPING</option>
                                            <option value="HINDI TYPING">HINDI TYPING</option>
                                            <option value="JAVA">JAVA</option>
                                            <option value="PYTHON">PYTHON</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Date of Admission
                                        </label>
                                        <input type="date"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Fees
                                        </label>
                                        <input type="text" placeholder='Fees'
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Registration Number
                                        </label>
                                        <input type="text" placeholder='Registration Number'
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Serial Number
                                        </label>
                                        <input type="text" placeholder='serial Number'
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Certificate Issue Date
                                        </label>
                                        <input type="date"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Percent
                                        </label>
                                        <input type="text" placeholder='Percent'
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 px-4 my-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Place
                                        </label>
                                        <input type="text" placeholder='Place'
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>

                                <div className="w-full px-4">
                                    <div className="relative flex justify-center items-center w-full mb-3">
                                        <ButtonComp text='Submit' />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Add_Certificate
