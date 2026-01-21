'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5052<T> = T extends (infer U)[]
  ? DeepReadonlyArray5052<U>
  : T extends object
  ? DeepReadonlyObject5052<T>
  : T;

interface DeepReadonlyArray5052<T> extends ReadonlyArray<DeepReadonly5052<T>> {}

type DeepReadonlyObject5052<T> = {
  readonly [P in keyof T]: DeepReadonly5052<T[P]>;
};

type UnionToIntersection5052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5052<T> = UnionToIntersection5052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5052<T extends unknown[], V> = [...T, V];

type TuplifyUnion5052<T, L = LastOf5052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5052<TuplifyUnion5052<Exclude<T, L>>, L>;

type DeepPartial5052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5052<T[P]> }
  : T;

type Paths5052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5052<K, Paths5052<T[K], Prev5052[D]>> : never }[keyof T]
  : never;

type Prev5052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5052 {
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

type ConfigPaths5052 = Paths5052<NestedConfig5052>;

interface HeavyProps5052 {
  config: DeepPartial5052<NestedConfig5052>;
  path?: ConfigPaths5052;
}

const HeavyComponent5052 = memo(function HeavyComponent5052({ config }: HeavyProps5052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5052.displayName = 'HeavyComponent5052';
export default HeavyComponent5052;
