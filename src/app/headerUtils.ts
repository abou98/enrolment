import { HttpHeaders } from '@angular/common/http';

export const headers = {
  /**
   * Headers with JWT token.
   * @returns
   */
  auth: () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser.access_token;

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
  },
};
