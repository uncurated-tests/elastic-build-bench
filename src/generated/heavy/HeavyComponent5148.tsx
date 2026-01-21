'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5148<T> = T extends (infer U)[]
  ? DeepReadonlyArray5148<U>
  : T extends object
  ? DeepReadonlyObject5148<T>
  : T;

interface DeepReadonlyArray5148<T> extends ReadonlyArray<DeepReadonly5148<T>> {}

type DeepReadonlyObject5148<T> = {
  readonly [P in keyof T]: DeepReadonly5148<T[P]>;
};

type UnionToIntersection5148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5148<T> = UnionToIntersection5148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5148<T extends unknown[], V> = [...T, V];

type TuplifyUnion5148<T, L = LastOf5148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5148<TuplifyUnion5148<Exclude<T, L>>, L>;

type DeepPartial5148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5148<T[P]> }
  : T;

type Paths5148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5148<K, Paths5148<T[K], Prev5148[D]>> : never }[keyof T]
  : never;

type Prev5148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5148 {
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

type ConfigPaths5148 = Paths5148<NestedConfig5148>;

interface HeavyProps5148 {
  config: DeepPartial5148<NestedConfig5148>;
  path?: ConfigPaths5148;
}

const HeavyComponent5148 = memo(function HeavyComponent5148({ config }: HeavyProps5148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5148.displayName = 'HeavyComponent5148';
export default HeavyComponent5148;
