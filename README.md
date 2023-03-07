## NEXT + MUI boilerplate

First, install dependencies: **yarn**

Second, touch .env.local file in base directory and put some key in:

```
NEXT_PUBLIC_BASE_URL=https://api.unsplash.com/search/photos/
NEXT_PUBLIC_UNSPLASH=ALKGPqK6my4DdIAJk7FxS2OkMiPBpIlyfpvwVEdR3kc

```

Then run the development server: **yarn dev**

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```

### Set Up & Developing Rules

---

#### Set up

- **src tree**:

```
.
├── README.md                 # README file
├── next.config.js            # Next JS configuration
├── public                    # Public folder
│   └── images                # Image used by default template
│       └── png
│       └── jpg
│       └── svg
├── src
│   ├── components            # All app components, separate by modules, pages
│       ├── example           # Example components
│       │   └── Logo.tsx      # Logo components
│       │   └── ...           # others
│       │
│       └──  home             # Homepage components
│
│   ├── data                  # JSON file to render text, internal data files,...(naming & structure same components)
│   ├── layout                # Atomic layout component
│   ├── pages                 # Next JS pages
│   ├── services              # Separate logic modules, custom hooks,...(naming & structure same components)
│   ├── stores                # Zustand files (create store, interface, logic,...)
│   ├── styles                # Global & modules CSS files
│   ├── templates             # Default template
│   ├── types                 # Interfaces, class, generic,... (naming & structure same components)
│   └── utilities             # Utility folder (enums, utils modules,...)
├── tsconfig.json             # TypeScript configuration
├── Dockerfile                # Dockerfile
├── docker-compose.yml        # docker-compose configuration
└── ...                       # Other configuration files (prettier, ignore files,...)

```

- **\_app.tsx**: config theme, color, global rules for MUI, provider,...
- **\_document.tsx**: update the \<html\> and \<body\> tags used to render a page. This file is only rendered on the server.
- **endpoint.ts**: External link (endpoints api)
- **pageUrls.ts**: Internal link (for routing page to page)
- **useAxios.ts**: Custom Axios hooks

#### Developing Rules

- **debug**:
  - check eslint (remove unused,...)
  - check logs on browser
- **naming**:

  - files and folders -> camel case
  - files in pages (routing) -> kebab case
  - custom hooks, modules: [...].ts
  - pages + components: [...].tsx

- **format**: prettier [Format Code in VSCode](https://www.digitalocean.com/community/tutorials/code-formatting-with-prettier-in-visual-studio-code)
- **styling**: sx props [MUI - The sx prop](https://mui.com/system/getting-started/the-sx-prop/)
- **env**: dotenv ([Nextjs - Environment Variables](https://nextjs.org/docs/api-reference/next.config.js/environment-variables))

#### Library

- **Component UI**: [MUI](https://mui.com/)
- **State management**: [Zustand](https://github.com/pmndrs/zustand)
- **HTTP Client**: [Axios](https://github.com/axios/axios) (/src/utilities/api - Axios client with base config)

`
