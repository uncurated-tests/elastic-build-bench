'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5874<T> = T extends (infer U)[]
  ? DeepReadonlyArray5874<U>
  : T extends object
  ? DeepReadonlyObject5874<T>
  : T;

interface DeepReadonlyArray5874<T> extends ReadonlyArray<DeepReadonly5874<T>> {}

type DeepReadonlyObject5874<T> = {
  readonly [P in keyof T]: DeepReadonly5874<T[P]>;
};

type UnionToIntersection5874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5874<T> = UnionToIntersection5874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5874<T extends unknown[], V> = [...T, V];

type TuplifyUnion5874<T, L = LastOf5874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5874<TuplifyUnion5874<Exclude<T, L>>, L>;

type DeepPartial5874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5874<T[P]> }
  : T;

type Paths5874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5874<K, Paths5874<T[K], Prev5874[D]>> : never }[keyof T]
  : never;

type Prev5874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5874 {
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

type ConfigPaths5874 = Paths5874<NestedConfig5874>;

interface HeavyProps5874 {
  config: DeepPartial5874<NestedConfig5874>;
  path?: ConfigPaths5874;
}

const HeavyComponent5874 = memo(function HeavyComponent5874({ config }: HeavyProps5874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5874.displayName = 'HeavyComponent5874';
export default HeavyComponent5874;
