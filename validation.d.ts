interface Asserts {
    name: NameValidation;
    email: EmailValidation;
    passwords: PasswordValidation;
    textarea: TextAreaValidation;
  }

  interface NameValidation {
    firstName: {
      required: {
        value: boolean;
        message: string;
      };
      minLength: {
        value: number;
        message: (minLength: number) => string;
      };
      maxLength: {
        value: number;
        message: (maxLength: number) => string;
      };
      pattern: {
        value: RegExp;
        message: string;
      };
    };
    lastName: {
      required: {
        value: boolean;
        message: string;
      };
      minLength: {
        value: number;
        message: (minLength: number) => string;
      };
      maxLength: {
        value: number;
        message: (maxLength: number) => string;
      };
      pattern: {
        value: RegExp;
        message: string;
      };
    };
  }

  interface EmailValidation {
    required: {
      value: boolean;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  }

  interface PasswordValidation {
    password: {
      required: {
        value: boolean;
        message: string;
      };
      minLength: {
        value: number;
        message: (minLength:number) => string;
      };
      maxLength: {
        value: number;
        message: (maxLength:number) => string;
      };
    };
    passwordConfirm: {
      required: {
        value: boolean;
        message: string;
      };
      minLength: {
        value: number;
        message: (minLength:number) => string;
      };
      maxLength: {
        value: number;
        message: (maxLength:number) => string;
      };
    };
  }
  interface TextAreaValidation {
    required: {
      value: boolean;
      message: string;
    };
    minLength: {
      value: number;
      message: (minLength: number) => string;
    };
    maxLength: {
      value: number;
      message: (maxLength: number) => string;
    };
  }