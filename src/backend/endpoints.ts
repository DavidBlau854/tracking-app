export function getAllDocs(): Promise<any> {
  return fetch("/docs").then((res) => res.json());
}

export function postEvent(subjetId: string, event: any) {
  return fetch(`/doc/${subjetId}/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  }).then((res) => res.json());
}
