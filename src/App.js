import MainLayout from "./layout/MainLayout";
import PagesRouter from "./router/pagesRouter";

import './scss/app.module.scss';

function App() {
  return (
    <MainLayout>
      <PagesRouter />
    </MainLayout>
  );
}

export default App;
