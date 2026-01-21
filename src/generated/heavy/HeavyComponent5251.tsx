'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5251<T> = T extends (infer U)[]
  ? DeepReadonlyArray5251<U>
  : T extends object
  ? DeepReadonlyObject5251<T>
  : T;

interface DeepReadonlyArray5251<T> extends ReadonlyArray<DeepReadonly5251<T>> {}

type DeepReadonlyObject5251<T> = {
  readonly [P in keyof T]: DeepReadonly5251<T[P]>;
};

type UnionToIntersection5251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5251<T> = UnionToIntersection5251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5251<T extends unknown[], V> = [...T, V];

type TuplifyUnion5251<T, L = LastOf5251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5251<TuplifyUnion5251<Exclude<T, L>>, L>;

type DeepPartial5251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5251<T[P]> }
  : T;

type Paths5251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5251<K, Paths5251<T[K], Prev5251[D]>> : never }[keyof T]
  : never;

type Prev5251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5251 {
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

type ConfigPaths5251 = Paths5251<NestedConfig5251>;

interface HeavyProps5251 {
  config: DeepPartial5251<NestedConfig5251>;
  path?: ConfigPaths5251;
}

const HeavyComponent5251 = memo(function HeavyComponent5251({ config }: HeavyProps5251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5251.displayName = 'HeavyComponent5251';
export default HeavyComponent5251;
