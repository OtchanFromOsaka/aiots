# aiots

All-in-one Monorepo by TypeScript

## Getting Started

- create container

```bash
cd ./.devcontainer
docker compose up -d
```

- setup as root user
    - see `./.devcontainer/bin/aiots-root` for `aiots-root` command details

```bash
docker exec -it -u root node bash
aiots-root setup
```

- Ctrl + D for exit container, and setup as default user
    - see `./.devcontainer/bin/aiots` for `aiots` command details

```bash
docker exec -it node bash
aiots setup
```

- let's start a dev server

```bash
pnpm nuxt-sample dev
```

## Daily Update Work

```bash
# after starting the container
docker exec -it -u root node bash
aiots-root update
# Ctrl + D for exit container
docker exec -it node bash
aiots update
```

## Branch Management

see [Branch Management](./docs/branch-management.md)
