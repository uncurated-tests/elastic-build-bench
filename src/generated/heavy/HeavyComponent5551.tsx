'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5551<T> = T extends (infer U)[]
  ? DeepReadonlyArray5551<U>
  : T extends object
  ? DeepReadonlyObject5551<T>
  : T;

interface DeepReadonlyArray5551<T> extends ReadonlyArray<DeepReadonly5551<T>> {}

type DeepReadonlyObject5551<T> = {
  readonly [P in keyof T]: DeepReadonly5551<T[P]>;
};

type UnionToIntersection5551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5551<T> = UnionToIntersection5551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5551<T extends unknown[], V> = [...T, V];

type TuplifyUnion5551<T, L = LastOf5551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5551<TuplifyUnion5551<Exclude<T, L>>, L>;

type DeepPartial5551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5551<T[P]> }
  : T;

type Paths5551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5551<K, Paths5551<T[K], Prev5551[D]>> : never }[keyof T]
  : never;

type Prev5551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5551 {
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

type ConfigPaths5551 = Paths5551<NestedConfig5551>;

interface HeavyProps5551 {
  config: DeepPartial5551<NestedConfig5551>;
  path?: ConfigPaths5551;
}

const HeavyComponent5551 = memo(function HeavyComponent5551({ config }: HeavyProps5551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5551.displayName = 'HeavyComponent5551';
export default HeavyComponent5551;
