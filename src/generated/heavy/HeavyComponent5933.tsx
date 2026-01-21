'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5933<T> = T extends (infer U)[]
  ? DeepReadonlyArray5933<U>
  : T extends object
  ? DeepReadonlyObject5933<T>
  : T;

interface DeepReadonlyArray5933<T> extends ReadonlyArray<DeepReadonly5933<T>> {}

type DeepReadonlyObject5933<T> = {
  readonly [P in keyof T]: DeepReadonly5933<T[P]>;
};

type UnionToIntersection5933<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5933<T> = UnionToIntersection5933<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5933<T extends unknown[], V> = [...T, V];

type TuplifyUnion5933<T, L = LastOf5933<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5933<TuplifyUnion5933<Exclude<T, L>>, L>;

type DeepPartial5933<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5933<T[P]> }
  : T;

type Paths5933<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5933<K, Paths5933<T[K], Prev5933[D]>> : never }[keyof T]
  : never;

type Prev5933 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5933<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5933 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths5933 = Paths5933<NestedConfig5933>;

interface HeavyProps5933 {
  config: DeepPartial5933<NestedConfig5933>;
  path?: ConfigPaths5933;
}

const HeavyComponent5933 = memo(function HeavyComponent5933({ config }: HeavyProps5933) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5933) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5933 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5933: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5933.displayName = 'HeavyComponent5933';
export default HeavyComponent5933;
