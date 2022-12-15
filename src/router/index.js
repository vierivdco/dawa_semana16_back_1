import { MovieRouter, TestRouter } from "../components";

// cada vez que quiera agregar una ruta nueva,
// creo el path e importo el componente
const listRoutes = [
  ["/test", TestRouter],
  ["/movie", MovieRouter]
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
