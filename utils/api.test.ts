import axios from 'axios';
import { fetchUserData } from './api';

jest.mock('axios');

describe('fetchUserData', () => {
  it('fetches user data successfully', async () => {
    const mockUserData = {
      userName: 'Test User',
      mail: 'test.user@example.com',
      img: 'https://example.com/avatar.png',
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockUserData });

    const userData = await fetchUserData();
    expect(userData).toEqual(mockUserData);
  });

  it('handles error when fetching user data faiils', async () => {
    const errorMessage = 'Failed to fetch user data';
    
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));

    await expect(fetchUserData()).rejects.toThrow(errorMessage);
  });
});