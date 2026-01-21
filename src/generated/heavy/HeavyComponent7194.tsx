'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7194<T> = T extends (infer U)[]
  ? DeepReadonlyArray7194<U>
  : T extends object
  ? DeepReadonlyObject7194<T>
  : T;

interface DeepReadonlyArray7194<T> extends ReadonlyArray<DeepReadonly7194<T>> {}

type DeepReadonlyObject7194<T> = {
  readonly [P in keyof T]: DeepReadonly7194<T[P]>;
};

type UnionToIntersection7194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7194<T> = UnionToIntersection7194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7194<T extends unknown[], V> = [...T, V];

type TuplifyUnion7194<T, L = LastOf7194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7194<TuplifyUnion7194<Exclude<T, L>>, L>;

type DeepPartial7194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7194<T[P]> }
  : T;

type Paths7194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7194<K, Paths7194<T[K], Prev7194[D]>> : never }[keyof T]
  : never;

type Prev7194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7194 {
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

type ConfigPaths7194 = Paths7194<NestedConfig7194>;

interface HeavyProps7194 {
  config: DeepPartial7194<NestedConfig7194>;
  path?: ConfigPaths7194;
}

const HeavyComponent7194 = memo(function HeavyComponent7194({ config }: HeavyProps7194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7194.displayName = 'HeavyComponent7194';
export default HeavyComponent7194;
