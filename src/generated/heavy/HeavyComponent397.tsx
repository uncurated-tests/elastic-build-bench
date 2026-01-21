'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly397<T> = T extends (infer U)[]
  ? DeepReadonlyArray397<U>
  : T extends object
  ? DeepReadonlyObject397<T>
  : T;

interface DeepReadonlyArray397<T> extends ReadonlyArray<DeepReadonly397<T>> {}

type DeepReadonlyObject397<T> = {
  readonly [P in keyof T]: DeepReadonly397<T[P]>;
};

type UnionToIntersection397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf397<T> = UnionToIntersection397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push397<T extends unknown[], V> = [...T, V];

type TuplifyUnion397<T, L = LastOf397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push397<TuplifyUnion397<Exclude<T, L>>, L>;

type DeepPartial397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial397<T[P]> }
  : T;

type Paths397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join397<K, Paths397<T[K], Prev397[D]>> : never }[keyof T]
  : never;

type Prev397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig397 {
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

type ConfigPaths397 = Paths397<NestedConfig397>;

interface HeavyProps397 {
  config: DeepPartial397<NestedConfig397>;
  path?: ConfigPaths397;
}

const HeavyComponent397 = memo(function HeavyComponent397({ config }: HeavyProps397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent397.displayName = 'HeavyComponent397';
export default HeavyComponent397;
