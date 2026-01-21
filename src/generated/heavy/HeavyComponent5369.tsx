'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5369<T> = T extends (infer U)[]
  ? DeepReadonlyArray5369<U>
  : T extends object
  ? DeepReadonlyObject5369<T>
  : T;

interface DeepReadonlyArray5369<T> extends ReadonlyArray<DeepReadonly5369<T>> {}

type DeepReadonlyObject5369<T> = {
  readonly [P in keyof T]: DeepReadonly5369<T[P]>;
};

type UnionToIntersection5369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5369<T> = UnionToIntersection5369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5369<T extends unknown[], V> = [...T, V];

type TuplifyUnion5369<T, L = LastOf5369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5369<TuplifyUnion5369<Exclude<T, L>>, L>;

type DeepPartial5369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5369<T[P]> }
  : T;

type Paths5369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5369<K, Paths5369<T[K], Prev5369[D]>> : never }[keyof T]
  : never;

type Prev5369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5369 {
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

type ConfigPaths5369 = Paths5369<NestedConfig5369>;

interface HeavyProps5369 {
  config: DeepPartial5369<NestedConfig5369>;
  path?: ConfigPaths5369;
}

const HeavyComponent5369 = memo(function HeavyComponent5369({ config }: HeavyProps5369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5369.displayName = 'HeavyComponent5369';
export default HeavyComponent5369;
