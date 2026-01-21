'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5195<T> = T extends (infer U)[]
  ? DeepReadonlyArray5195<U>
  : T extends object
  ? DeepReadonlyObject5195<T>
  : T;

interface DeepReadonlyArray5195<T> extends ReadonlyArray<DeepReadonly5195<T>> {}

type DeepReadonlyObject5195<T> = {
  readonly [P in keyof T]: DeepReadonly5195<T[P]>;
};

type UnionToIntersection5195<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5195<T> = UnionToIntersection5195<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5195<T extends unknown[], V> = [...T, V];

type TuplifyUnion5195<T, L = LastOf5195<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5195<TuplifyUnion5195<Exclude<T, L>>, L>;

type DeepPartial5195<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5195<T[P]> }
  : T;

type Paths5195<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5195<K, Paths5195<T[K], Prev5195[D]>> : never }[keyof T]
  : never;

type Prev5195 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5195<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5195 {
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

type ConfigPaths5195 = Paths5195<NestedConfig5195>;

interface HeavyProps5195 {
  config: DeepPartial5195<NestedConfig5195>;
  path?: ConfigPaths5195;
}

const HeavyComponent5195 = memo(function HeavyComponent5195({ config }: HeavyProps5195) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5195) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5195 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5195: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5195.displayName = 'HeavyComponent5195';
export default HeavyComponent5195;
