// handleing get eror messages

export function getErrorMessages(errors: Record<string, any>): string {
  return Object.values(errors).join(', ');
}
