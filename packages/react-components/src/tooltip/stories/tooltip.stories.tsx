import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../button';
import {
  TooltipProvider, Tooltip
} from '../tooltip';
import { Flex } from '../../flex';

export default {
  component: Tooltip,
  title: 'Tooltip',
  argTypes: {
    content: {
      control: 'text',
      defaultValue: 'Twigs tooltip text'
    },
    side: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
      defaultValue: 'top'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end']
    },
    sideOffset: {
      control: 'number'
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      defaultValue: 'sm'
    }
  }
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <TooltipProvider delayDuration={0}>
    <Flex
      css={{
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Tooltip
        open
        side="top"
        align="end"
        {...args}
      >
        <Button variant="default" size="lg">
          tooltip button
        </Button>
      </Tooltip>
    </Flex>
  </TooltipProvider>
);
export const Default = Template.bind({});