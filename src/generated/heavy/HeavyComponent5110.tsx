'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5110<T> = T extends (infer U)[]
  ? DeepReadonlyArray5110<U>
  : T extends object
  ? DeepReadonlyObject5110<T>
  : T;

interface DeepReadonlyArray5110<T> extends ReadonlyArray<DeepReadonly5110<T>> {}

type DeepReadonlyObject5110<T> = {
  readonly [P in keyof T]: DeepReadonly5110<T[P]>;
};

type UnionToIntersection5110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5110<T> = UnionToIntersection5110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5110<T extends unknown[], V> = [...T, V];

type TuplifyUnion5110<T, L = LastOf5110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5110<TuplifyUnion5110<Exclude<T, L>>, L>;

type DeepPartial5110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5110<T[P]> }
  : T;

type Paths5110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5110<K, Paths5110<T[K], Prev5110[D]>> : never }[keyof T]
  : never;

type Prev5110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5110 {
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

type ConfigPaths5110 = Paths5110<NestedConfig5110>;

interface HeavyProps5110 {
  config: DeepPartial5110<NestedConfig5110>;
  path?: ConfigPaths5110;
}

const HeavyComponent5110 = memo(function HeavyComponent5110({ config }: HeavyProps5110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5110.displayName = 'HeavyComponent5110';
export default HeavyComponent5110;
