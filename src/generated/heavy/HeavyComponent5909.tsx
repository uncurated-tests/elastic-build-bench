'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5909<T> = T extends (infer U)[]
  ? DeepReadonlyArray5909<U>
  : T extends object
  ? DeepReadonlyObject5909<T>
  : T;

interface DeepReadonlyArray5909<T> extends ReadonlyArray<DeepReadonly5909<T>> {}

type DeepReadonlyObject5909<T> = {
  readonly [P in keyof T]: DeepReadonly5909<T[P]>;
};

type UnionToIntersection5909<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5909<T> = UnionToIntersection5909<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5909<T extends unknown[], V> = [...T, V];

type TuplifyUnion5909<T, L = LastOf5909<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5909<TuplifyUnion5909<Exclude<T, L>>, L>;

type DeepPartial5909<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5909<T[P]> }
  : T;

type Paths5909<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5909<K, Paths5909<T[K], Prev5909[D]>> : never }[keyof T]
  : never;

type Prev5909 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5909<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5909 {
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

type ConfigPaths5909 = Paths5909<NestedConfig5909>;

interface HeavyProps5909 {
  config: DeepPartial5909<NestedConfig5909>;
  path?: ConfigPaths5909;
}

const HeavyComponent5909 = memo(function HeavyComponent5909({ config }: HeavyProps5909) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5909) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5909 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5909: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5909.displayName = 'HeavyComponent5909';
export default HeavyComponent5909;
