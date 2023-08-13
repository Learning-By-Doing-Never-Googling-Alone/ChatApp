import { createServer } from "miragejs";
import Server1 from './assets/images/Server-1.png';
import Server2 from './assets/images/Server-2.png';
import ServerIcon1 from './assets/images/Server-Icon-1.png';
import Server3 from './assets/images/Server.png';

export const Server = () => {
  createServer({
    routes() {
      this.namespace = "api";
      this.get(
        "/movies",
        () => {
          return {
            navigation: [
              {
                name: "server-1",
                icon: {Server2},
              },
              {
                name: "server-2",
                icon: {Server1},
              },
              {
                name: "server-3",
                icon: {Server3},
              },
              {
                name: "server-4",
                icon: {ServerIcon1},
              },
            ],
          };
        },
        { timing: 4000 }
      );
    },
  });
};
