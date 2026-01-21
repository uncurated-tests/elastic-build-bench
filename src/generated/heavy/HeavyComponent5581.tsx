'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5581<T> = T extends (infer U)[]
  ? DeepReadonlyArray5581<U>
  : T extends object
  ? DeepReadonlyObject5581<T>
  : T;

interface DeepReadonlyArray5581<T> extends ReadonlyArray<DeepReadonly5581<T>> {}

type DeepReadonlyObject5581<T> = {
  readonly [P in keyof T]: DeepReadonly5581<T[P]>;
};

type UnionToIntersection5581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5581<T> = UnionToIntersection5581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5581<T extends unknown[], V> = [...T, V];

type TuplifyUnion5581<T, L = LastOf5581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5581<TuplifyUnion5581<Exclude<T, L>>, L>;

type DeepPartial5581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5581<T[P]> }
  : T;

type Paths5581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5581<K, Paths5581<T[K], Prev5581[D]>> : never }[keyof T]
  : never;

type Prev5581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5581 {
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

type ConfigPaths5581 = Paths5581<NestedConfig5581>;

interface HeavyProps5581 {
  config: DeepPartial5581<NestedConfig5581>;
  path?: ConfigPaths5581;
}

const HeavyComponent5581 = memo(function HeavyComponent5581({ config }: HeavyProps5581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5581.displayName = 'HeavyComponent5581';
export default HeavyComponent5581;
