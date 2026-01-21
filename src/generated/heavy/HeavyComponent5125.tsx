'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5125<T> = T extends (infer U)[]
  ? DeepReadonlyArray5125<U>
  : T extends object
  ? DeepReadonlyObject5125<T>
  : T;

interface DeepReadonlyArray5125<T> extends ReadonlyArray<DeepReadonly5125<T>> {}

type DeepReadonlyObject5125<T> = {
  readonly [P in keyof T]: DeepReadonly5125<T[P]>;
};

type UnionToIntersection5125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5125<T> = UnionToIntersection5125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5125<T extends unknown[], V> = [...T, V];

type TuplifyUnion5125<T, L = LastOf5125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5125<TuplifyUnion5125<Exclude<T, L>>, L>;

type DeepPartial5125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5125<T[P]> }
  : T;

type Paths5125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5125<K, Paths5125<T[K], Prev5125[D]>> : never }[keyof T]
  : never;

type Prev5125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5125 {
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

type ConfigPaths5125 = Paths5125<NestedConfig5125>;

interface HeavyProps5125 {
  config: DeepPartial5125<NestedConfig5125>;
  path?: ConfigPaths5125;
}

const HeavyComponent5125 = memo(function HeavyComponent5125({ config }: HeavyProps5125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5125.displayName = 'HeavyComponent5125';
export default HeavyComponent5125;
