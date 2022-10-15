import { CartItem } from "../utkonos/cart";
import { doXpath } from "./helpers";

export function extractFromUnstructuredText(element: HTMLElement): CartItem[] {
  const links: string[] = []

  const linkElements = doXpath('.//a', element)
  for (const el of linkElements) {
    if (el instanceof HTMLElement) {
      const href = el.getAttribute('href')
      if (href) {
        links.push(href)
      }
    }
  }

  const text = links.join("\n") + element.textContent

  const items: CartItem[] = [];
  const seenItems = new Set<string>()

  for (const m of text.matchAll(/https:\/\/www\.utkonos\.ru\/item\/(\d+)/g)) {
    const id = m[1]
    if (seenItems.has(id)) {
      continue
    }
    seenItems.add(id)

    items.push({
      id: parseInt(id),
      quantity: 1,
    })
  }

  return items
}

