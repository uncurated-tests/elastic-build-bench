'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5063<T> = T extends (infer U)[]
  ? DeepReadonlyArray5063<U>
  : T extends object
  ? DeepReadonlyObject5063<T>
  : T;

interface DeepReadonlyArray5063<T> extends ReadonlyArray<DeepReadonly5063<T>> {}

type DeepReadonlyObject5063<T> = {
  readonly [P in keyof T]: DeepReadonly5063<T[P]>;
};

type UnionToIntersection5063<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5063<T> = UnionToIntersection5063<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5063<T extends unknown[], V> = [...T, V];

type TuplifyUnion5063<T, L = LastOf5063<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5063<TuplifyUnion5063<Exclude<T, L>>, L>;

type DeepPartial5063<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5063<T[P]> }
  : T;

type Paths5063<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5063<K, Paths5063<T[K], Prev5063[D]>> : never }[keyof T]
  : never;

type Prev5063 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5063<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5063 {
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

type ConfigPaths5063 = Paths5063<NestedConfig5063>;

interface HeavyProps5063 {
  config: DeepPartial5063<NestedConfig5063>;
  path?: ConfigPaths5063;
}

const HeavyComponent5063 = memo(function HeavyComponent5063({ config }: HeavyProps5063) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5063) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5063 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5063: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5063.displayName = 'HeavyComponent5063';
export default HeavyComponent5063;
