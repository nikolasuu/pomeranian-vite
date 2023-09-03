function countCharacters(string: string): number {
  return string.length;
}

const isEven = (number: number): boolean => number % 2 === 0;

function getParityMessage(isEven: boolean): string {
  if (isEven) {
    return 'Ta liczba jest parzysta';
  } else {
    return 'Ta liczba nie jest parzysta';
  }
}

export const processString = (string?: string): string => {
  if (!string) {
    return 'Brak argumentu';
  }
  const length = countCharacters(string);
  const even = isEven(length);
  const message = getParityMessage(even);
  return `${string} - Liczba znaków: ${length}, ${message}`;
};

export type AnalyzeResult = {
  string: string;
  length: number;
  even: boolean;
};

export function analyzeString(string?: string): AnalyzeResult | undefined {
  if (!string) {
    return;
  }
  const length = countCharacters(string);
  const even = isEven(length);
  return { string, length, even };
}

export function printAnalyzeResult(result?: AnalyzeResult): string {
  if (!result) {
    return 'Brak argumentu';
  }
  const { string, length, even } = result;
  const message = getParityMessage(even);
  return `${string} - Liczba znaków: ${length}, ${message}`;
}
