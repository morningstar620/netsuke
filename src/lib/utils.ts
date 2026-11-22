type ClassValue = string | false | null | undefined;

const fontSize =
  /^(?:text-(?:xs|sm|base|lg|xl|[2-9]xl|display(?:-lg|-md|-sm)?|h2(?:-lg|-md|-sm)?|h4|body|button|label|eyebrow)|text-\[)/;

function conflictGroup(token: string) {
  if (token.startsWith("hover:text-") && !fontSize.test(token.slice("hover:".length))) {
    return "hover-text";
  }

  if (token.startsWith("text-") && !fontSize.test(token)) {
    return "text";
  }

  if (token.startsWith("hover:bg-") && !token.startsWith("hover:bg-clip-")) {
    return "hover-bg";
  }

  if (token.startsWith("bg-") && !token.startsWith("bg-clip-")) {
    return "bg";
  }

  return null;
}

export function cn(...values: ClassValue[]) {
  const tokens: string[] = [];

  for (const value of values) {
    if (!value) continue;
    tokens.push(...value.split(/\s+/).filter(Boolean));
  }

  const groupIndex = new Map<string, number>();
  const kept: string[] = [];

  for (const token of tokens) {
    const group = conflictGroup(token);
    const existing = group ? groupIndex.get(group) : undefined;

    if (existing !== undefined) {
      kept[existing] = token;
      continue;
    }

    if (group) groupIndex.set(group, kept.length);
    kept.push(token);
  }

  return kept.join(" ");
}
