import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/reset.css";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form``;
const Input = styled.input``;

const PutId = () => {
  return (
    <div>
      <Form>
        <Input type="text" id="name" placeholder="이름" />
        <Input
          type="number"
          id="birthdate"
          placeholder="970723"
          // value={userInfo.password}
          // onChange={handleInfoChange}
        />
        <Input type="number" id="phonenumber" placeholder="01022223333" />
      </Form>
    </div>
  );
};

export default PutId;
