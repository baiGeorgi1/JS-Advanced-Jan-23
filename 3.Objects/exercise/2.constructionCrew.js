function construction(workerInfo) {
    if (workerInfo.dizziness) {
        return {
            ...workerInfo,
            levelOfHydrated: 0.1 * workerInfo.weight * workerInfo.experience,
            dizziness: false,
        }
    }
    return { workerInfo }
}
construction({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
);
construction({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
);
console.log(construction({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
))
