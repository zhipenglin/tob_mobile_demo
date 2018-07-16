const _glob=require('glob'),
    fs=require('fs-extra'),
    path=require('path'),
    Px2rem = require('px2rem'),
    glob = (src) => new Promise((resolve, reject) => {
        _glob(src, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    });

glob('dist/**/*.css').then((list)=>{
    const px2remIns = new Px2rem();
    Promise.all(list.map((src)=>{
        const cssPath=path.resolve(__dirname,'../',src);
        return fs.readFile(cssPath,{encoding:"utf-8"}).then((data)=>{
            return px2remIns.generateRem(data);
        }).then((data)=>{
            return fs.writeFile(cssPath,data);
        });
    })).then(()=>{
        console.log('success!');
    });
});

