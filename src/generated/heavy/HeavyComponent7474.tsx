'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7474<T> = T extends (infer U)[]
  ? DeepReadonlyArray7474<U>
  : T extends object
  ? DeepReadonlyObject7474<T>
  : T;

interface DeepReadonlyArray7474<T> extends ReadonlyArray<DeepReadonly7474<T>> {}

type DeepReadonlyObject7474<T> = {
  readonly [P in keyof T]: DeepReadonly7474<T[P]>;
};

type UnionToIntersection7474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7474<T> = UnionToIntersection7474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7474<T extends unknown[], V> = [...T, V];

type TuplifyUnion7474<T, L = LastOf7474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7474<TuplifyUnion7474<Exclude<T, L>>, L>;

type DeepPartial7474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7474<T[P]> }
  : T;

type Paths7474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7474<K, Paths7474<T[K], Prev7474[D]>> : never }[keyof T]
  : never;

type Prev7474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7474 {
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

type ConfigPaths7474 = Paths7474<NestedConfig7474>;

interface HeavyProps7474 {
  config: DeepPartial7474<NestedConfig7474>;
  path?: ConfigPaths7474;
}

const HeavyComponent7474 = memo(function HeavyComponent7474({ config }: HeavyProps7474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7474.displayName = 'HeavyComponent7474';
export default HeavyComponent7474;
