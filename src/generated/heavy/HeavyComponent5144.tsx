'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5144<T> = T extends (infer U)[]
  ? DeepReadonlyArray5144<U>
  : T extends object
  ? DeepReadonlyObject5144<T>
  : T;

interface DeepReadonlyArray5144<T> extends ReadonlyArray<DeepReadonly5144<T>> {}

type DeepReadonlyObject5144<T> = {
  readonly [P in keyof T]: DeepReadonly5144<T[P]>;
};

type UnionToIntersection5144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5144<T> = UnionToIntersection5144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5144<T extends unknown[], V> = [...T, V];

type TuplifyUnion5144<T, L = LastOf5144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5144<TuplifyUnion5144<Exclude<T, L>>, L>;

type DeepPartial5144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5144<T[P]> }
  : T;

type Paths5144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5144<K, Paths5144<T[K], Prev5144[D]>> : never }[keyof T]
  : never;

type Prev5144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5144 {
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

type ConfigPaths5144 = Paths5144<NestedConfig5144>;

interface HeavyProps5144 {
  config: DeepPartial5144<NestedConfig5144>;
  path?: ConfigPaths5144;
}

const HeavyComponent5144 = memo(function HeavyComponent5144({ config }: HeavyProps5144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5144.displayName = 'HeavyComponent5144';
export default HeavyComponent5144;
