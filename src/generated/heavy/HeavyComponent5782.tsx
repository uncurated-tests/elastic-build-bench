'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5782<T> = T extends (infer U)[]
  ? DeepReadonlyArray5782<U>
  : T extends object
  ? DeepReadonlyObject5782<T>
  : T;

interface DeepReadonlyArray5782<T> extends ReadonlyArray<DeepReadonly5782<T>> {}

type DeepReadonlyObject5782<T> = {
  readonly [P in keyof T]: DeepReadonly5782<T[P]>;
};

type UnionToIntersection5782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5782<T> = UnionToIntersection5782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5782<T extends unknown[], V> = [...T, V];

type TuplifyUnion5782<T, L = LastOf5782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5782<TuplifyUnion5782<Exclude<T, L>>, L>;

type DeepPartial5782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5782<T[P]> }
  : T;

type Paths5782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5782<K, Paths5782<T[K], Prev5782[D]>> : never }[keyof T]
  : never;

type Prev5782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5782 {
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

type ConfigPaths5782 = Paths5782<NestedConfig5782>;

interface HeavyProps5782 {
  config: DeepPartial5782<NestedConfig5782>;
  path?: ConfigPaths5782;
}

const HeavyComponent5782 = memo(function HeavyComponent5782({ config }: HeavyProps5782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5782.displayName = 'HeavyComponent5782';
export default HeavyComponent5782;
