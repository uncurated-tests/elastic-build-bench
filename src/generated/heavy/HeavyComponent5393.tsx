'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5393<T> = T extends (infer U)[]
  ? DeepReadonlyArray5393<U>
  : T extends object
  ? DeepReadonlyObject5393<T>
  : T;

interface DeepReadonlyArray5393<T> extends ReadonlyArray<DeepReadonly5393<T>> {}

type DeepReadonlyObject5393<T> = {
  readonly [P in keyof T]: DeepReadonly5393<T[P]>;
};

type UnionToIntersection5393<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5393<T> = UnionToIntersection5393<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5393<T extends unknown[], V> = [...T, V];

type TuplifyUnion5393<T, L = LastOf5393<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5393<TuplifyUnion5393<Exclude<T, L>>, L>;

type DeepPartial5393<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5393<T[P]> }
  : T;

type Paths5393<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5393<K, Paths5393<T[K], Prev5393[D]>> : never }[keyof T]
  : never;

type Prev5393 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5393<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5393 {
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

type ConfigPaths5393 = Paths5393<NestedConfig5393>;

interface HeavyProps5393 {
  config: DeepPartial5393<NestedConfig5393>;
  path?: ConfigPaths5393;
}

const HeavyComponent5393 = memo(function HeavyComponent5393({ config }: HeavyProps5393) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5393) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5393 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5393: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5393.displayName = 'HeavyComponent5393';
export default HeavyComponent5393;
