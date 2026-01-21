'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5000<T> = T extends (infer U)[]
  ? DeepReadonlyArray5000<U>
  : T extends object
  ? DeepReadonlyObject5000<T>
  : T;

interface DeepReadonlyArray5000<T> extends ReadonlyArray<DeepReadonly5000<T>> {}

type DeepReadonlyObject5000<T> = {
  readonly [P in keyof T]: DeepReadonly5000<T[P]>;
};

type UnionToIntersection5000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5000<T> = UnionToIntersection5000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5000<T extends unknown[], V> = [...T, V];

type TuplifyUnion5000<T, L = LastOf5000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5000<TuplifyUnion5000<Exclude<T, L>>, L>;

type DeepPartial5000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5000<T[P]> }
  : T;

type Paths5000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5000<K, Paths5000<T[K], Prev5000[D]>> : never }[keyof T]
  : never;

type Prev5000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5000 {
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

type ConfigPaths5000 = Paths5000<NestedConfig5000>;

interface HeavyProps5000 {
  config: DeepPartial5000<NestedConfig5000>;
  path?: ConfigPaths5000;
}

const HeavyComponent5000 = memo(function HeavyComponent5000({ config }: HeavyProps5000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5000.displayName = 'HeavyComponent5000';
export default HeavyComponent5000;
