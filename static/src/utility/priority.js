const PRIORITY = {
    TOP: {
        text: '최우선',
        value: 0,
    },
    MIDDLE: {
        text: '중간',
        value: 1,
    },
    DOWN: {
        text: '그닥',
        value: 2,
    }
};

function toText(value) {
    const priority = Object.values(PRIORITY).find((prior) => prior.value === value);
    return priority.text;
}

export {
    PRIORITY, toText
};
