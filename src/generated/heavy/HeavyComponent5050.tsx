'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5050<T> = T extends (infer U)[]
  ? DeepReadonlyArray5050<U>
  : T extends object
  ? DeepReadonlyObject5050<T>
  : T;

interface DeepReadonlyArray5050<T> extends ReadonlyArray<DeepReadonly5050<T>> {}

type DeepReadonlyObject5050<T> = {
  readonly [P in keyof T]: DeepReadonly5050<T[P]>;
};

type UnionToIntersection5050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5050<T> = UnionToIntersection5050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5050<T extends unknown[], V> = [...T, V];

type TuplifyUnion5050<T, L = LastOf5050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5050<TuplifyUnion5050<Exclude<T, L>>, L>;

type DeepPartial5050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5050<T[P]> }
  : T;

type Paths5050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5050<K, Paths5050<T[K], Prev5050[D]>> : never }[keyof T]
  : never;

type Prev5050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5050 {
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

type ConfigPaths5050 = Paths5050<NestedConfig5050>;

interface HeavyProps5050 {
  config: DeepPartial5050<NestedConfig5050>;
  path?: ConfigPaths5050;
}

const HeavyComponent5050 = memo(function HeavyComponent5050({ config }: HeavyProps5050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5050.displayName = 'HeavyComponent5050';
export default HeavyComponent5050;
