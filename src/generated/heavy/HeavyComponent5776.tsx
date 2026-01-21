'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5776<T> = T extends (infer U)[]
  ? DeepReadonlyArray5776<U>
  : T extends object
  ? DeepReadonlyObject5776<T>
  : T;

interface DeepReadonlyArray5776<T> extends ReadonlyArray<DeepReadonly5776<T>> {}

type DeepReadonlyObject5776<T> = {
  readonly [P in keyof T]: DeepReadonly5776<T[P]>;
};

type UnionToIntersection5776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5776<T> = UnionToIntersection5776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5776<T extends unknown[], V> = [...T, V];

type TuplifyUnion5776<T, L = LastOf5776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5776<TuplifyUnion5776<Exclude<T, L>>, L>;

type DeepPartial5776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5776<T[P]> }
  : T;

type Paths5776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5776<K, Paths5776<T[K], Prev5776[D]>> : never }[keyof T]
  : never;

type Prev5776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5776 {
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

type ConfigPaths5776 = Paths5776<NestedConfig5776>;

interface HeavyProps5776 {
  config: DeepPartial5776<NestedConfig5776>;
  path?: ConfigPaths5776;
}

const HeavyComponent5776 = memo(function HeavyComponent5776({ config }: HeavyProps5776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5776.displayName = 'HeavyComponent5776';
export default HeavyComponent5776;
