import React, { useState } from "react";
import { Layout } from "../../layout/Layout";
import { Box, Button, Input, Text, Textarea } from "@chakra-ui/react";

export const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const initialErrors = {
    name: "",
    email: "",
    message: "",
  };
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (values.name.length < 3) {
      setErrors({
        name: "El campo nombre debe tener un mínimo de 3 caracteres",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setErrors({
          name: "",
          email: "",
          message: "",
        });
      }, 4000);

      return;
    }

    if (!emailRegex.test(values.email)) {
      setErrors({
        name: "",
        email: "Debe escribir una dirección de correo valida",
        message: "",
      });

      setTimeout(() => {
        setErrors({
          name: "",
          email: "",
          message: "",
        });
      }, 4000);

      return;
    }

    if (values.message === "") {
      setErrors({
        name: "",
        email: "",
        message: "No puede enviar un mensaje en blanco",
      });

      setTimeout(() => {
        setErrors({
          name: "",
          email: "",
          message: "",
        });
      }, 4000);

      return;
    }

    try {
      const send = await fetch(
        "https://formsubmit.co/ajax/ing.pulido.abrahan@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        }
      );

      const res = await send.json();

      setValues(initialForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          bg: "hsl(240, 2%, 12%)",
          margin: "0 auto",
          borderRadius: 20,
          transition: "0.5s ease-in-out",
          border: "1px solid hsl(227, 100%, 56%);",
          padding: "13px",
          mb: "1rem",

          "@media (min-width: 800px)": {
            minH: "95vh",
            width: "100%",
          },
        }}
      >
        <Box>
          <Text
            sx={{
              fontSize: "25px",
              color: "white",
              fontWeight: "bold",

              "@media (min-width: 1100px)": {
                fontSize: "30px",
              },
            }}
          >
            Contáctame 
          </Text>
          <Box
            sx={{
              width: "40px",
              height: "5px",
              bg: "primary",
              borderRadius: 20,
              mb: "1rem",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            "@media (min-width: 800px)": {
              display: "flex",
              justifyContent: "center",
              minHeight: "80vh",
              flexDirection: "column",

              "@media (min-width: 1100px)": {
                width: "80%",
                margin: "0 auto",
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Input
              sx={{
                width: "95%",
                bg: "transparent",
                border: "1px solid hsl(227, 100%, 56%);",
                margin: "1rem auto",
                borderRadius: 10,
                padding: ".7rem",
                fontSize: ".9em",
                outline: "none",
              }}
              autoComplete="off"
              placeholder="Nombre y Apellido"
              _placeholder={{ color: "lightGrey" }}
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name.length > 0 && (
              <Text
                sx={{
                  fontSize: ".9em",
                  textAlign: "center",
                  mb: ".5rem",
                  color: "primary",
                }}
              >
                {errors.name}
              </Text>
            )}

            <Input
              sx={{
                width: "95%",
                bg: "transparent",
                border: "1px solid hsl(227, 100%, 56%);",
                margin: "0 auto",
                borderRadius: 10,
                padding: ".7rem",
                fontSize: ".9em",
                outline: "none",
              }}
              placeholder="Email"
              _placeholder={{ color: "lightGrey" }}
              name="email"
              type="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
            />

            {errors.email.length > 0 && (
              <Text
                sx={{
                  fontSize: ".9em",
                  textAlign: "center",
                  mt: ".5rem",

                  color: "primary",
                }}
              >
                {errors.email}
              </Text>
            )}
          </Box>

          <Box
            sx={{
              m: "1rem 0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Textarea
              sx={{
                width: "95%",
                m: "0 auto",
                bg: "transparent",
                border: "1px solid hsl(227, 100%, 56%);",
                borderRadius: 10,
                padding: ".8rem",
                height: "150px",
                color: "white",
                fontSize: ".9em",
                outline: "none",
              }}
              placeholder="Tu mensaje"
              _placeholder={{ color: "lightGrey" }}
              resize="none"
              name="message"
              value={values.message}
              onChange={handleChange}
            />
          </Box>
          {errors.message.length > 0 && (
            <Text
              sx={{
                fontSize: ".9em",
                textAlign: "center",
                mb: ".5rem",
                color: "primary",
              }}
            >
              {errors.message}
            </Text>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem auto",
              "@media (min-width: 800px)": {
                width: "100%",
                justifyContent: "end",
              },
            }}
          >
            <Button
              sx={{
                width: "95%",
                margin: "0 auto",
                bgGradient:
                  "linear-gradient( to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100% )",
                color: "primary",
                borderRadius: 10,
                padding: ".5rem",
                border: "1px solid hsl(227, 100%, 56%);",
                fontWeight: "bold",
                fontSize: "1.2em",
                gap: "15px",

                "@media (min-width: 800px)": {
                  width: "50%",
                  maxW: "500px",
                  margin: "0 1rem",
                },
              }}
              onClick={handleSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-send"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#1F51FF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              <Text>Enviar mensaje</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
