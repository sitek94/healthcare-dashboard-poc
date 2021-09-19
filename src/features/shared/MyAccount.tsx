import * as React from 'react';
import { Box, ButtonPrimary, FormGroup, TextInput } from '@primer/components';

export default function MyAccount() {
  return (
    <div className="markdown-body">
      <h1>My Account</h1>

      <Box sx={{ maxWidth: '360px' }}>
        <FormGroup>
          <FormGroup.Label htmlFor="firstName">First Name</FormGroup.Label>
          <TextInput id="firstName" type="text" block contrast />
        </FormGroup>
        <FormGroup>
          <FormGroup.Label htmlFor="lastName">Last Name</FormGroup.Label>
          <TextInput id="lastName" type="text" block contrast />
        </FormGroup>
      </Box>

      <ButtonPrimary>Save</ButtonPrimary>
    </div>
  );
}
