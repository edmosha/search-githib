export const cn = (...classNames: (string | undefined)[]) => {
  return classNames.filter((className) => !!className).join(' ');
};
