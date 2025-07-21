import { use } from 'react';

export function useDepartments() {
  const departments = use(fetchDepartments());
  return departments;
}

let cache;
/**
 * @returns {Promise<{ id: string, name: string }[]>}
 */
function fetchDepartments() {
  if (cache == null) cache = getData();
  return cache;
  async function getData() {
    const res = await fetch(
      `https://hospital-api.dahlia-jazzes0.workers.dev/api/departments/`
    );
    const body = res.json();
    if (!res.ok) throw body;
    return body;
  }
}
