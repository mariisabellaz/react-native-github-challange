type Colors = {
  primary: string;
  background: {gray: string; white: string};
  border: string;
  skeleton: string;
  button: {
    primary: string;
    secondary: string;
    icon: string;
  };
  text: {
    slogan: string;
    primary: string;
    secondary: string;
    light: string;
    error: string;
  };
};

export const colors: Colors = {
  primary: '#FF5100',
  background: {
    gray: '#F8F8F8',
    white: '#FFFFFF',
  },
  skeleton: '#D9D9D9',
  border: '#E5E5E5',
  button: {
    primary: '#131313',
    secondary: '#FF5100',
    icon: '#E8E8E8',
  },
  text: {
    slogan: '#1D1D21',
    primary: '#000000',
    secondary: '#7E7E7E',
    light: '#FFFFFF',
    error: '#FF5100',
  },
};
