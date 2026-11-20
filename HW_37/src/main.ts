import "./style.css";
import { runTypeScriptPractice } from "./practice";
import type { ApiUser, AppState } from "./types";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

const usersList = document.querySelector<HTMLUListElement>("#users-list");
const statusMessage =
  document.querySelector<HTMLParagraphElement>("#status-message");
const reloadButton = document.querySelector<HTMLButtonElement>("#reload-btn");

const state: AppState<ApiUser> = {
  data: [],
  error: null,
  isLoading: false,
  status: "pending",
};

const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data: T = await response.json();
  return data;
};

const render = (): void => {
  if (!usersList || !statusMessage) {
    return;
  }

  if (state.isLoading) {
    statusMessage.textContent = "Loading users...";
    statusMessage.className = "status status--loading";
    usersList.innerHTML = "";
    return;
  }

  if (state.error) {
    statusMessage.textContent = `Error: ${state.error}`;
    statusMessage.className = "status status--error";
    usersList.innerHTML = "";
    return;
  }

  statusMessage.textContent = `Loaded ${state.data.length} users (${state.status})`;
  statusMessage.className = "status status--success";

  const markup = state.data
    .map(
      (user: ApiUser) => `
        <li class="user-card">
          <div class="user-card__top">
            <h2 class="user-card__name">${user.name}</h2>
            <span class="user-card__username">@${user.username}</span>
          </div>
          <p class="user-card__meta">Email: ${user.email}</p>
          <p class="user-card__meta">City: ${user.address.city}</p>
          <p class="user-card__meta">Company: ${user.company.name}</p>
        </li>
      `,
    )
    .join("");

  usersList.innerHTML = markup;
};

const loadUsers = async (): Promise<void> => {
  state.isLoading = true;
  state.error = null;
  state.status = "pending";
  render();

  try {
    const users = await fetchData<ApiUser[]>(USERS_API_URL);
    state.data = users;
    state.status = "fulfilled";
  } catch (error) {
    state.error =
      error instanceof Error ? error.message : "Failed to fetch users";
    state.status = "rejected";
  } finally {
    state.isLoading = false;
    render();
  }
};

reloadButton?.addEventListener("click", () => {
  void loadUsers();
});

runTypeScriptPractice();
void loadUsers();
