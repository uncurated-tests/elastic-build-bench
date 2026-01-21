'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7488<T> = T extends (infer U)[]
  ? DeepReadonlyArray7488<U>
  : T extends object
  ? DeepReadonlyObject7488<T>
  : T;

interface DeepReadonlyArray7488<T> extends ReadonlyArray<DeepReadonly7488<T>> {}

type DeepReadonlyObject7488<T> = {
  readonly [P in keyof T]: DeepReadonly7488<T[P]>;
};

type UnionToIntersection7488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7488<T> = UnionToIntersection7488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7488<T extends unknown[], V> = [...T, V];

type TuplifyUnion7488<T, L = LastOf7488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7488<TuplifyUnion7488<Exclude<T, L>>, L>;

type DeepPartial7488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7488<T[P]> }
  : T;

type Paths7488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7488<K, Paths7488<T[K], Prev7488[D]>> : never }[keyof T]
  : never;

type Prev7488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7488 {
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

type ConfigPaths7488 = Paths7488<NestedConfig7488>;

interface HeavyProps7488 {
  config: DeepPartial7488<NestedConfig7488>;
  path?: ConfigPaths7488;
}

const HeavyComponent7488 = memo(function HeavyComponent7488({ config }: HeavyProps7488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7488.displayName = 'HeavyComponent7488';
export default HeavyComponent7488;
