import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getOutdatedPackages } from '../getOutdatedPackages';
import { execCommand } from '../execCommand';

vi.mock('../execCommand', () => ({
  execCommand: vi.fn(),
}));

describe('getOutdatedPackages', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return array of outdated package names', () => {
    const targetPackages = ['package-a', 'package-b'];
    const mockOutput = JSON.stringify({
      'package-a': {
        current: '1.2.3',
        latest: '2.0.0',
      },
      'package-b': {
        current: '3.4.5',
        latest: '4.0.0',
      },
    });

    vi.mocked(execCommand).mockReturnValue(mockOutput);

    const result = getOutdatedPackages(targetPackages);

    expect(execCommand).toHaveBeenCalledWith(
      'npm outdated --json package-a package-b',
    );
    expect(result).toEqual(['package-a', 'package-b']);
  });

  it('should handle npm outdated error with valid JSON output', () => {
    const targetPackages = ['package-a', 'package-b'];
    const mockOutput = JSON.stringify({
      'package-a': {
        current: '1.2.3',
        latest: '2.0.0',
      },
    });

    const error = new Error('npm outdated');
    (error as any).stdout = mockOutput;
    vi.mocked(execCommand).mockImplementation(() => {
      throw error;
    });

    const result = getOutdatedPackages(targetPackages);

    expect(execCommand).toHaveBeenCalledWith(
      'npm outdated --json package-a package-b',
    );
    expect(result).toEqual(['package-a']);
  });

  it('should throw error when npm outdated fails with no output', () => {
    const targetPackages = ['package-a', 'package-b'];
    const error = new Error('npm outdated');
    (error as any).stdout = '';
    vi.mocked(execCommand).mockImplementation(() => {
      throw error;
    });

    expect(() => getOutdatedPackages(targetPackages)).toThrow(
      'npm outdated command failed with no output',
    );
  });

  it('should throw error for other types of errors', () => {
    const targetPackages = ['package-a', 'package-b'];
    const error = new Error('Network error');
    vi.mocked(execCommand).mockImplementation(() => {
      throw error;
    });

    expect(() => getOutdatedPackages(targetPackages)).toThrow('Network error');
  });
});
