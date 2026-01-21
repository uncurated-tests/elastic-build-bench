'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5351<T> = T extends (infer U)[]
  ? DeepReadonlyArray5351<U>
  : T extends object
  ? DeepReadonlyObject5351<T>
  : T;

interface DeepReadonlyArray5351<T> extends ReadonlyArray<DeepReadonly5351<T>> {}

type DeepReadonlyObject5351<T> = {
  readonly [P in keyof T]: DeepReadonly5351<T[P]>;
};

type UnionToIntersection5351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5351<T> = UnionToIntersection5351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5351<T extends unknown[], V> = [...T, V];

type TuplifyUnion5351<T, L = LastOf5351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5351<TuplifyUnion5351<Exclude<T, L>>, L>;

type DeepPartial5351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5351<T[P]> }
  : T;

type Paths5351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5351<K, Paths5351<T[K], Prev5351[D]>> : never }[keyof T]
  : never;

type Prev5351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5351 {
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

type ConfigPaths5351 = Paths5351<NestedConfig5351>;

interface HeavyProps5351 {
  config: DeepPartial5351<NestedConfig5351>;
  path?: ConfigPaths5351;
}

const HeavyComponent5351 = memo(function HeavyComponent5351({ config }: HeavyProps5351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5351.displayName = 'HeavyComponent5351';
export default HeavyComponent5351;
