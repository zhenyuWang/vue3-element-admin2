import type { _RouteRecordBase } from "vue-router"
import type { _StoreWithState } from "pinia"
export interface TagViewState {
  cachedViews: string[]
  fixedVisitedViews: _RouteRecordBase[]
  visitedViews: _RouteRecordBase[]
}
