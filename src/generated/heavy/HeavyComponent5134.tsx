'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5134<T> = T extends (infer U)[]
  ? DeepReadonlyArray5134<U>
  : T extends object
  ? DeepReadonlyObject5134<T>
  : T;

interface DeepReadonlyArray5134<T> extends ReadonlyArray<DeepReadonly5134<T>> {}

type DeepReadonlyObject5134<T> = {
  readonly [P in keyof T]: DeepReadonly5134<T[P]>;
};

type UnionToIntersection5134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5134<T> = UnionToIntersection5134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5134<T extends unknown[], V> = [...T, V];

type TuplifyUnion5134<T, L = LastOf5134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5134<TuplifyUnion5134<Exclude<T, L>>, L>;

type DeepPartial5134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5134<T[P]> }
  : T;

type Paths5134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5134<K, Paths5134<T[K], Prev5134[D]>> : never }[keyof T]
  : never;

type Prev5134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5134 {
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

type ConfigPaths5134 = Paths5134<NestedConfig5134>;

interface HeavyProps5134 {
  config: DeepPartial5134<NestedConfig5134>;
  path?: ConfigPaths5134;
}

const HeavyComponent5134 = memo(function HeavyComponent5134({ config }: HeavyProps5134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5134.displayName = 'HeavyComponent5134';
export default HeavyComponent5134;
