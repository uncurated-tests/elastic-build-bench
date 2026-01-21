'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5538<T> = T extends (infer U)[]
  ? DeepReadonlyArray5538<U>
  : T extends object
  ? DeepReadonlyObject5538<T>
  : T;

interface DeepReadonlyArray5538<T> extends ReadonlyArray<DeepReadonly5538<T>> {}

type DeepReadonlyObject5538<T> = {
  readonly [P in keyof T]: DeepReadonly5538<T[P]>;
};

type UnionToIntersection5538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5538<T> = UnionToIntersection5538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5538<T extends unknown[], V> = [...T, V];

type TuplifyUnion5538<T, L = LastOf5538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5538<TuplifyUnion5538<Exclude<T, L>>, L>;

type DeepPartial5538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5538<T[P]> }
  : T;

type Paths5538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5538<K, Paths5538<T[K], Prev5538[D]>> : never }[keyof T]
  : never;

type Prev5538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5538 {
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

type ConfigPaths5538 = Paths5538<NestedConfig5538>;

interface HeavyProps5538 {
  config: DeepPartial5538<NestedConfig5538>;
  path?: ConfigPaths5538;
}

const HeavyComponent5538 = memo(function HeavyComponent5538({ config }: HeavyProps5538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5538.displayName = 'HeavyComponent5538';
export default HeavyComponent5538;
