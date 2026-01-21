'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5038<T> = T extends (infer U)[]
  ? DeepReadonlyArray5038<U>
  : T extends object
  ? DeepReadonlyObject5038<T>
  : T;

interface DeepReadonlyArray5038<T> extends ReadonlyArray<DeepReadonly5038<T>> {}

type DeepReadonlyObject5038<T> = {
  readonly [P in keyof T]: DeepReadonly5038<T[P]>;
};

type UnionToIntersection5038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5038<T> = UnionToIntersection5038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5038<T extends unknown[], V> = [...T, V];

type TuplifyUnion5038<T, L = LastOf5038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5038<TuplifyUnion5038<Exclude<T, L>>, L>;

type DeepPartial5038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5038<T[P]> }
  : T;

type Paths5038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5038<K, Paths5038<T[K], Prev5038[D]>> : never }[keyof T]
  : never;

type Prev5038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5038 {
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

type ConfigPaths5038 = Paths5038<NestedConfig5038>;

interface HeavyProps5038 {
  config: DeepPartial5038<NestedConfig5038>;
  path?: ConfigPaths5038;
}

const HeavyComponent5038 = memo(function HeavyComponent5038({ config }: HeavyProps5038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5038.displayName = 'HeavyComponent5038';
export default HeavyComponent5038;
