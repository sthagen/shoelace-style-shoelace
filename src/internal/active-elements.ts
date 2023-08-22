/**
 * Use a generator so we can iterate and possibly break early.
 * @example
 *   // to operate like a regular array. This gets kinda nullify generator benefits.
 *   const allActiveElements = [...activeElements()]
 *
 *   // Earlier return
 *   for (const activeElement of activeElements()) {
 *     if (<cond>) {
 *       break; // Break the loop, dont need to iterate over the whole array or store an array in memory!
 *     }
 *   }
 */
export function* activeElements (activeElement: Element | null = document.activeElement): Generator<Element> {
  if (activeElement == null) return

  yield activeElement

  if ("shadowRoot" in activeElement && activeElement.shadowRoot && activeElement.shadowRoot.mode !== "closed") {
    yield* activeElements(activeElement.shadowRoot.activeElement)
  }
}