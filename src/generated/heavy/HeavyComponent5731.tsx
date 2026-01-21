'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5731<T> = T extends (infer U)[]
  ? DeepReadonlyArray5731<U>
  : T extends object
  ? DeepReadonlyObject5731<T>
  : T;

interface DeepReadonlyArray5731<T> extends ReadonlyArray<DeepReadonly5731<T>> {}

type DeepReadonlyObject5731<T> = {
  readonly [P in keyof T]: DeepReadonly5731<T[P]>;
};

type UnionToIntersection5731<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5731<T> = UnionToIntersection5731<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5731<T extends unknown[], V> = [...T, V];

type TuplifyUnion5731<T, L = LastOf5731<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5731<TuplifyUnion5731<Exclude<T, L>>, L>;

type DeepPartial5731<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5731<T[P]> }
  : T;

type Paths5731<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5731<K, Paths5731<T[K], Prev5731[D]>> : never }[keyof T]
  : never;

type Prev5731 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5731<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5731 {
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

type ConfigPaths5731 = Paths5731<NestedConfig5731>;

interface HeavyProps5731 {
  config: DeepPartial5731<NestedConfig5731>;
  path?: ConfigPaths5731;
}

const HeavyComponent5731 = memo(function HeavyComponent5731({ config }: HeavyProps5731) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5731) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5731 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5731: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5731.displayName = 'HeavyComponent5731';
export default HeavyComponent5731;
