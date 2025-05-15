import { describe, it, expect, vi, beforeEach } from 'vitest';
import { install } from '../install';
import { execCommand } from '../../utils/execCommand';

vi.mock('../../utils/execCommand', () => ({
  execCommand: vi.fn(),
}));

describe('install command', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
  });

  it('should install all required packages', async () => {
    await install();
    expect(console.log).toHaveBeenCalledWith(
      'Installing necessary packages...',
    );
    expect(execCommand).toHaveBeenCalledTimes(12); // One for each package
    expect(execCommand).toHaveBeenCalledWith('npm install canister-manager');
    expect(execCommand).toHaveBeenCalledWith(
      'npm install expo-crypto-universal',
    );
    // ... and so on for other packages
  });
});
