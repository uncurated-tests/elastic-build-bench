'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5911<T> = T extends (infer U)[]
  ? DeepReadonlyArray5911<U>
  : T extends object
  ? DeepReadonlyObject5911<T>
  : T;

interface DeepReadonlyArray5911<T> extends ReadonlyArray<DeepReadonly5911<T>> {}

type DeepReadonlyObject5911<T> = {
  readonly [P in keyof T]: DeepReadonly5911<T[P]>;
};

type UnionToIntersection5911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5911<T> = UnionToIntersection5911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5911<T extends unknown[], V> = [...T, V];

type TuplifyUnion5911<T, L = LastOf5911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5911<TuplifyUnion5911<Exclude<T, L>>, L>;

type DeepPartial5911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5911<T[P]> }
  : T;

type Paths5911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5911<K, Paths5911<T[K], Prev5911[D]>> : never }[keyof T]
  : never;

type Prev5911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5911 {
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

type ConfigPaths5911 = Paths5911<NestedConfig5911>;

interface HeavyProps5911 {
  config: DeepPartial5911<NestedConfig5911>;
  path?: ConfigPaths5911;
}

const HeavyComponent5911 = memo(function HeavyComponent5911({ config }: HeavyProps5911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5911.displayName = 'HeavyComponent5911';
export default HeavyComponent5911;
