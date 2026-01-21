'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5173<T> = T extends (infer U)[]
  ? DeepReadonlyArray5173<U>
  : T extends object
  ? DeepReadonlyObject5173<T>
  : T;

interface DeepReadonlyArray5173<T> extends ReadonlyArray<DeepReadonly5173<T>> {}

type DeepReadonlyObject5173<T> = {
  readonly [P in keyof T]: DeepReadonly5173<T[P]>;
};

type UnionToIntersection5173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5173<T> = UnionToIntersection5173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5173<T extends unknown[], V> = [...T, V];

type TuplifyUnion5173<T, L = LastOf5173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5173<TuplifyUnion5173<Exclude<T, L>>, L>;

type DeepPartial5173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5173<T[P]> }
  : T;

type Paths5173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5173<K, Paths5173<T[K], Prev5173[D]>> : never }[keyof T]
  : never;

type Prev5173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5173 {
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

type ConfigPaths5173 = Paths5173<NestedConfig5173>;

interface HeavyProps5173 {
  config: DeepPartial5173<NestedConfig5173>;
  path?: ConfigPaths5173;
}

const HeavyComponent5173 = memo(function HeavyComponent5173({ config }: HeavyProps5173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5173.displayName = 'HeavyComponent5173';
export default HeavyComponent5173;
