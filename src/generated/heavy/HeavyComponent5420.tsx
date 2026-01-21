'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5420<T> = T extends (infer U)[]
  ? DeepReadonlyArray5420<U>
  : T extends object
  ? DeepReadonlyObject5420<T>
  : T;

interface DeepReadonlyArray5420<T> extends ReadonlyArray<DeepReadonly5420<T>> {}

type DeepReadonlyObject5420<T> = {
  readonly [P in keyof T]: DeepReadonly5420<T[P]>;
};

type UnionToIntersection5420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5420<T> = UnionToIntersection5420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5420<T extends unknown[], V> = [...T, V];

type TuplifyUnion5420<T, L = LastOf5420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5420<TuplifyUnion5420<Exclude<T, L>>, L>;

type DeepPartial5420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5420<T[P]> }
  : T;

type Paths5420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5420<K, Paths5420<T[K], Prev5420[D]>> : never }[keyof T]
  : never;

type Prev5420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5420 {
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

type ConfigPaths5420 = Paths5420<NestedConfig5420>;

interface HeavyProps5420 {
  config: DeepPartial5420<NestedConfig5420>;
  path?: ConfigPaths5420;
}

const HeavyComponent5420 = memo(function HeavyComponent5420({ config }: HeavyProps5420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5420.displayName = 'HeavyComponent5420';
export default HeavyComponent5420;
