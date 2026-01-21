'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5409<T> = T extends (infer U)[]
  ? DeepReadonlyArray5409<U>
  : T extends object
  ? DeepReadonlyObject5409<T>
  : T;

interface DeepReadonlyArray5409<T> extends ReadonlyArray<DeepReadonly5409<T>> {}

type DeepReadonlyObject5409<T> = {
  readonly [P in keyof T]: DeepReadonly5409<T[P]>;
};

type UnionToIntersection5409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5409<T> = UnionToIntersection5409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5409<T extends unknown[], V> = [...T, V];

type TuplifyUnion5409<T, L = LastOf5409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5409<TuplifyUnion5409<Exclude<T, L>>, L>;

type DeepPartial5409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5409<T[P]> }
  : T;

type Paths5409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5409<K, Paths5409<T[K], Prev5409[D]>> : never }[keyof T]
  : never;

type Prev5409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5409 {
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

type ConfigPaths5409 = Paths5409<NestedConfig5409>;

interface HeavyProps5409 {
  config: DeepPartial5409<NestedConfig5409>;
  path?: ConfigPaths5409;
}

const HeavyComponent5409 = memo(function HeavyComponent5409({ config }: HeavyProps5409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5409.displayName = 'HeavyComponent5409';
export default HeavyComponent5409;
