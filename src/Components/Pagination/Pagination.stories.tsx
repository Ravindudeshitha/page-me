
import { Meta, StoryFn } from "@storybook/react";
import Pagination from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Pagination {...args}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody className="test">
        <tr><td>Alice</td><td>25</td></tr>
        <tr><td>Bob</td><td>30</td></tr>
        <tr><td>Charlie</td><td>22</td></tr>
        <tr><td>David</td><td>28</td></tr>
        <tr><td>Emma</td><td>32</td></tr>
        <tr><td>Frank</td><td>27</td></tr>
        <tr><td>Grace</td><td>24</td></tr>
        <tr><td>Bob</td><td>30</td></tr>
        <tr style={{backgroundColor: "red"}}><td>Charlie</td><td>22</td></tr>
        <tr><td>David</td><td>28</td></tr>
        <tr><td>Emma</td><td>32</td></tr>
        <tr><td>Frank</td><td>27</td></tr>
        <tr><td>Grace</td><td>24</td></tr>
        <tr><td>Charlie</td><td>22</td></tr>
        <tr><td>David</td><td>28</td></tr>
        <tr><td>Emma</td><td>32</td></tr>
        <tr><td>Frank</td><td>27</td></tr>
        <tr><td>Grace</td><td>24</td></tr>
        <tr><td>Bob</td><td>30</td></tr>
        <tr><td>Charlie</td><td>22</td></tr>
        <tr><td>David</td><td>28</td></tr>
        <tr><td>Emma</td><td>32</td></tr>
        <tr><td>Frank</td><td>27</td></tr>
        <tr><td>Grace</td><td>24</td></tr>
      </tbody>
    </table>
  </Pagination>
);

export const Default = Template.bind({});
Default.args = {
  styleNumber : 3,

};
