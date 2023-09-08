# crc-ts

Simple react component generator with TypeScript and Styled components(by default). Also supported CSS, SASS/SCSS, LESS, STYLUS.

## Installation

With [npm](https://npmjs.org/) installed, run

```
npm install -g crc-ts
```

Then you can generate React component:

```
crc-ts ReactComponentName
```

## API

```
crc-ts [component-name] [path] [--styles]
```

- Default component name is `Component`.
- Default path value is `./src/components`.
- Default styles flag is `--styled`. Available flags:
    - `--styled`
    - `--sass`
    - `--scss`
    - `--css`
    - `--less`
    - `--stylus`


### Example
Result of `crc-ts`:

```
|-- /src
    |--/components
        |-- /Component
            |-- Component.tsx
            |-- index.ts
            |-- styles.ts
```

Result of `crc-ts ExampleComponentName`:

```
|-- /src
    |--/components
        |-- /ExampleComponentName
            |-- ExampleComponentName.tsx
            |-- index.ts
            |-- styles.ts
```

Result of `crc-ts ExampleComponentName ./src/example` will generate the following:

```
|-- /src
    |--/example
        |-- /ExampleComponentName
            |-- ExampleComponentName.tsx
            |-- index.ts
            |-- styles.ts
```
Result of `crc-ts ExampleComponentName ./src/example --scss` will generate the following:

```
|-- /src
    |--/example
        |-- /ExampleComponentName
            |-- ExampleComponentName.tsx
            |-- index.ts
            |-- examplecomponentname.module.scss
```

Result of `crc-ts ExampleComponentName ./src/example --css` will generate the following:

```
|-- /src
    |--/example
        |-- /ExampleComponentName
            |-- ExampleComponentName.tsx
            |-- index.ts
            |-- examplecomponentname.css
```

## License

MIT © Alexander Korotkevich
