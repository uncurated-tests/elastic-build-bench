'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5968<T> = T extends (infer U)[]
  ? DeepReadonlyArray5968<U>
  : T extends object
  ? DeepReadonlyObject5968<T>
  : T;

interface DeepReadonlyArray5968<T> extends ReadonlyArray<DeepReadonly5968<T>> {}

type DeepReadonlyObject5968<T> = {
  readonly [P in keyof T]: DeepReadonly5968<T[P]>;
};

type UnionToIntersection5968<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5968<T> = UnionToIntersection5968<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5968<T extends unknown[], V> = [...T, V];

type TuplifyUnion5968<T, L = LastOf5968<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5968<TuplifyUnion5968<Exclude<T, L>>, L>;

type DeepPartial5968<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5968<T[P]> }
  : T;

type Paths5968<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5968<K, Paths5968<T[K], Prev5968[D]>> : never }[keyof T]
  : never;

type Prev5968 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5968<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5968 {
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

type ConfigPaths5968 = Paths5968<NestedConfig5968>;

interface HeavyProps5968 {
  config: DeepPartial5968<NestedConfig5968>;
  path?: ConfigPaths5968;
}

const HeavyComponent5968 = memo(function HeavyComponent5968({ config }: HeavyProps5968) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5968) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5968 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5968: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5968.displayName = 'HeavyComponent5968';
export default HeavyComponent5968;
