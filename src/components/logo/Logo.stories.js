import { QiskitLogo } from "./";

export default {
  title: "Components/QiskitLogo",
  component: QiskitLogo,
  argTypes: {},
};

const Template = (args) => ({
  components: { QiskitLogo },
  setup() {
    return { args };
  },
  template: '<q-logo v-bind="args" />',
});

export const Standard = Template.bind({});
Standard.args = {};
