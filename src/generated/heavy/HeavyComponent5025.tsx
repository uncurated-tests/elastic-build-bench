'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5025<T> = T extends (infer U)[]
  ? DeepReadonlyArray5025<U>
  : T extends object
  ? DeepReadonlyObject5025<T>
  : T;

interface DeepReadonlyArray5025<T> extends ReadonlyArray<DeepReadonly5025<T>> {}

type DeepReadonlyObject5025<T> = {
  readonly [P in keyof T]: DeepReadonly5025<T[P]>;
};

type UnionToIntersection5025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5025<T> = UnionToIntersection5025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5025<T extends unknown[], V> = [...T, V];

type TuplifyUnion5025<T, L = LastOf5025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5025<TuplifyUnion5025<Exclude<T, L>>, L>;

type DeepPartial5025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5025<T[P]> }
  : T;

type Paths5025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5025<K, Paths5025<T[K], Prev5025[D]>> : never }[keyof T]
  : never;

type Prev5025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5025 {
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

type ConfigPaths5025 = Paths5025<NestedConfig5025>;

interface HeavyProps5025 {
  config: DeepPartial5025<NestedConfig5025>;
  path?: ConfigPaths5025;
}

const HeavyComponent5025 = memo(function HeavyComponent5025({ config }: HeavyProps5025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5025.displayName = 'HeavyComponent5025';
export default HeavyComponent5025;
