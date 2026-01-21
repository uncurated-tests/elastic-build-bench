'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5995<T> = T extends (infer U)[]
  ? DeepReadonlyArray5995<U>
  : T extends object
  ? DeepReadonlyObject5995<T>
  : T;

interface DeepReadonlyArray5995<T> extends ReadonlyArray<DeepReadonly5995<T>> {}

type DeepReadonlyObject5995<T> = {
  readonly [P in keyof T]: DeepReadonly5995<T[P]>;
};

type UnionToIntersection5995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5995<T> = UnionToIntersection5995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5995<T extends unknown[], V> = [...T, V];

type TuplifyUnion5995<T, L = LastOf5995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5995<TuplifyUnion5995<Exclude<T, L>>, L>;

type DeepPartial5995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5995<T[P]> }
  : T;

type Paths5995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5995<K, Paths5995<T[K], Prev5995[D]>> : never }[keyof T]
  : never;

type Prev5995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5995 {
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

type ConfigPaths5995 = Paths5995<NestedConfig5995>;

interface HeavyProps5995 {
  config: DeepPartial5995<NestedConfig5995>;
  path?: ConfigPaths5995;
}

const HeavyComponent5995 = memo(function HeavyComponent5995({ config }: HeavyProps5995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5995.displayName = 'HeavyComponent5995';
export default HeavyComponent5995;
