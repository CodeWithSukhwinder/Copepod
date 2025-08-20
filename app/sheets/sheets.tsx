import {registerSheet} from 'react-native-actions-sheet';

import CameraAndGalleryOption from './CameraAndGalleryOption';
import LogoutSheet from './LogoutSheet';
import WatchlistOptionsSheet from './WatchlistOptionsSheet';
import DownloadOptionsSheet from './DownloadOptionSheet';
import PremiumPlanSheet from './PremiumPlanSheet';
import StandardPlanSheet from './StandardPlanSheet';
import DownloadQualitySheet from './DownloadQualitySheet';

export const SHEETS = {
  CameraAndGalleryOption: 'CameraAndGalleryOption',
  GenderSelectSheet: 'GenderSelectSheet',
  LogoutSheet: 'LogoutSheet',
  WatchlistOptionsSheet: 'WatchlistOptionsSheet',
  DownloadOptionsSheet: 'DownloadOptionsSheet',
  PremiumPlanSheet: 'PremiumPlanSheet',
  StandardPlanSheet: 'StandardPlanSheet',
  DownloadQualitySheet: 'DownloadQualitySheet',
};

registerSheet(SHEETS.LogoutSheet, LogoutSheet);
registerSheet(SHEETS.CameraAndGalleryOption, CameraAndGalleryOption);
registerSheet(SHEETS.WatchlistOptionsSheet, WatchlistOptionsSheet);
registerSheet(SHEETS.DownloadOptionsSheet, DownloadOptionsSheet);
registerSheet(SHEETS.PremiumPlanSheet, PremiumPlanSheet);
registerSheet(SHEETS.StandardPlanSheet, StandardPlanSheet);
registerSheet(SHEETS.DownloadQualitySheet, DownloadQualitySheet);
