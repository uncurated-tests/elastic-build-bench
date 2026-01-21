'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5715<T> = T extends (infer U)[]
  ? DeepReadonlyArray5715<U>
  : T extends object
  ? DeepReadonlyObject5715<T>
  : T;

interface DeepReadonlyArray5715<T> extends ReadonlyArray<DeepReadonly5715<T>> {}

type DeepReadonlyObject5715<T> = {
  readonly [P in keyof T]: DeepReadonly5715<T[P]>;
};

type UnionToIntersection5715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5715<T> = UnionToIntersection5715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5715<T extends unknown[], V> = [...T, V];

type TuplifyUnion5715<T, L = LastOf5715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5715<TuplifyUnion5715<Exclude<T, L>>, L>;

type DeepPartial5715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5715<T[P]> }
  : T;

type Paths5715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5715<K, Paths5715<T[K], Prev5715[D]>> : never }[keyof T]
  : never;

type Prev5715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5715 {
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

type ConfigPaths5715 = Paths5715<NestedConfig5715>;

interface HeavyProps5715 {
  config: DeepPartial5715<NestedConfig5715>;
  path?: ConfigPaths5715;
}

const HeavyComponent5715 = memo(function HeavyComponent5715({ config }: HeavyProps5715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5715.displayName = 'HeavyComponent5715';
export default HeavyComponent5715;
