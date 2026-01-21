'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7164<T> = T extends (infer U)[]
  ? DeepReadonlyArray7164<U>
  : T extends object
  ? DeepReadonlyObject7164<T>
  : T;

interface DeepReadonlyArray7164<T> extends ReadonlyArray<DeepReadonly7164<T>> {}

type DeepReadonlyObject7164<T> = {
  readonly [P in keyof T]: DeepReadonly7164<T[P]>;
};

type UnionToIntersection7164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7164<T> = UnionToIntersection7164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7164<T extends unknown[], V> = [...T, V];

type TuplifyUnion7164<T, L = LastOf7164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7164<TuplifyUnion7164<Exclude<T, L>>, L>;

type DeepPartial7164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7164<T[P]> }
  : T;

type Paths7164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7164<K, Paths7164<T[K], Prev7164[D]>> : never }[keyof T]
  : never;

type Prev7164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7164 {
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

type ConfigPaths7164 = Paths7164<NestedConfig7164>;

interface HeavyProps7164 {
  config: DeepPartial7164<NestedConfig7164>;
  path?: ConfigPaths7164;
}

const HeavyComponent7164 = memo(function HeavyComponent7164({ config }: HeavyProps7164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7164.displayName = 'HeavyComponent7164';
export default HeavyComponent7164;
