'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7106<T> = T extends (infer U)[]
  ? DeepReadonlyArray7106<U>
  : T extends object
  ? DeepReadonlyObject7106<T>
  : T;

interface DeepReadonlyArray7106<T> extends ReadonlyArray<DeepReadonly7106<T>> {}

type DeepReadonlyObject7106<T> = {
  readonly [P in keyof T]: DeepReadonly7106<T[P]>;
};

type UnionToIntersection7106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7106<T> = UnionToIntersection7106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7106<T extends unknown[], V> = [...T, V];

type TuplifyUnion7106<T, L = LastOf7106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7106<TuplifyUnion7106<Exclude<T, L>>, L>;

type DeepPartial7106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7106<T[P]> }
  : T;

type Paths7106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7106<K, Paths7106<T[K], Prev7106[D]>> : never }[keyof T]
  : never;

type Prev7106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7106 {
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

type ConfigPaths7106 = Paths7106<NestedConfig7106>;

interface HeavyProps7106 {
  config: DeepPartial7106<NestedConfig7106>;
  path?: ConfigPaths7106;
}

const HeavyComponent7106 = memo(function HeavyComponent7106({ config }: HeavyProps7106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7106.displayName = 'HeavyComponent7106';
export default HeavyComponent7106;
