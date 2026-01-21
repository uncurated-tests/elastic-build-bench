'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5252<T> = T extends (infer U)[]
  ? DeepReadonlyArray5252<U>
  : T extends object
  ? DeepReadonlyObject5252<T>
  : T;

interface DeepReadonlyArray5252<T> extends ReadonlyArray<DeepReadonly5252<T>> {}

type DeepReadonlyObject5252<T> = {
  readonly [P in keyof T]: DeepReadonly5252<T[P]>;
};

type UnionToIntersection5252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5252<T> = UnionToIntersection5252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5252<T extends unknown[], V> = [...T, V];

type TuplifyUnion5252<T, L = LastOf5252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5252<TuplifyUnion5252<Exclude<T, L>>, L>;

type DeepPartial5252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5252<T[P]> }
  : T;

type Paths5252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5252<K, Paths5252<T[K], Prev5252[D]>> : never }[keyof T]
  : never;

type Prev5252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5252 {
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

type ConfigPaths5252 = Paths5252<NestedConfig5252>;

interface HeavyProps5252 {
  config: DeepPartial5252<NestedConfig5252>;
  path?: ConfigPaths5252;
}

const HeavyComponent5252 = memo(function HeavyComponent5252({ config }: HeavyProps5252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5252.displayName = 'HeavyComponent5252';
export default HeavyComponent5252;
