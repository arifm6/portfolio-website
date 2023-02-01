import React from "react";
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
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

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
          ></textarea>
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
