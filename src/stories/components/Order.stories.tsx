import { ComponentStory, ComponentMeta } from '@storybook/react';

import Order from '../../components/Order';

export default {
  title: 'Components/Order',
  component: Order,
} as ComponentMeta<typeof Order>;

const Template: ComponentStory<typeof Order> = args => <Order { ...args } />;

export const OrderStory = Template.bind({});
OrderStory.args = {
  order: {
    client: {
      firstName: 'Juan',
      lastName: 'Perez',
      company: 'Spartacos',
      email: 'juanperez@gmail.com',
      address: 'Calle Uruguay 500 Col. Universal',
      phone: '182 169 1002',
    },
    details: [
      {
        _id: '61b65e814848e3470a90f4c2',
        product: {
          name: 'Mochila para Laptop',
          price: 199.99
        },
        quantity: 5,
      },
      {
        _id: '61b65e814848e3470a90f4c3',
        product: {
          name: 'Memoria USB',
          price: 100.00
        },
        quantity: 2,
      }
    ],
    total: 1199.95,
    delivered: true,
  }
}
