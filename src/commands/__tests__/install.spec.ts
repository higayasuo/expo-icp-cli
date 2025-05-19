import { describe, it, expect, vi, beforeEach } from 'vitest';
import { install } from '../install';
import { execCommand } from '../../utils/execCommand';
import { getOutdatedPackages } from '../../utils/getOutdatedPackages';
import {
  defaultPackages,
  iiIntegrationHelpersPackages,
  expoIcpHelpersPackages,
} from '../packages';

vi.mock('../../utils/execCommand', () => ({
  execCommand: vi.fn(),
}));

vi.mock('../../utils/getOutdatedPackages', () => ({
  getOutdatedPackages: vi.fn(),
}));

describe('install command', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('should install all default packages', async () => {
    vi.mocked(getOutdatedPackages).mockReturnValue(defaultPackages);

    await install();

    expect(console.log).toHaveBeenCalledWith(
      'Installing outdated packages:',
      defaultPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${defaultPackages.join(' ')}`,
    );
  });

  it('should not install any packages when no packages are outdated', async () => {
    vi.mocked(getOutdatedPackages).mockReturnValue([]);

    await install();

    expect(console.log).toHaveBeenCalledWith(
      'No packages need to be installed.',
    );
    expect(execCommand).not.toHaveBeenCalled();
  });
});
