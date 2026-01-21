'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5452<T> = T extends (infer U)[]
  ? DeepReadonlyArray5452<U>
  : T extends object
  ? DeepReadonlyObject5452<T>
  : T;

interface DeepReadonlyArray5452<T> extends ReadonlyArray<DeepReadonly5452<T>> {}

type DeepReadonlyObject5452<T> = {
  readonly [P in keyof T]: DeepReadonly5452<T[P]>;
};

type UnionToIntersection5452<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5452<T> = UnionToIntersection5452<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5452<T extends unknown[], V> = [...T, V];

type TuplifyUnion5452<T, L = LastOf5452<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5452<TuplifyUnion5452<Exclude<T, L>>, L>;

type DeepPartial5452<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5452<T[P]> }
  : T;

type Paths5452<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5452<K, Paths5452<T[K], Prev5452[D]>> : never }[keyof T]
  : never;

type Prev5452 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5452<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5452 {
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

type ConfigPaths5452 = Paths5452<NestedConfig5452>;

interface HeavyProps5452 {
  config: DeepPartial5452<NestedConfig5452>;
  path?: ConfigPaths5452;
}

const HeavyComponent5452 = memo(function HeavyComponent5452({ config }: HeavyProps5452) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5452) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5452 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5452: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5452.displayName = 'HeavyComponent5452';
export default HeavyComponent5452;
