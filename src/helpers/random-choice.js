export const randomChoice = (weights) => {
    let total = 0;
    for (let i = 0; i < weights.length; i++) {
        total += weights[i].weight;
    }
    const threshold = Math.random() * total;

    total = 0;
    for (let i = 0; i < weights.length; i++) {
        total += weights[i].weight;
        if (total >= threshold) {
            return weights[i].name;
        }
    }

    return weights[-1].name;
};
