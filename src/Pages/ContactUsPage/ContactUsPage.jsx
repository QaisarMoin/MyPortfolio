import React from "react";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c6365fd5-299c-486a-8270-61a893b480d2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      className="text-white relative top-10 lg:w-screen md:px-0 max-w-screen
       overflow-hidden py-10
   flex justify-center items-center min-h-screen  md:min-w-[735px] "
    >
      <div
        className={`flex lg:w-[1124px] md:min-w-[785px] lg:gap-2 items-center
         min-w-[320px] -mt-5
        lg:min-w-[1024px] md:flex-col flex-col justify-center md:items-center`}
      >
        {/* Title Banner */}
        <div
          className={`w-fit flex flex-col leading-tight md:min-w-[325px] 
          md:w-full min-w-full  py-2 font-[font7] text-[#0066cc] `}
        >
          <span className=" lg:text-[98px] md:text-[90px] text-[70px]  w-fit text-left ">
            GET IN
          </span>
          <span
            className=" lg:text-[98px] md:text-[90px] text-[70px] md:w-fit lg:ml-44
           text-right md:ml-20 ml-16 text-[#f56300]"
          >
            TOUCH
          </span>
        </div>

        {/* Form Starts */}
        <form
          onSubmit={onSubmit}
          className="md:py-14 md:px-9 px-5 w-fit  flex flex-col rounded-xl lg:py-10
         gap-5 md:ml-5 form_shadow bg-[#424245] py-10 min-w-[320px]"
        >
          {/* Name Input */}
          <div className=" flex gap-5 items-center p-2">
            <label htmlFor="name" className="font-[font4]">
              Name
            </label>
            <input
              type="text"
              required={true}
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="outline-none bg-transparent border-b-2 w-full
               min-w-[200px] text-right font-[font7] text-lg"
            />
          </div>

          {/* Email Input */}
          <div className=" flex gap-5 items-center p-2  ">
            <label htmlFor="email" className="font-[font4]">
              Email
            </label>
            <input
              type="text"
              required={true}
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="outline-none bg-transparent border-b-2 w-full
              text-right min-w-[200px] font-[font7] text-lg "
            />
          </div>

          {/* Message TextArea */}
          <div className="p-2">
            <label htmlFor="message"></label>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              required={true}
              placeholder="Write Your Message Here"
              className="bg-transparent border-b-2 outline-none p-2 w-full
               min-w-[200px] size-fit font-[font7] text-lg text-[#f56300] "
            ></textarea>
          </div>

          <div className="p-3 ">
            <button
              type="submit"
              className=" w-1/2 p-2 rounded-lg border  button_bg "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
