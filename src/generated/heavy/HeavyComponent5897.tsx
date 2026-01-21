'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5897<T> = T extends (infer U)[]
  ? DeepReadonlyArray5897<U>
  : T extends object
  ? DeepReadonlyObject5897<T>
  : T;

interface DeepReadonlyArray5897<T> extends ReadonlyArray<DeepReadonly5897<T>> {}

type DeepReadonlyObject5897<T> = {
  readonly [P in keyof T]: DeepReadonly5897<T[P]>;
};

type UnionToIntersection5897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5897<T> = UnionToIntersection5897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5897<T extends unknown[], V> = [...T, V];

type TuplifyUnion5897<T, L = LastOf5897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5897<TuplifyUnion5897<Exclude<T, L>>, L>;

type DeepPartial5897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5897<T[P]> }
  : T;

type Paths5897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5897<K, Paths5897<T[K], Prev5897[D]>> : never }[keyof T]
  : never;

type Prev5897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5897 {
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

type ConfigPaths5897 = Paths5897<NestedConfig5897>;

interface HeavyProps5897 {
  config: DeepPartial5897<NestedConfig5897>;
  path?: ConfigPaths5897;
}

const HeavyComponent5897 = memo(function HeavyComponent5897({ config }: HeavyProps5897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5897.displayName = 'HeavyComponent5897';
export default HeavyComponent5897;
