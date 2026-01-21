'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7923<T> = T extends (infer U)[]
  ? DeepReadonlyArray7923<U>
  : T extends object
  ? DeepReadonlyObject7923<T>
  : T;

interface DeepReadonlyArray7923<T> extends ReadonlyArray<DeepReadonly7923<T>> {}

type DeepReadonlyObject7923<T> = {
  readonly [P in keyof T]: DeepReadonly7923<T[P]>;
};

type UnionToIntersection7923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7923<T> = UnionToIntersection7923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7923<T extends unknown[], V> = [...T, V];

type TuplifyUnion7923<T, L = LastOf7923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7923<TuplifyUnion7923<Exclude<T, L>>, L>;

type DeepPartial7923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7923<T[P]> }
  : T;

type Paths7923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7923<K, Paths7923<T[K], Prev7923[D]>> : never }[keyof T]
  : never;

type Prev7923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7923 {
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

type ConfigPaths7923 = Paths7923<NestedConfig7923>;

interface HeavyProps7923 {
  config: DeepPartial7923<NestedConfig7923>;
  path?: ConfigPaths7923;
}

const HeavyComponent7923 = memo(function HeavyComponent7923({ config }: HeavyProps7923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7923.displayName = 'HeavyComponent7923';
export default HeavyComponent7923;
