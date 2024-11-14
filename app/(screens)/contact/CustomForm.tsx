import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid2 } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Definir los tipos de datos del formulario
interface IFormInput {
  name: string;
  email?: string | null;
  phone_number?: string | null;
  message: string;
}

// Esquema de validación de Yup
const schema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  email: yup
    .string()
    .email('El correo no es válido')
    .nullable()
    .notRequired(),
  phone_number: yup
    .string()
    .matches(/^\d{10}$/, 'El teléfono debe tener 10 dígitos')
    .nullable()
    .notRequired(),
  message: yup.string().required('El mensaje es requerido'),
}).test('correo-o-telefono', 'Debe ingresar un correo electrónico o un teléfono', (values) => {
  return !!(values.email || values.phone_number); // Condición: al menos uno debe estar presente
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
                label="Correo Electrónico"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid2>

        {/* Campo de Teléfono (opcional) */}
        <Grid2 size={{ xs: 12 }}>
          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Teléfono"
                fullWidth
                error={!!errors.phone_number}
                helperText={errors.phone_number?.message}
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
