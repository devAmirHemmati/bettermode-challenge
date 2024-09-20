function normalizeImageIcon(imageUrl?: string | null): string | undefined {
  if (typeof imageUrl !== 'string') return undefined;

  return `/${imageUrl}.svg`;
}

export default normalizeImageIcon;
