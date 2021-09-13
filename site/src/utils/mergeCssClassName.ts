export default function mergeCssClassName(
  firstClassName: string | undefined,
  ...classNames: (string | undefined)[]
): string {
  const classNameArray = [firstClassName, ...classNames].filter(
    (className) => !!className
  );
  const classNameString = classNameArray.join(' ');
  return classNameString;
}
