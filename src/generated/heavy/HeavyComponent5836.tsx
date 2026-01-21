'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5836<T> = T extends (infer U)[]
  ? DeepReadonlyArray5836<U>
  : T extends object
  ? DeepReadonlyObject5836<T>
  : T;

interface DeepReadonlyArray5836<T> extends ReadonlyArray<DeepReadonly5836<T>> {}

type DeepReadonlyObject5836<T> = {
  readonly [P in keyof T]: DeepReadonly5836<T[P]>;
};

type UnionToIntersection5836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5836<T> = UnionToIntersection5836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5836<T extends unknown[], V> = [...T, V];

type TuplifyUnion5836<T, L = LastOf5836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5836<TuplifyUnion5836<Exclude<T, L>>, L>;

type DeepPartial5836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5836<T[P]> }
  : T;

type Paths5836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5836<K, Paths5836<T[K], Prev5836[D]>> : never }[keyof T]
  : never;

type Prev5836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5836 {
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

type ConfigPaths5836 = Paths5836<NestedConfig5836>;

interface HeavyProps5836 {
  config: DeepPartial5836<NestedConfig5836>;
  path?: ConfigPaths5836;
}

const HeavyComponent5836 = memo(function HeavyComponent5836({ config }: HeavyProps5836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5836.displayName = 'HeavyComponent5836';
export default HeavyComponent5836;
