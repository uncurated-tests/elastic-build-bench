'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5347<T> = T extends (infer U)[]
  ? DeepReadonlyArray5347<U>
  : T extends object
  ? DeepReadonlyObject5347<T>
  : T;

interface DeepReadonlyArray5347<T> extends ReadonlyArray<DeepReadonly5347<T>> {}

type DeepReadonlyObject5347<T> = {
  readonly [P in keyof T]: DeepReadonly5347<T[P]>;
};

type UnionToIntersection5347<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5347<T> = UnionToIntersection5347<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5347<T extends unknown[], V> = [...T, V];

type TuplifyUnion5347<T, L = LastOf5347<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5347<TuplifyUnion5347<Exclude<T, L>>, L>;

type DeepPartial5347<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5347<T[P]> }
  : T;

type Paths5347<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5347<K, Paths5347<T[K], Prev5347[D]>> : never }[keyof T]
  : never;

type Prev5347 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5347<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5347 {
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

type ConfigPaths5347 = Paths5347<NestedConfig5347>;

interface HeavyProps5347 {
  config: DeepPartial5347<NestedConfig5347>;
  path?: ConfigPaths5347;
}

const HeavyComponent5347 = memo(function HeavyComponent5347({ config }: HeavyProps5347) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5347) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5347 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5347: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5347.displayName = 'HeavyComponent5347';
export default HeavyComponent5347;
