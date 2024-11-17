"use client";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid2 } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Definir los tipos de datos del formulario
interface IFormInput {
  name: string;
  email: string;
  message: string;
}

// Esquema de validación de Yup
const schema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  email: yup
    .string()
    .required('El correo es requerido')
    .email('El correo no es válido'),
  message: yup.string().required('El mensaje es requerido'),
});

const CustomForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInput) => {
    console.log('Datos enviados:', data);
    //todo: clear form
  };

  return (
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
                variant='filled'
                label="Nombre"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid2>

        {/* Campo de Correo Electrónico (opcional) */}
        <Grid2 size={{ xs: 12 }}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                size="small"
                variant='filled'
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
                variant='filled'
                label="Mensaje"
                fullWidth
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            )}
          />
        </Grid2>

        {/* Botón de Enviar */}
        <Grid2 size={{ xs: 12 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>
        </Grid2>
      </Grid2>
    </form>
  );
};

export default CustomForm;
