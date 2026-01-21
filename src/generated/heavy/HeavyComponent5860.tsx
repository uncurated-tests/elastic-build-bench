'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5860<T> = T extends (infer U)[]
  ? DeepReadonlyArray5860<U>
  : T extends object
  ? DeepReadonlyObject5860<T>
  : T;

interface DeepReadonlyArray5860<T> extends ReadonlyArray<DeepReadonly5860<T>> {}

type DeepReadonlyObject5860<T> = {
  readonly [P in keyof T]: DeepReadonly5860<T[P]>;
};

type UnionToIntersection5860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5860<T> = UnionToIntersection5860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5860<T extends unknown[], V> = [...T, V];

type TuplifyUnion5860<T, L = LastOf5860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5860<TuplifyUnion5860<Exclude<T, L>>, L>;

type DeepPartial5860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5860<T[P]> }
  : T;

type Paths5860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5860<K, Paths5860<T[K], Prev5860[D]>> : never }[keyof T]
  : never;

type Prev5860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5860 {
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

type ConfigPaths5860 = Paths5860<NestedConfig5860>;

interface HeavyProps5860 {
  config: DeepPartial5860<NestedConfig5860>;
  path?: ConfigPaths5860;
}

const HeavyComponent5860 = memo(function HeavyComponent5860({ config }: HeavyProps5860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5860.displayName = 'HeavyComponent5860';
export default HeavyComponent5860;
