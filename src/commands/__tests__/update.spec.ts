import { describe, it, expect, vi, beforeEach } from 'vitest';
import { update } from '../update';
import { execCommand } from '../../utils/execCommand';
import { getOutdatedPackages } from '../../utils/getOutdatedPackages';
import { defaultPackages } from '../packages';

vi.mock('../../utils/execCommand');
vi.mock('../../utils/getOutdatedPackages');

describe('update command', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should install outdated packages', async () => {
    const outdatedPackages = ['package-1', 'package-2'];
    vi.mocked(getOutdatedPackages).mockReturnValue(outdatedPackages);
    const mockExecCommand = vi.mocked(execCommand);
    mockExecCommand.mockImplementation(() => '');

    await update();

    expect(getOutdatedPackages).toHaveBeenCalledWith(defaultPackages);
    expect(mockExecCommand).toHaveBeenCalledWith(
      `npm install ${outdatedPackages.join(' ')}`,
    );
  });

  it('should not install anything when no packages are outdated', async () => {
    vi.mocked(getOutdatedPackages).mockReturnValue([]);
    const mockExecCommand = vi.mocked(execCommand);

    await update();

    expect(getOutdatedPackages).toHaveBeenCalledWith(defaultPackages);
    expect(mockExecCommand).not.toHaveBeenCalled();
  });

  it('should handle execCommand errors', async () => {
    const outdatedPackages = ['package-1'];
    vi.mocked(getOutdatedPackages).mockReturnValue(outdatedPackages);
    const mockExecCommand = vi.mocked(execCommand);
    const error = new Error('npm install failed');
    mockExecCommand.mockImplementation(() => {
      throw error;
    });

    await expect(update()).rejects.toThrow('npm install failed');
  });
});
