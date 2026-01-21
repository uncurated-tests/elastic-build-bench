'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7138<T> = T extends (infer U)[]
  ? DeepReadonlyArray7138<U>
  : T extends object
  ? DeepReadonlyObject7138<T>
  : T;

interface DeepReadonlyArray7138<T> extends ReadonlyArray<DeepReadonly7138<T>> {}

type DeepReadonlyObject7138<T> = {
  readonly [P in keyof T]: DeepReadonly7138<T[P]>;
};

type UnionToIntersection7138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7138<T> = UnionToIntersection7138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7138<T extends unknown[], V> = [...T, V];

type TuplifyUnion7138<T, L = LastOf7138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7138<TuplifyUnion7138<Exclude<T, L>>, L>;

type DeepPartial7138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7138<T[P]> }
  : T;

type Paths7138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7138<K, Paths7138<T[K], Prev7138[D]>> : never }[keyof T]
  : never;

type Prev7138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7138 {
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

type ConfigPaths7138 = Paths7138<NestedConfig7138>;

interface HeavyProps7138 {
  config: DeepPartial7138<NestedConfig7138>;
  path?: ConfigPaths7138;
}

const HeavyComponent7138 = memo(function HeavyComponent7138({ config }: HeavyProps7138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7138.displayName = 'HeavyComponent7138';
export default HeavyComponent7138;
