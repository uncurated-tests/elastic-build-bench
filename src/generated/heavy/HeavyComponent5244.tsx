'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5244<T> = T extends (infer U)[]
  ? DeepReadonlyArray5244<U>
  : T extends object
  ? DeepReadonlyObject5244<T>
  : T;

interface DeepReadonlyArray5244<T> extends ReadonlyArray<DeepReadonly5244<T>> {}

type DeepReadonlyObject5244<T> = {
  readonly [P in keyof T]: DeepReadonly5244<T[P]>;
};

type UnionToIntersection5244<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5244<T> = UnionToIntersection5244<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5244<T extends unknown[], V> = [...T, V];

type TuplifyUnion5244<T, L = LastOf5244<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5244<TuplifyUnion5244<Exclude<T, L>>, L>;

type DeepPartial5244<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5244<T[P]> }
  : T;

type Paths5244<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5244<K, Paths5244<T[K], Prev5244[D]>> : never }[keyof T]
  : never;

type Prev5244 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5244<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5244 {
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

type ConfigPaths5244 = Paths5244<NestedConfig5244>;

interface HeavyProps5244 {
  config: DeepPartial5244<NestedConfig5244>;
  path?: ConfigPaths5244;
}

const HeavyComponent5244 = memo(function HeavyComponent5244({ config }: HeavyProps5244) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5244) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5244 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5244: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5244.displayName = 'HeavyComponent5244';
export default HeavyComponent5244;
