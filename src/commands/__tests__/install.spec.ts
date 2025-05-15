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

  it('should install all default packages when no options provided', async () => {
    await install({});
    expect(console.log).toHaveBeenCalledWith(
      'Installing necessary packages...',
      {},
    );
    expect(execCommand).toHaveBeenCalledTimes(12); // One for each default package
    expect(execCommand).toHaveBeenCalledWith('npm install canister-manager');
    expect(execCommand).toHaveBeenCalledWith(
      'npm install expo-crypto-universal',
    );
  });

  it('should install only II integration helper packages when --ii-integration-helpers is true', async () => {
    await install({ iiIntegrationHelpers: true });
    expect(console.log).toHaveBeenCalledWith(
      'Installing necessary packages...',
      { iiIntegrationHelpers: true },
    );
    expect(execCommand).toHaveBeenCalledTimes(4); // One for each II integration helper package
    expect(execCommand).toHaveBeenCalledWith('npm install expo-icp');
    expect(execCommand).toHaveBeenCalledWith(
      'npm install expo-icp-app-connect-helpers',
    );
    expect(execCommand).toHaveBeenCalledWith(
      'npm install expo-icp-frontend-helpers',
    );
    expect(execCommand).toHaveBeenCalledWith(
      'npm install ii-integration-helpers',
    );
  });
});
