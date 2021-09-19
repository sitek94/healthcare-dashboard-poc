import * as React from 'react';
import styled from 'styled-components';
import {
  Box,
  ButtonClose,
  ButtonPrimary,
  CircleOcticon,
  Flash,
  FormGroup,
  Heading,
  Link,
  Text,
  TextInput,
} from '@primer/components';
import { HubotIcon } from '@primer/octicons-react';

import config from 'config';
import { UserRole } from 'types';
import { useAuth } from 'context/auth-context';
import Layout from 'components/Layout';

export default function Login() {
  const { login, isLoading, error, clearError } = useAuth();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      role: { value: UserRole };
    };

    const name = target.name.value;
    const role = target.role.value;

    login(name, role);
  }

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
          <form onSubmit={handleSubmit}>
            <Heading
              as="h1"
              color="text.primary"
              textAlign="center"
              fontSize={4}
              fontWeight={300}
              mb={3}
            >
              Sign in to Dashboard
            </Heading>

            {error && (
              <Flash variant="danger" my={3}>
                <Box mx={2}>
                  <Text color="text.primary">{error.message}</Text>
                  <ButtonClose onClick={clearError} sx={{ float: 'right' }} />
                </Box>
              </Flash>
            )}

            <Flash
              sx={{
                color: 'text.primary',
                bg: 'bg.tertiary',
                borderColor: 'border.secondary',
                p: 20,
              }}
            >
              <FormGroup mt={0}>
                <FormGroup.Label htmlFor="firstName">Name</FormGroup.Label>
                <TextInput id="name" name="name" type="text" block contrast />
              </FormGroup>

              <FormGroup>
                <FormGroup.Label>Role</FormGroup.Label>
                <RadioGroup>
                  <RadioInput
                    name="role"
                    label="Single User"
                    id={UserRole.SingleUser}
                    value={UserRole.SingleUser}
                    defaultChecked
                  />
                  <RadioInput
                    name="role"
                    label="Doctor"
                    id={UserRole.Doctor}
                    value={UserRole.Doctor}
                  />
                </RadioGroup>
              </FormGroup>

              <ButtonPrimary
                type="submit"
                disabled={isLoading}
                width="100%"
                display="block"
                mt={20}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </ButtonPrimary>
            </Flash>
          </form>
        </main>

        <Flash
          as="footer"
          sx={{
            mt: 3,
            textAlign: 'center',
            borderColor: 'border.primary',
            color: 'text.primary',
            bg: 'bg.primary',
          }}
        >
          Want to learn more?&nbsp;
          <Link href={config.repo.url}>Check the code</Link>.
        </Flash>
      </Box>
    </Layout>
  );
}

const RadioGroup = styled.div.attrs({
  className: 'radio-group color-bg-primary',
})`
  > label {
    width: 50%;
  }
`;

interface RadioInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

function RadioInput({ label, ...props }: RadioInputProps) {
  return (
    <>
      <input className="radio-input" type="radio" {...props} />
      <label className="radio-label " htmlFor={props.id}>
        {label}
      </label>
    </>
  );
}
