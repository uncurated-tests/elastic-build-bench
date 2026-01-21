'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5227<T> = T extends (infer U)[]
  ? DeepReadonlyArray5227<U>
  : T extends object
  ? DeepReadonlyObject5227<T>
  : T;

interface DeepReadonlyArray5227<T> extends ReadonlyArray<DeepReadonly5227<T>> {}

type DeepReadonlyObject5227<T> = {
  readonly [P in keyof T]: DeepReadonly5227<T[P]>;
};

type UnionToIntersection5227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5227<T> = UnionToIntersection5227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5227<T extends unknown[], V> = [...T, V];

type TuplifyUnion5227<T, L = LastOf5227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5227<TuplifyUnion5227<Exclude<T, L>>, L>;

type DeepPartial5227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5227<T[P]> }
  : T;

type Paths5227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5227<K, Paths5227<T[K], Prev5227[D]>> : never }[keyof T]
  : never;

type Prev5227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5227 {
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

type ConfigPaths5227 = Paths5227<NestedConfig5227>;

interface HeavyProps5227 {
  config: DeepPartial5227<NestedConfig5227>;
  path?: ConfigPaths5227;
}

const HeavyComponent5227 = memo(function HeavyComponent5227({ config }: HeavyProps5227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5227.displayName = 'HeavyComponent5227';
export default HeavyComponent5227;
