'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5246<T> = T extends (infer U)[]
  ? DeepReadonlyArray5246<U>
  : T extends object
  ? DeepReadonlyObject5246<T>
  : T;

interface DeepReadonlyArray5246<T> extends ReadonlyArray<DeepReadonly5246<T>> {}

type DeepReadonlyObject5246<T> = {
  readonly [P in keyof T]: DeepReadonly5246<T[P]>;
};

type UnionToIntersection5246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5246<T> = UnionToIntersection5246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5246<T extends unknown[], V> = [...T, V];

type TuplifyUnion5246<T, L = LastOf5246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5246<TuplifyUnion5246<Exclude<T, L>>, L>;

type DeepPartial5246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5246<T[P]> }
  : T;

type Paths5246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5246<K, Paths5246<T[K], Prev5246[D]>> : never }[keyof T]
  : never;

type Prev5246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5246 {
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

type ConfigPaths5246 = Paths5246<NestedConfig5246>;

interface HeavyProps5246 {
  config: DeepPartial5246<NestedConfig5246>;
  path?: ConfigPaths5246;
}

const HeavyComponent5246 = memo(function HeavyComponent5246({ config }: HeavyProps5246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5246.displayName = 'HeavyComponent5246';
export default HeavyComponent5246;
