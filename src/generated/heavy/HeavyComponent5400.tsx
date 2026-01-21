'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5400<T> = T extends (infer U)[]
  ? DeepReadonlyArray5400<U>
  : T extends object
  ? DeepReadonlyObject5400<T>
  : T;

interface DeepReadonlyArray5400<T> extends ReadonlyArray<DeepReadonly5400<T>> {}

type DeepReadonlyObject5400<T> = {
  readonly [P in keyof T]: DeepReadonly5400<T[P]>;
};

type UnionToIntersection5400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5400<T> = UnionToIntersection5400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5400<T extends unknown[], V> = [...T, V];

type TuplifyUnion5400<T, L = LastOf5400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5400<TuplifyUnion5400<Exclude<T, L>>, L>;

type DeepPartial5400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5400<T[P]> }
  : T;

type Paths5400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5400<K, Paths5400<T[K], Prev5400[D]>> : never }[keyof T]
  : never;

type Prev5400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5400 {
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

type ConfigPaths5400 = Paths5400<NestedConfig5400>;

interface HeavyProps5400 {
  config: DeepPartial5400<NestedConfig5400>;
  path?: ConfigPaths5400;
}

const HeavyComponent5400 = memo(function HeavyComponent5400({ config }: HeavyProps5400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5400.displayName = 'HeavyComponent5400';
export default HeavyComponent5400;
