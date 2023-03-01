/**
 * @description
 * This file contains all the form validation rules
 * for the form in the components/FormBackground.tsx
 * component.
 */

const requiredErrorMessage = "Ce champs est obligatoire";
const namePattern = /^[a-zA-Z\-]+$/;
const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const formValidations: Asserts = {
  name: {
    firstName: {
      required: {
        value: true,
        message: requiredErrorMessage,
      },
      minLength: {
        value: 2,
        message: (minLength: number) =>
          `Ce champs doit faire minimum ${minLength} caractères`,
      },
      maxLength: {
        value: 25,
        message: (maxLength: number) =>
          `Ce champs doit faire maximum ${maxLength} caractères`,
      },
      pattern: {
        value: namePattern,
        message:
          "Ce champs ne doit contenir que des lettres et tirets",
      },
    },
    lastName: {
      required: {
        value: true,
        message: requiredErrorMessage,
      },
      minLength: {
        value: 2,
        message: (minLength: number) =>
          `Ce champs doit faire minimum ${minLength} caractères`,
      },
      maxLength: {
        value: 25,
        message: (maxLength: number) =>
          `Ce champs doit faire maximum ${maxLength} caractères`,
      },
      pattern: {
        value: namePattern,
        message: "Ce champs ne doit contenir que des lettres",
      },
    },
  },
  email: {
    required: {
      value: true,
      message: requiredErrorMessage,
    },
    pattern: {
      value: emailPattern,
      message: "Le format d'adresse mail est incorrect",
    },
  },
  passwords: {
    password: {
      required: {
        value: true,
        message: requiredErrorMessage,
      },
      minLength: {
        value: 6,
        message: (minLength: number) =>
          `Ce champs doit faire minimum ${minLength} caractères`,
      },
      maxLength: {
        value: 25,
        message: (maxLength: number) =>
          `Ce champs doit faire maximum ${maxLength} caractères`,
      },
    },
    passwordConfirm: {
      required: {
        value: true,
        message: requiredErrorMessage,
      },
      minLength: {
        value: 6,
        message: (minLength: number) =>
          `Ce champs doit faire minimum ${minLength} caractères`,
      },
      maxLength: {
        value: 25,
        message: (maxLength: number) =>
          `Ce champs doit faire maximum ${maxLength} caractères`,
      },
    },
  },
  textarea: {
    required: {
      value: true,
      message: requiredErrorMessage,
    },
    minLength: {
      value: 6,
      message: (minLength: number) =>
        `Ce champs doit faire minimum ${minLength} caractères`,
    },
    maxLength: {
      value: 500,
      message: (maxLength: number) =>
        `Ce champs doit faire maximum ${maxLength} caractères`,
    },
  },
};
