System.config({
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    //map tells the System loader where to look for things
    map: {
        app: "sites/all/modules/custom/angular2RouterInDrupal/src"
    },
    //packages defines our app package
    packages: {
        app: {
            main: 'sites/all/modules/custom/angular2RouterInDrupal/src/main.ts',
            defaultExtension: 'ts'
        }
    }
});