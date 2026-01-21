'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7581<T> = T extends (infer U)[]
  ? DeepReadonlyArray7581<U>
  : T extends object
  ? DeepReadonlyObject7581<T>
  : T;

interface DeepReadonlyArray7581<T> extends ReadonlyArray<DeepReadonly7581<T>> {}

type DeepReadonlyObject7581<T> = {
  readonly [P in keyof T]: DeepReadonly7581<T[P]>;
};

type UnionToIntersection7581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7581<T> = UnionToIntersection7581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7581<T extends unknown[], V> = [...T, V];

type TuplifyUnion7581<T, L = LastOf7581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7581<TuplifyUnion7581<Exclude<T, L>>, L>;

type DeepPartial7581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7581<T[P]> }
  : T;

type Paths7581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7581<K, Paths7581<T[K], Prev7581[D]>> : never }[keyof T]
  : never;

type Prev7581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7581 {
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

type ConfigPaths7581 = Paths7581<NestedConfig7581>;

interface HeavyProps7581 {
  config: DeepPartial7581<NestedConfig7581>;
  path?: ConfigPaths7581;
}

const HeavyComponent7581 = memo(function HeavyComponent7581({ config }: HeavyProps7581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7581.displayName = 'HeavyComponent7581';
export default HeavyComponent7581;
