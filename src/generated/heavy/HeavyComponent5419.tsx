'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5419<T> = T extends (infer U)[]
  ? DeepReadonlyArray5419<U>
  : T extends object
  ? DeepReadonlyObject5419<T>
  : T;

interface DeepReadonlyArray5419<T> extends ReadonlyArray<DeepReadonly5419<T>> {}

type DeepReadonlyObject5419<T> = {
  readonly [P in keyof T]: DeepReadonly5419<T[P]>;
};

type UnionToIntersection5419<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5419<T> = UnionToIntersection5419<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5419<T extends unknown[], V> = [...T, V];

type TuplifyUnion5419<T, L = LastOf5419<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5419<TuplifyUnion5419<Exclude<T, L>>, L>;

type DeepPartial5419<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5419<T[P]> }
  : T;

type Paths5419<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5419<K, Paths5419<T[K], Prev5419[D]>> : never }[keyof T]
  : never;

type Prev5419 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5419<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5419 {
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

type ConfigPaths5419 = Paths5419<NestedConfig5419>;

interface HeavyProps5419 {
  config: DeepPartial5419<NestedConfig5419>;
  path?: ConfigPaths5419;
}

const HeavyComponent5419 = memo(function HeavyComponent5419({ config }: HeavyProps5419) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5419) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5419 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5419: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5419.displayName = 'HeavyComponent5419';
export default HeavyComponent5419;
