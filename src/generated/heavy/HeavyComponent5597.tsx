'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5597<T> = T extends (infer U)[]
  ? DeepReadonlyArray5597<U>
  : T extends object
  ? DeepReadonlyObject5597<T>
  : T;

interface DeepReadonlyArray5597<T> extends ReadonlyArray<DeepReadonly5597<T>> {}

type DeepReadonlyObject5597<T> = {
  readonly [P in keyof T]: DeepReadonly5597<T[P]>;
};

type UnionToIntersection5597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5597<T> = UnionToIntersection5597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5597<T extends unknown[], V> = [...T, V];

type TuplifyUnion5597<T, L = LastOf5597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5597<TuplifyUnion5597<Exclude<T, L>>, L>;

type DeepPartial5597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5597<T[P]> }
  : T;

type Paths5597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5597<K, Paths5597<T[K], Prev5597[D]>> : never }[keyof T]
  : never;

type Prev5597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5597 {
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

type ConfigPaths5597 = Paths5597<NestedConfig5597>;

interface HeavyProps5597 {
  config: DeepPartial5597<NestedConfig5597>;
  path?: ConfigPaths5597;
}

const HeavyComponent5597 = memo(function HeavyComponent5597({ config }: HeavyProps5597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5597.displayName = 'HeavyComponent5597';
export default HeavyComponent5597;
