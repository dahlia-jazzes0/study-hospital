import { postAuthLogin } from './api/post-auth-login';
import { postAuthRefresh } from './api/post-auth-refresh';
import { AuthTokenManager } from './auth-token-manager';

export const accessTokenManager = new AuthTokenManager('accessToken');
const refreshTokenManager = new AuthTokenManager('refreshToken');

export async function login(username, password) {
  const data = await postAuthLogin({ username, password });
  accessTokenManager.set(data.accessToken);
  refreshTokenManager.set(data.refreshToken);
  return { success: true };
}

export async function logout() {
  accessTokenManager.remove();
  refreshTokenManager.remove();
}

export async function getAccessToken() {
  const at = accessTokenManager.get();
  if (at != null) return at;

  const rt = refreshTokenManager.get();
  if (rt == null) return null;

  const data = await postAuthRefresh({ refreshToken: rt });
  accessTokenManager.set(data.accessToken);
  refreshTokenManager.set(data.refreshToken);

  return data.accessToken;
}
