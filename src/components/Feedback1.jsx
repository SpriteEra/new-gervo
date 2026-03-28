import send from '../assets/send.png';
export default function Feedback1() {
    return (
      <div className="flex flex-col md:flex-row-reverse p-2 sm:p-6 md:p-4  sm:mx-6  gap-4 md:gap-50 text-black">

            <form className=" w-full max-w-4xl mx-auto hover:shadow-lg p-6 text-left flex flex-col gap-2">
               <h1 className="text-[#295E3E] font-bold text-3xl leading-normal md:hidden text-center">Get in Touch</h1>
                <div className="flex flex-col text-left">
                    <label className="mb-1 font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex flex-col text-left">
                    <label className="mb-1 font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex flex-col text-left">
                    <label className="mb-1 font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        placeholder="Enter Subject"
                        className="border border-gray-300 rounded-lg p-2 bg-white  focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex flex-col text-left">
                    <label className="mb-1 font-medium text-gray-700">Message</label>
                    <textarea
                        rows="2"
                        placeholder="Write here..."
                        className="border border-gray-300 rounded-lg p-2 bg-white  focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-[#00AD28] w-fit p-4 hover:bg-green-700 text-white font-semibold py-2 flex items-center justify-center rounded-lg transition duration-300"
                >
                    Send
                    <img src={send} alt="send" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

            </form>
            <div className="flex flex-col md:text-left text-center p-6 md:gap-2 gap-4">
                <h1 className="text-[#295E3E] font-medium sm:text-lg md:block hidden text-base leading-normal sm:leading-relaxed md:leading-loose">Get in Touch</h1>
                <div className="flex flex-col md:text-left text-center ">
                    <label className="text-[#4E5E6A] font-medium sm:text-sm text-xs" >Address:</label>
                    <p className="text-black font-medium sm:text-base text-sm  tracking-wide leading-relaxed  ">123,Green Avenue,<br/>Near City Center,<br/>Mumbai-400001, India</p>
                </div>
                <div className="flex flex-col md:text-left text-center">
                    <label className="text-[#4E5E6A] font-medium sm:text-sm text-xs" >Phone No:</label>
                    <p className="text-black font-medium sm:text-base text-sm leading-relaxed  ">+91 7886541230</p>
                </div>
                <div className="flex flex-col md:text-left text-center ">
                    <label className="text-[#4E5E6A] font-medium sm:text-base text-sm" >Email:</label>
                    <p className="text-black font-medium sm:text-sm text-xs leading-relaxed  ">info@grevoglobal.com</p>
                </div>
            </div>
        </div>
    );
};