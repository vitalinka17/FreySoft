import { useAppSelector } from "../../hooks/storeHook";

export const analyticsSelector = useAppSelector(
  (state) => state.analytics.data
);
export const analyticsMeta = useAppSelector((state) => state.analytics.meta);
