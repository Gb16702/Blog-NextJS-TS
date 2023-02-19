/**
 * @description
 * This file contains all the form validation rules
 * for the form in the components/FormBackground.tsx
 * component.
 */


const requiredErrorMessage = "Ce champs est obligatoire"
const namePattern = /^[a-zA-Z\-]+$/
const emailPattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const formValidations: Asserts = {
  name: {
    firstName: {
      required: {
        value: true,
        message: requiredErrorMessage,
      },
      minLength: {
        value: 5,
        message: (minLength: number) =>
          `Le prénom doit contenir au moins ${minLength} caractères`,
      },
      maxLength: {
        value: 25,
        message: (maxLength: number) =>
          `Le prénom doit contenir au plus ${maxLength} caractères`,
      },
      pattern: {
        value: namePattern,
        message: "Le prénom ne doit contenir que des lettres",
      },
    },
    lastName: {
      required: {
        value: true,
        message: requiredErrorMessage,
      },
      minLength: {
        value: 3,
        message: (minLength: number) =>
          `Le prénom doit contenir au moins ${minLength} caractères`,
      },
      maxLength: {
        value: 25,
        message: (maxLength: number) =>
          `Le nom doit contenir au plus ${maxLength} caractères`,
      },
      pattern: {
        value: namePattern,
        message: "Le prénom ne doit contenir que des lettres",
      },
    },
  },
  email: {
    required: {
      value: true,
      message: requiredErrorMessage,
    },
    pattern: {
      value:
      emailPattern,
      message: "Adresse email invalide",
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
        message:
          "Le mot de passe doit contenir au moins 6 caractères",
      },
      maxLength: {
        value: 25,
        message:
          "Le mot de passe doit contenir au plus 25 caractères",
      },
    },
    passwordConfirm: {
      required: {
        value: true,
        message: requiredErrorMessage,
      },
      minLength: {
        value: 6,
        message:
          "Le mot de passe doit contenir au moins 6 caractères",
      },
      maxLength: {
        value: 25,
        message:
          "Le mot de passe doit contenir au plus 25 caractères",
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
      message: "Le message doit contenir au moins 6 caractères",
    },
    maxLength: {
      value: 500,
      message: "Le message doit contenir au plus 500 caractères",
    },
  },
};
