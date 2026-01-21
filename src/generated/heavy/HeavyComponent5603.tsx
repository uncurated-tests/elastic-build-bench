'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5603<T> = T extends (infer U)[]
  ? DeepReadonlyArray5603<U>
  : T extends object
  ? DeepReadonlyObject5603<T>
  : T;

interface DeepReadonlyArray5603<T> extends ReadonlyArray<DeepReadonly5603<T>> {}

type DeepReadonlyObject5603<T> = {
  readonly [P in keyof T]: DeepReadonly5603<T[P]>;
};

type UnionToIntersection5603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5603<T> = UnionToIntersection5603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5603<T extends unknown[], V> = [...T, V];

type TuplifyUnion5603<T, L = LastOf5603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5603<TuplifyUnion5603<Exclude<T, L>>, L>;

type DeepPartial5603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5603<T[P]> }
  : T;

type Paths5603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5603<K, Paths5603<T[K], Prev5603[D]>> : never }[keyof T]
  : never;

type Prev5603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5603 {
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

type ConfigPaths5603 = Paths5603<NestedConfig5603>;

interface HeavyProps5603 {
  config: DeepPartial5603<NestedConfig5603>;
  path?: ConfigPaths5603;
}

const HeavyComponent5603 = memo(function HeavyComponent5603({ config }: HeavyProps5603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5603.displayName = 'HeavyComponent5603';
export default HeavyComponent5603;
