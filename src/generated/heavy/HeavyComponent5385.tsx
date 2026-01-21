'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5385<T> = T extends (infer U)[]
  ? DeepReadonlyArray5385<U>
  : T extends object
  ? DeepReadonlyObject5385<T>
  : T;

interface DeepReadonlyArray5385<T> extends ReadonlyArray<DeepReadonly5385<T>> {}

type DeepReadonlyObject5385<T> = {
  readonly [P in keyof T]: DeepReadonly5385<T[P]>;
};

type UnionToIntersection5385<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5385<T> = UnionToIntersection5385<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5385<T extends unknown[], V> = [...T, V];

type TuplifyUnion5385<T, L = LastOf5385<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5385<TuplifyUnion5385<Exclude<T, L>>, L>;

type DeepPartial5385<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5385<T[P]> }
  : T;

type Paths5385<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5385<K, Paths5385<T[K], Prev5385[D]>> : never }[keyof T]
  : never;

type Prev5385 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5385<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5385 {
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

type ConfigPaths5385 = Paths5385<NestedConfig5385>;

interface HeavyProps5385 {
  config: DeepPartial5385<NestedConfig5385>;
  path?: ConfigPaths5385;
}

const HeavyComponent5385 = memo(function HeavyComponent5385({ config }: HeavyProps5385) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5385) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5385 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5385: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5385.displayName = 'HeavyComponent5385';
export default HeavyComponent5385;
