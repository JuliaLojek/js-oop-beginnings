function features(size, color){
    return {
        size,
        color
    };
}

function eat(){
    console.log('eating');
}

function drink(){
    console.log('drinking');
}

const consumption = [eat, drink];

function fly(){
    console.log('flying');
}

function swim(){
    console.log('swimming');
}

const whale = {
    ...consumption,
    ...features('huge', 'blue'),
    swim
};

console.log(whale);

whale.swim();
