import * as React from 'react';
import { UserType } from 'types';
import { useAuth } from '../../context/auth-context';
import {
  Box,
  ButtonPrimary,
  CircleOcticon,
  Flash,
  FormGroup,
  Heading,
  TextInput,
} from '@primer/components';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { HubotIcon } from '@primer/octicons-react';

export default function Login() {
  const { login, isLoading } = useAuth();

  return (
    <Layout>
      <Box mx="auto" width={340}>
        <Box as="header" display="flex" justifyContent="center" pt={5} pb={3}>
          <CircleOcticon
            icon={HubotIcon}
            size={60}
            sx={{
              bg: 'text.primary',
              color: 'text.inverse',
              '> svg': { width: '85%' },
            }}
          />
        </Box>

        <main>
          <form>
            <Heading
              as="h1"
              color="text.primary"
              textAlign="center"
              fontSize={4}
              fontWeight="normal"
              mb={3}
            >
              Sign in to Dashboard
            </Heading>

            <Flash
              sx={{
                color: 'text.primary',
                bg: 'bg.tertiary',
                borderColor: 'border.primary',
                p: 20,
              }}
            >
              <FormGroup sx={{ mt: 0 }}>
                <FormGroup.Label>Name</FormGroup.Label>
                <TextInput block />
              </FormGroup>

              <FormGroup>
                <FormGroup.Label>Role</FormGroup.Label>
                <RadioGroup>
                  <RadioInput label="Single User" name="role" />
                  <RadioInput label="Doctor" name="role" />
                </RadioGroup>
              </FormGroup>

              <ButtonPrimary
                display="block"
                mt={20}
                width="100%"
                onClick={() => login(UserType.SingleUser)}
                disabled={isLoading}
              >
                Sign in
              </ButtonPrimary>
            </Flash>
          </form>
        </main>
      </Box>
    </Layout>
  );
}

const RadioGroup = styled.div.attrs({
  className: 'radio-group',
})`
  > label {
    width: 50%;
  }
`;

interface RadioInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const RadioInput = ({ label, ...props }: RadioInputProps) => (
  <>
    <input className="radio-input" type="radio" {...props} />
    <label className="radio-label" htmlFor={props.id}>
      {label}
    </label>
  </>
);
