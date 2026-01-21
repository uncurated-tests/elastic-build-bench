'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7498<T> = T extends (infer U)[]
  ? DeepReadonlyArray7498<U>
  : T extends object
  ? DeepReadonlyObject7498<T>
  : T;

interface DeepReadonlyArray7498<T> extends ReadonlyArray<DeepReadonly7498<T>> {}

type DeepReadonlyObject7498<T> = {
  readonly [P in keyof T]: DeepReadonly7498<T[P]>;
};

type UnionToIntersection7498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7498<T> = UnionToIntersection7498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7498<T extends unknown[], V> = [...T, V];

type TuplifyUnion7498<T, L = LastOf7498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7498<TuplifyUnion7498<Exclude<T, L>>, L>;

type DeepPartial7498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7498<T[P]> }
  : T;

type Paths7498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7498<K, Paths7498<T[K], Prev7498[D]>> : never }[keyof T]
  : never;

type Prev7498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7498 {
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

type ConfigPaths7498 = Paths7498<NestedConfig7498>;

interface HeavyProps7498 {
  config: DeepPartial7498<NestedConfig7498>;
  path?: ConfigPaths7498;
}

const HeavyComponent7498 = memo(function HeavyComponent7498({ config }: HeavyProps7498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7498.displayName = 'HeavyComponent7498';
export default HeavyComponent7498;
