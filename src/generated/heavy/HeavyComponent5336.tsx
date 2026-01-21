'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5336<T> = T extends (infer U)[]
  ? DeepReadonlyArray5336<U>
  : T extends object
  ? DeepReadonlyObject5336<T>
  : T;

interface DeepReadonlyArray5336<T> extends ReadonlyArray<DeepReadonly5336<T>> {}

type DeepReadonlyObject5336<T> = {
  readonly [P in keyof T]: DeepReadonly5336<T[P]>;
};

type UnionToIntersection5336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5336<T> = UnionToIntersection5336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5336<T extends unknown[], V> = [...T, V];

type TuplifyUnion5336<T, L = LastOf5336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5336<TuplifyUnion5336<Exclude<T, L>>, L>;

type DeepPartial5336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5336<T[P]> }
  : T;

type Paths5336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5336<K, Paths5336<T[K], Prev5336[D]>> : never }[keyof T]
  : never;

type Prev5336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5336 {
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

type ConfigPaths5336 = Paths5336<NestedConfig5336>;

interface HeavyProps5336 {
  config: DeepPartial5336<NestedConfig5336>;
  path?: ConfigPaths5336;
}

const HeavyComponent5336 = memo(function HeavyComponent5336({ config }: HeavyProps5336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5336.displayName = 'HeavyComponent5336';
export default HeavyComponent5336;
