'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5230<T> = T extends (infer U)[]
  ? DeepReadonlyArray5230<U>
  : T extends object
  ? DeepReadonlyObject5230<T>
  : T;

interface DeepReadonlyArray5230<T> extends ReadonlyArray<DeepReadonly5230<T>> {}

type DeepReadonlyObject5230<T> = {
  readonly [P in keyof T]: DeepReadonly5230<T[P]>;
};

type UnionToIntersection5230<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5230<T> = UnionToIntersection5230<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5230<T extends unknown[], V> = [...T, V];

type TuplifyUnion5230<T, L = LastOf5230<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5230<TuplifyUnion5230<Exclude<T, L>>, L>;

type DeepPartial5230<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5230<T[P]> }
  : T;

type Paths5230<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5230<K, Paths5230<T[K], Prev5230[D]>> : never }[keyof T]
  : never;

type Prev5230 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5230<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5230 {
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

type ConfigPaths5230 = Paths5230<NestedConfig5230>;

interface HeavyProps5230 {
  config: DeepPartial5230<NestedConfig5230>;
  path?: ConfigPaths5230;
}

const HeavyComponent5230 = memo(function HeavyComponent5230({ config }: HeavyProps5230) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5230) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5230 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5230: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5230.displayName = 'HeavyComponent5230';
export default HeavyComponent5230;
