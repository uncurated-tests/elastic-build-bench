'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5725<T> = T extends (infer U)[]
  ? DeepReadonlyArray5725<U>
  : T extends object
  ? DeepReadonlyObject5725<T>
  : T;

interface DeepReadonlyArray5725<T> extends ReadonlyArray<DeepReadonly5725<T>> {}

type DeepReadonlyObject5725<T> = {
  readonly [P in keyof T]: DeepReadonly5725<T[P]>;
};

type UnionToIntersection5725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5725<T> = UnionToIntersection5725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5725<T extends unknown[], V> = [...T, V];

type TuplifyUnion5725<T, L = LastOf5725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5725<TuplifyUnion5725<Exclude<T, L>>, L>;

type DeepPartial5725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5725<T[P]> }
  : T;

type Paths5725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5725<K, Paths5725<T[K], Prev5725[D]>> : never }[keyof T]
  : never;

type Prev5725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5725 {
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

type ConfigPaths5725 = Paths5725<NestedConfig5725>;

interface HeavyProps5725 {
  config: DeepPartial5725<NestedConfig5725>;
  path?: ConfigPaths5725;
}

const HeavyComponent5725 = memo(function HeavyComponent5725({ config }: HeavyProps5725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5725.displayName = 'HeavyComponent5725';
export default HeavyComponent5725;
