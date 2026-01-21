'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7052<T> = T extends (infer U)[]
  ? DeepReadonlyArray7052<U>
  : T extends object
  ? DeepReadonlyObject7052<T>
  : T;

interface DeepReadonlyArray7052<T> extends ReadonlyArray<DeepReadonly7052<T>> {}

type DeepReadonlyObject7052<T> = {
  readonly [P in keyof T]: DeepReadonly7052<T[P]>;
};

type UnionToIntersection7052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7052<T> = UnionToIntersection7052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7052<T extends unknown[], V> = [...T, V];

type TuplifyUnion7052<T, L = LastOf7052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7052<TuplifyUnion7052<Exclude<T, L>>, L>;

type DeepPartial7052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7052<T[P]> }
  : T;

type Paths7052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7052<K, Paths7052<T[K], Prev7052[D]>> : never }[keyof T]
  : never;

type Prev7052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7052 {
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

type ConfigPaths7052 = Paths7052<NestedConfig7052>;

interface HeavyProps7052 {
  config: DeepPartial7052<NestedConfig7052>;
  path?: ConfigPaths7052;
}

const HeavyComponent7052 = memo(function HeavyComponent7052({ config }: HeavyProps7052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7052.displayName = 'HeavyComponent7052';
export default HeavyComponent7052;
