System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },
    packages: {'app': {defaultExtension: 'ts'}}
});
System.import('sites/all/modules/custom/groupdropbox/app/boot.ts')
    .then(null, console.error.bind(console));
