import { describe, it, expect, vi } from 'vitest';
import { update } from '../update';
import { execCommand } from '../../utils/execCommand';
import { defaultPackages } from '../packages';

vi.mock('../../utils/execCommand');

describe('update command', () => {
  it('should call execCommand with correct npm update command and packages', async () => {
    const mockExecCommand = vi.mocked(execCommand);
    mockExecCommand.mockImplementation(() => '');

    await update();

    expect(mockExecCommand).toHaveBeenCalledWith(
      `npm update ${defaultPackages.join(' ')}`,
    );
  });

  it('should handle execCommand errors', async () => {
    const mockExecCommand = vi.mocked(execCommand);
    const error = new Error('npm update failed');
    mockExecCommand.mockImplementation(() => {
      throw error;
    });

    await expect(update()).rejects.toThrow('npm update failed');
  });
});
