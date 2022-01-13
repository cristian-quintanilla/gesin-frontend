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
    _id: 'order-1',
    client: {
      _id: '61b65e814848e3470a90f4c1',
      firstName: 'Juan',
      lastName: 'Perez',
      company: 'Spartacos',
      email: 'juanperez@gmail.com',
      address: 'Calle Uruguay 500 Col. Universal',
      phone: '182 169 1002',
      status: true,
      __v: 0,
    },
    details: [
      {
        _id: '61b65e814848e3470a90f4c2',
        product: {
          _id: 'product-1',
          name: 'Mochila para Laptop',
          price: 199.99
        },
        quantity: 5,
      },
      {
        _id: '61b65e814848e3470a90f4c3',
        product: {
          _id: 'product-2',
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
