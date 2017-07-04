# seasnake-cli

A cli wrapper for seasnake

## installation

### global
```bash
$ npm install -g seasnake-cli
```

### local

```bash
$ npm install seasnake
```

## usage

### global vs local

If you have installed seasnake globally you can just use the `seasnake` path. Otherwise, you will either need to run it 
from an npm script or use it with the path to node modules: `node_modules/.bin/seasnake`.

### export

```bash
$ seasnake dockercomposeprefix_volumename backup.tar
```

```bash
$ seasnake -e dockercomposeprefix_volumename backup.tar
```


```bash
$ seasnake --export dockercomposeprefix_volumename backup.tar
```

### import 

```bash
$ seasnake -i dockercomposeprefix_volumename backup.tar
```


```bash
$ seasnake --import dockercomposeprefix_volumename backup.tar
```
