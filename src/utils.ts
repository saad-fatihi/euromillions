type Multiple = {
    cost: {
        currency: string;
        value: number;
    };
    pattern: number[];
};
export const getPrice = (
    numbers: number[],
    stars: number[],
    multiples: Multiple[]
): number | undefined => {
    return numbers.length > 4 && stars.length > 1
        ? multiples.find(
              (el) =>
                  el.pattern.join("-") ===
                  [numbers.length, stars.length].join("-")
          )?.cost.value
        : 0;
};

export const shoulDisable = (
    pattern: number[],
    multiples: Multiple[]
): boolean => {
    return !multiples.find((el) => el.pattern.join("-") === pattern.join("-"));
};
