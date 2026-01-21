'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5398<T> = T extends (infer U)[]
  ? DeepReadonlyArray5398<U>
  : T extends object
  ? DeepReadonlyObject5398<T>
  : T;

interface DeepReadonlyArray5398<T> extends ReadonlyArray<DeepReadonly5398<T>> {}

type DeepReadonlyObject5398<T> = {
  readonly [P in keyof T]: DeepReadonly5398<T[P]>;
};

type UnionToIntersection5398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5398<T> = UnionToIntersection5398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5398<T extends unknown[], V> = [...T, V];

type TuplifyUnion5398<T, L = LastOf5398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5398<TuplifyUnion5398<Exclude<T, L>>, L>;

type DeepPartial5398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5398<T[P]> }
  : T;

type Paths5398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5398<K, Paths5398<T[K], Prev5398[D]>> : never }[keyof T]
  : never;

type Prev5398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5398 {
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

type ConfigPaths5398 = Paths5398<NestedConfig5398>;

interface HeavyProps5398 {
  config: DeepPartial5398<NestedConfig5398>;
  path?: ConfigPaths5398;
}

const HeavyComponent5398 = memo(function HeavyComponent5398({ config }: HeavyProps5398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5398.displayName = 'HeavyComponent5398';
export default HeavyComponent5398;
