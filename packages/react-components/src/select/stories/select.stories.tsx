import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { SearchIcon } from '@sparrowengg/twigs-react-icons';
import { Select } from '../select';

export default {
  component: Select,
  title: 'Select',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm'
    },
    isMulti: {
      control: 'boolean',
      defaultValue: false
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Select>;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const Template = (args) => (
  <Select
    {...args}
    options={options}
    dropdownIndicatorIcon={<SearchIcon />}
  />
);
export const Default = Template.bind({});