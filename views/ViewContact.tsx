import { useState, ChangeEvent, FormEvent } from "react";
import Lottie from "lottie-react";
import emailjs from "emailjs-com";
import { contact } from "../public/lottie";
import { validateForm } from "../utils";

const emailService: string | undefined = process.env.NEXT_PUBLIC_EMAIL_SERVICE;
const emailTemplate: string | undefined =
  process.env.NEXT_PUBLIC_EMAIL_TEMPLATE;
const emailId: string | undefined = process.env.NEXT_PUBLIC_EMAIL_USERID;

const initialState = {
  userEmail: "",
  category: "Joel Yantorno - Contacto",
  emailDetails: "",
  userName: "",
};

export const ViewContact = (): JSX.Element => {
  const [values, setValues] = useState(initialState);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    option: string
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const validationResult = validateForm({ ...values, name: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [option]: validationResult.errors.name || "",
    }));
  };

  const handleUserEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValues((prevValues) => ({ ...prevValues, userEmail: value }));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userEmail: "El email debe tener un formato válido",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userEmail: "" }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const validationResult = validateForm(values);
    setErrors(validationResult.errors);

    if (
      Object.keys(validationResult.errors).length === 0 &&
      Object.keys(values.userEmail).length
    ) {
      if (emailService && emailTemplate && emailId) {
        return emailjs
          .send(emailService, emailTemplate, values, emailId)
          .then(() => {
            setValues(initialState);
            setShowMessage(true);
            setLoading(false);
          });
      }
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      userEmail: "Ingrese un email",
      userName: "Ingrese un usuario",
      emailDetails: "Ingrese un mensaje",
    }));
    setLoading(false);
  };

  return (
    <section
      className="mt-20 flex items-center justify-center lg:max-w-5xl xl:max-w-6xl mx-auto -z-10"
      id="contacto"
    >
      <article>
        <h2 className="font-bold capitalize text-step-1 mb-5">Contacto</h2>
        <p className="mb-5 text-step--1">
          Me interesa el desarrollo de software, la creación de aplicaciones web
          y móviles. Para contactarme no dudes en utilizar el formulario o
          através de linkedin
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="block w-full p-3 text-gray-400 mb-4 rounded-md text-step--1"
            style={{ backgroundColor: "rgb(31 41 55" }}
            type="text"
            placeholder="Nombre"
            name="userName"
            onChange={(e) => handleChange(e, "userName")}
            autoComplete="off"
            value={values.userName}
          />
          {errors.userName && (
            <p className="text-red-500 mb-4 text-sm">{errors.userName}</p>
          )}
          <input
            className="block w-full p-3 text-gray-400 mb-4 rounded-md text-step--1"
            style={{ backgroundColor: "rgb(31 41 55" }}
            type="email"
            placeholder="Correo electronico"
            name="userEmail"
            onChange={handleUserEmailChange}
            autoComplete="off"
            value={values.userEmail}
          />
          {errors.userEmail && (
            <p className="text-red-500 text-sm mb-4">{errors.userEmail}</p>
          )}
          <textarea
            placeholder="Mensaje"
            className="block w-full p-3 text-gray-400 mb-4 rounded-md resize-none h-36 text-step--1"
            style={{ backgroundColor: "rgb(31 41 55" }}
            name="emailDetails"
            onChange={(e) => handleChange(e, "emailDetails")}
            autoComplete="off"
            value={values.emailDetails}
          />
          {errors.emailDetails && (
            <p className="text-red-500 text-sm mb-4">{errors.emailDetails}</p>
          )}
          <div className="w-full flex justify-end">
            <button
              disabled={loading}
              className="border rounded-md py-2 px-3 text-step--1 border-gray-400 text-gray-400 font-bold disabled:border-gray-400 disabled:text-gray-400 hover:border-white hover:text-white transition-colors duration-300"
              type="submit"
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </div>
          {showMessage && (
            <span className="text-green-500 ">
              Gracias, su mensaje ha sido enviado con éxito.
            </span>
          )}
        </form>
      </article>
      <article className="hidden md:flex w-8/12 mx-auto relative">
        <Lottie animationData={contact} loop={true} />
      </article>
    </section>
  );
};
