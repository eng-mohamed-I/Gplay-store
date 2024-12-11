import React, { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';
import { FormControl, SelectChangeEvent, InputLabel, Select, MenuItem, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from 'src/validators/validation-schema';
import { handleSignUpService } from 'src/services/auth-services';
import { getErrorMessages } from 'src/utils/get-errors';
// ----------------------------------------------------------------------

export type SignUpProps = {
  name: string;
  email: string;
  role: string;
  password: string;
  password_confirmation: string;
};

export function SignUpView() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      role: 'buyer',
    },
  });

  const selectedRole = watch('role');

  const handleRoleChange = (event: SelectChangeEvent) => {
    setValue('role', event.target.value);
  };

  const handleSignUp = async (data: SignUpProps) => {
    setLoading(true);
    try {
      console.log('Form data:', data);
      // api call
      const response = await handleSignUpService(data);
      setLoading(false);
      setErrorMessage('');
      setSuccessMessage('Register successfully');
    } catch (error) {
      setLoading(false);
      setSuccessMessage('');
      setErrorMessage(getErrorMessages(error));
    } finally {
      setLoading(false);
    }
  };

  // const handleSignUp = useCallback(() => {
  //   // router.push('/sign-in');
  //   console.log(name, email, password, role);
  // });

  const renderForm = (
    <Box
      component="form"
      onSubmit={handleSubmit(handleSignUp)}
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
    >
      {errorMessage ? (
        <Alert sx={{ mb: 1 }} severity="error">
          {errorMessage}
        </Alert>
      ) : (
        successMessage && (
          <Alert sx={{ mb: 1 }} severity="success">
            {successMessage}
          </Alert>
        )
      )}

      <TextField
        fullWidth
        {...register('name')}
        name="name"
        error={!!errors.name}
        helperText={errors.name?.message}
        label="Full name"
        placeholder="Full name"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        {...register('email')}
        name="email"
        error={!!errors.email}
        helperText={errors.email?.message}
        label="Email address"
        placeholder="Email address"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />

      <FormControl fullWidth sx={{ mb: 3 }} error={!!errors.role}>
        <InputLabel id="role-label">Looking for</InputLabel>
        <Select
          value={selectedRole}
          onChange={handleRoleChange}
          labelId="role-label"
          id="role"
          label="Looking for"
        >
          <MenuItem value="buyer">Buy account</MenuItem>
          <MenuItem value="seller">Sell account</MenuItem>
          <MenuItem value="broker">Be a broker</MenuItem>
          <MenuItem value="resller">Be a reseller</MenuItem>
        </Select>
        <Typography variant="caption" color="error">
          {errors.role?.message}
        </Typography>
      </FormControl>

      <TextField
        fullWidth
        {...register('password')}
        name="password"
        error={!!errors.password}
        helperText={errors.password?.message}
        label="Password"
        placeholder="Password"
        InputLabelProps={{ shrink: true }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        {...register('password_confirmation')}
        name="password_confirmation"
        error={!!errors.password_confirmation}
        helperText={errors.password_confirmation?.message}
        label="Confirm password"
        placeholder="Confirm password"
        InputLabelProps={{ shrink: true }}
        type={showRePassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowRePassword(!showRePassword)} edge="end">
                <Iconify icon={showRePassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <LoadingButton
        loading={loading}
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
      >
        Sign up
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Create a new account</Typography>
      </Box>

      {renderForm}

      <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
        {/* <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
        >
          OR
        </Typography> */}
      </Divider>

      <Box gap={1} display="flex" justifyContent="center">
        <Typography variant="body2" color="text.secondary">
          Do You have an account?
          <Link href="/sign-in" variant="subtitle2" sx={{ ml: 0.5 }}>
            Sign in
          </Link>
        </Typography>
        {/* <IconButton color="inherit">
          <Iconify icon="logos:google-icon" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="eva:github-fill" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="ri:twitter-x-fill" />
        </IconButton> */}
      </Box>
    </>
  );
}
