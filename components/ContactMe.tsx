import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function ContactMe({}: Props) {
  //state of 0 for not submitted, 1 for submitted, 2 for otherwise for error
  const [submitted, setSubmitted] = useState(0);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      await fetch("api/sendgrid", {
        method: "post",
        body: JSON.stringify(formData),
      }).then((response) => {
        console.log(response);
        setSubmitted(1);
      });
    } catch (error) {
      //error code here
      setSubmitted(2);
    }
  };

  return (
    <div className="h-screen pt-20 overflow-hidden">
      {" "}
      <h3 className="sectionHeading ">Contact</h3>
      <div className="flex  flex-col items-center justify-start h-[calc(100vh_-_8rem)] space-y-10 text-center md:text-left max-w-7xl px-10 mx-auto">
        <div className="pt-8 flex flex-col items-center justify-evenly space-y-5 2xl:space-y-10 w-full">
          <h4 className="text-lg sm:text-2xl 2xl:text-4xl font-semibold text-center ">
            Feel free to ask me anything!
          </h4>
          <div className="flex items-center space-x-2 sm:space-x-5 justify-center">
            <EnvelopeIcon className="w-5 h-5 sm:w-7 sm:h-7 animate-pulse text-[#FFE55C]" />
            <p className="text-sm sm:text-xl 2xl:text-2xl">
              arifa6@mcmaster.ca
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[85vw] flex flex-col space-y-2 sm:max-w-full sm:w-fit mx-auto "
        >
          <div className="flex space-x-0 flex-col space-y-2 sm:space-x-2 sm:flex-row sm:space-y-0">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
            required
          ></textarea>
          <button
            disabled={submitted != 0}
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            {submitted === 0
              ? "Submit"
              : submitted === 1
              ? "Form submitted"
              : "Error, please try again later"}
          </button>
        </form>
      </div>
    </div>
  );
}
