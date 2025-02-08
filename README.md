# AIO.ts

All-in-one TS Monorepo

## Getting Started

Create the container.

```bash
cd ./.devcontainer
docker compose up -d
```

Set up as the root user. See [aiots-root](./.devcontainer/bin/aiots-root) for `aiots-root` command details.

```bash
docker exec -it -u root aiots bash
aiots-root setup
```

Press Ctrl + D for exit container, and set up as the default user. See [aiots](./.devcontainer/bin/aiots) for `aiots` command details.

```bash
docker exec -it aiots bash
aiots setup
```

Let's start a dev server.

```bash
pnpm nuxt-sample dev
```

Access [http://localhost:3000](http://localhost:3000) with a browser.

## Daily Update Work

The philosophy of this repository is to keep all dependencies up to date. However, for Node.js, i specify version 22 because it is the LTS version and we are waiting for AWS Lambda to support it.

```bash
# after starting the container
docker exec -it -u root aiots bash
aiots-root update
# after pressing Ctrl + D to exit the container
docker exec -it aiots bash
aiots update
```

## Branch Management

See [Branch Management](./docs/branch-management.md) for details.
