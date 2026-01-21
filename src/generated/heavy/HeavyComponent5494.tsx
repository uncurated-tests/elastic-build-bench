'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5494<T> = T extends (infer U)[]
  ? DeepReadonlyArray5494<U>
  : T extends object
  ? DeepReadonlyObject5494<T>
  : T;

interface DeepReadonlyArray5494<T> extends ReadonlyArray<DeepReadonly5494<T>> {}

type DeepReadonlyObject5494<T> = {
  readonly [P in keyof T]: DeepReadonly5494<T[P]>;
};

type UnionToIntersection5494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5494<T> = UnionToIntersection5494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5494<T extends unknown[], V> = [...T, V];

type TuplifyUnion5494<T, L = LastOf5494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5494<TuplifyUnion5494<Exclude<T, L>>, L>;

type DeepPartial5494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5494<T[P]> }
  : T;

type Paths5494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5494<K, Paths5494<T[K], Prev5494[D]>> : never }[keyof T]
  : never;

type Prev5494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5494 {
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

type ConfigPaths5494 = Paths5494<NestedConfig5494>;

interface HeavyProps5494 {
  config: DeepPartial5494<NestedConfig5494>;
  path?: ConfigPaths5494;
}

const HeavyComponent5494 = memo(function HeavyComponent5494({ config }: HeavyProps5494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5494.displayName = 'HeavyComponent5494';
export default HeavyComponent5494;
