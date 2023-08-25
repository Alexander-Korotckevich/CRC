# crc-ts

Simple react component generator with TypeScript and Styled components.

## Installation

With [npm](https://npmjs.org/) installed, run

```
npm install -g crc-ts
```

Then you can generate default directory with React component:

```
crc-ts
```

## API

```
crc-ts [component-name] [path]
```

### Example

`crc-ts ReactComponent ./src` will generate the following:

```
|-- /src
    |-- /ReactComponent
        |-- ReactComponent.tsx
        |-- index.ts
        |-- styles.ts
```

## License

MIT © Alexander Korotkevich
