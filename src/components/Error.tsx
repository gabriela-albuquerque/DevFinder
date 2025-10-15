type ErrorProps = {
  error: string;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <div>
      <p>Desculpe, ocorreu um erro:</p>
      <p>{error}</p>
    </div>
  );
};

export default Error;
