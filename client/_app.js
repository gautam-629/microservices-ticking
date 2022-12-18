import 'bootstrap/dist/css/bootstrap.css';
const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default AppComponent;
