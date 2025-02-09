"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Typography, Grid2 } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendEmail } from "./services/emailService";
import AnimatedText from "@/app/components/Animated/AnimatedText";

// Definir los tipos de datos del formulario
interface IFormInput {
  name: string;
  email: string;
  message: string;
}

// Esquema de validación de Yup
const schema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  email: yup
    .string()
    .required("El correo es requerido")
    .email("El correo no es válido"),
  message: yup.string().required("El mensaje es requerido"),
});

const CustomForm: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string>(""); // Para mostrar el estado
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Para deshabilitar el botón mientras se envía

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInput) => {
    setIsSubmitting(true); // Deshabilitar botón de enviar
    setStatusMessage(""); // Resetear el mensaje de estado

    try {
      // Llama al servicio tipado `sendEmail` con los datos del formulario
      const response = await sendEmail({
        email: "csingenierias.ventas.00@gmail.com", // Correo de destino
        subject: `Sitio web - ${data.name} - ${data.email}`, // Asunto con nombre del remitente
        message: data.message, // Mensaje del formulario
      });

      // Maneja la respuesta según el estado de éxito o error
      if (response.success) {
        setStatusMessage("Correo enviado exitosamente.");
        reset({ message: `Hola, estaba viendo los proyectos de su página, me interesó cotizar (ingresé nombre o asunto del proyecto de su interés):` });
        setValue("message", `Hola, estaba viendo los proyectos de su página, me interesó cotizar (ingresé nombre o asunto del proyecto de su interés):`);
        setValue("email", "");
        setValue("name", "");
      } else {
        setStatusMessage(`Error: ${response.message}`);
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setStatusMessage("Ocurrió un error al intentar enviar el correo.");
    } finally {
      setIsSubmitting(false); // Rehabilita el botón de enviar
    }
  };

  useEffect(() => {
    setValue("message", `Hola, estaba viendo los proyectos de su página, me interesó cotizar (ingresé nombre o asunto del proyecto de su interés):`);
    reset({ message: `Hola, estaba viendo los proyectos de su página, me interesó cotizar (ingresé nombre o asunto del proyecto de su interés):` });
  }, []);

  return (
    <AnimatedText direction="right">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2}>
          {/* Campo de Nombre */}
          <Grid2 size={{ xs: 12 }}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="filled"
                  label="Nombre"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid2>

          {/* Campo de Correo Electrónico */}
          <Grid2 size={{ xs: 12 }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="filled"
                  label="Correo Electrónico"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid2>

          {/* Campo de Mensaje */}
          <Grid2 size={{ xs: 12 }}>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="filled"
                  label="Mensaje"
                  fullWidth
                  multiline
                  rows={4}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
              )}
            />
          </Grid2>

          {/* Botón de Enviar */}
          <Grid2 size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting} // Deshabilitar mientras se envía
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </Grid2>

          {/* Mensaje de estado */}
          {statusMessage && (
            <Grid2 size={{ xs: 12 }}>
              <Typography
                variant="body2"
                color={statusMessage.includes("Error") ? "error" : "success"}
              >
                {statusMessage}
              </Typography>
            </Grid2>
          )}
        </Grid2>
      </form>
    </AnimatedText>
  );
};

export default CustomForm;
