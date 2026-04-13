/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum AnalysisStatus {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  ANALYZING = 'ANALYZING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export interface AnalysisResult {
  prediction: 'NORMAL' | 'PNEUMONIA' | 'INCONCLUSIVE';
  confidence: number;
  explanation: string;
  findings: string[];
  recommendations: string[];
}

export interface AnalysisState {
  status: AnalysisStatus;
  image: string | null;
  result: AnalysisResult | null;
  error: string | null;
}
