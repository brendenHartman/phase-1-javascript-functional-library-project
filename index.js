function myEach(data,func){
    let use = [];
    if(Array.isArray(data) !== true){
        use = Object.values(data);
    }
    else{
        use = data;
    }
    for(let i = 0; i< use.length;i++){
        func(use[i]);
    }
    return data;
}

function myMap(data,func){
    let use = [];
    if(Array.isArray(data) !== true){
        use = Object.values(data);
    }
    else{
        use.push(...data);
    }
    for(let i = 0; i< use.length;i++){
        use[i] = func(use[i]);
    }
    return use;
}

function myReduce(data,func, acc = 0){
    let use = [];
    let accQ = (acc == 0);
    if(Array.isArray(data) !== true){
        use = Object.values(data);
        if(accQ){acc = use[0]}
    }
    else{
        use.push(...data);
        if(accQ){acc=use[0]};
    }
    for(let i = 0; i< use.length;i++){
        acc = func(acc,use[i],use);
    }
    if(accQ == true){
        acc -= func(0,use[0],use);
    }
    return acc;
}

function myFind(data,func){
    let use = [];
    if(Array.isArray(data) !== true){
        use = Object.values(data);
    }
    else{
        use = data;
    }
    for(let i = 0; i< use.length;i++){
        if(func(use[i])){return use[i];}
    }
}

function myFilter(data,func){
    let use = [];
    let result = [];
    if(Array.isArray(data) !== true){
        use = Object.values(data);
    }
    else{
        use = data;
    }
    for(let i = 0; i< use.length;i++){
        if(func(use[i])){result.push(use[i]);}
    }
    return result;
}

function mySize(data){
    let use = [];
    if(Array.isArray(data) !== true){
        use = Object.values(data);
    }
    else{
        use = data;
    }
    return use.length;
}

function myFirst(data,num = -1){
    let use;
    if(Array.isArray(data) !== true){
        use = Object.values(data);
    }
    else{
        use = data;
    }
    if(num !== -1){
        return data.slice(0,num);
    }
    else{
        return data[0];
    }
}

function myLast(data,num = -1){
    let use;
    if(Array.isArray(data) !== true){
        use = Object.values(data);
    }
    else{
        use = data;
    }
    if(num !== -1){
        return data.slice(-num, data.length);
    }
    else{
        return data[data.length - 1];
    }
}

function myKeys(data){
    return Object.keys(data);
}

function myValues(data){
    return Object.values(data);
}
