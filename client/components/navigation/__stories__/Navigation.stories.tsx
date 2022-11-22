import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navigation from "../Navigation";
import NavigationData from "../NavigationData";

export default {
    title: "Components/Navigation",
    component: Navigation,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = () => <Navigation navLinks={NavigationData.links} />;

export const Basic = Template.bind({});
