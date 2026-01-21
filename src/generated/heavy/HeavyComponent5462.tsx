'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5462<T> = T extends (infer U)[]
  ? DeepReadonlyArray5462<U>
  : T extends object
  ? DeepReadonlyObject5462<T>
  : T;

interface DeepReadonlyArray5462<T> extends ReadonlyArray<DeepReadonly5462<T>> {}

type DeepReadonlyObject5462<T> = {
  readonly [P in keyof T]: DeepReadonly5462<T[P]>;
};

type UnionToIntersection5462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5462<T> = UnionToIntersection5462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5462<T extends unknown[], V> = [...T, V];

type TuplifyUnion5462<T, L = LastOf5462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5462<TuplifyUnion5462<Exclude<T, L>>, L>;

type DeepPartial5462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5462<T[P]> }
  : T;

type Paths5462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5462<K, Paths5462<T[K], Prev5462[D]>> : never }[keyof T]
  : never;

type Prev5462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5462 {
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

type ConfigPaths5462 = Paths5462<NestedConfig5462>;

interface HeavyProps5462 {
  config: DeepPartial5462<NestedConfig5462>;
  path?: ConfigPaths5462;
}

const HeavyComponent5462 = memo(function HeavyComponent5462({ config }: HeavyProps5462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5462.displayName = 'HeavyComponent5462';
export default HeavyComponent5462;
