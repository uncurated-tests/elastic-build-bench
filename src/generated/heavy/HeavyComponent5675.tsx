'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5675<T> = T extends (infer U)[]
  ? DeepReadonlyArray5675<U>
  : T extends object
  ? DeepReadonlyObject5675<T>
  : T;

interface DeepReadonlyArray5675<T> extends ReadonlyArray<DeepReadonly5675<T>> {}

type DeepReadonlyObject5675<T> = {
  readonly [P in keyof T]: DeepReadonly5675<T[P]>;
};

type UnionToIntersection5675<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5675<T> = UnionToIntersection5675<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5675<T extends unknown[], V> = [...T, V];

type TuplifyUnion5675<T, L = LastOf5675<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5675<TuplifyUnion5675<Exclude<T, L>>, L>;

type DeepPartial5675<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5675<T[P]> }
  : T;

type Paths5675<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5675<K, Paths5675<T[K], Prev5675[D]>> : never }[keyof T]
  : never;

type Prev5675 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5675<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5675 {
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

type ConfigPaths5675 = Paths5675<NestedConfig5675>;

interface HeavyProps5675 {
  config: DeepPartial5675<NestedConfig5675>;
  path?: ConfigPaths5675;
}

const HeavyComponent5675 = memo(function HeavyComponent5675({ config }: HeavyProps5675) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5675) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5675 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5675: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5675.displayName = 'HeavyComponent5675';
export default HeavyComponent5675;
