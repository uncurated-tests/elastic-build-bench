'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5855<T> = T extends (infer U)[]
  ? DeepReadonlyArray5855<U>
  : T extends object
  ? DeepReadonlyObject5855<T>
  : T;

interface DeepReadonlyArray5855<T> extends ReadonlyArray<DeepReadonly5855<T>> {}

type DeepReadonlyObject5855<T> = {
  readonly [P in keyof T]: DeepReadonly5855<T[P]>;
};

type UnionToIntersection5855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5855<T> = UnionToIntersection5855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5855<T extends unknown[], V> = [...T, V];

type TuplifyUnion5855<T, L = LastOf5855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5855<TuplifyUnion5855<Exclude<T, L>>, L>;

type DeepPartial5855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5855<T[P]> }
  : T;

type Paths5855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5855<K, Paths5855<T[K], Prev5855[D]>> : never }[keyof T]
  : never;

type Prev5855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5855 {
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

type ConfigPaths5855 = Paths5855<NestedConfig5855>;

interface HeavyProps5855 {
  config: DeepPartial5855<NestedConfig5855>;
  path?: ConfigPaths5855;
}

const HeavyComponent5855 = memo(function HeavyComponent5855({ config }: HeavyProps5855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5855.displayName = 'HeavyComponent5855';
export default HeavyComponent5855;
