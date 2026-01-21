'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5950<T> = T extends (infer U)[]
  ? DeepReadonlyArray5950<U>
  : T extends object
  ? DeepReadonlyObject5950<T>
  : T;

interface DeepReadonlyArray5950<T> extends ReadonlyArray<DeepReadonly5950<T>> {}

type DeepReadonlyObject5950<T> = {
  readonly [P in keyof T]: DeepReadonly5950<T[P]>;
};

type UnionToIntersection5950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5950<T> = UnionToIntersection5950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5950<T extends unknown[], V> = [...T, V];

type TuplifyUnion5950<T, L = LastOf5950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5950<TuplifyUnion5950<Exclude<T, L>>, L>;

type DeepPartial5950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5950<T[P]> }
  : T;

type Paths5950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5950<K, Paths5950<T[K], Prev5950[D]>> : never }[keyof T]
  : never;

type Prev5950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5950 {
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

type ConfigPaths5950 = Paths5950<NestedConfig5950>;

interface HeavyProps5950 {
  config: DeepPartial5950<NestedConfig5950>;
  path?: ConfigPaths5950;
}

const HeavyComponent5950 = memo(function HeavyComponent5950({ config }: HeavyProps5950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5950.displayName = 'HeavyComponent5950';
export default HeavyComponent5950;
