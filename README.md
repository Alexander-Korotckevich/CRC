# crc-ts

Simple react component generator with TypeScript and Styled components.

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
crc-ts [component-name] [path]
```

- Default component name is `Component`.
- Default path value is `./src/components`.

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

## License

MIT © Alexander Korotkevich
