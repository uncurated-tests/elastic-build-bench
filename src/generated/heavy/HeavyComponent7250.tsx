'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7250<T> = T extends (infer U)[]
  ? DeepReadonlyArray7250<U>
  : T extends object
  ? DeepReadonlyObject7250<T>
  : T;

interface DeepReadonlyArray7250<T> extends ReadonlyArray<DeepReadonly7250<T>> {}

type DeepReadonlyObject7250<T> = {
  readonly [P in keyof T]: DeepReadonly7250<T[P]>;
};

type UnionToIntersection7250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7250<T> = UnionToIntersection7250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7250<T extends unknown[], V> = [...T, V];

type TuplifyUnion7250<T, L = LastOf7250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7250<TuplifyUnion7250<Exclude<T, L>>, L>;

type DeepPartial7250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7250<T[P]> }
  : T;

type Paths7250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7250<K, Paths7250<T[K], Prev7250[D]>> : never }[keyof T]
  : never;

type Prev7250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7250 {
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

type ConfigPaths7250 = Paths7250<NestedConfig7250>;

interface HeavyProps7250 {
  config: DeepPartial7250<NestedConfig7250>;
  path?: ConfigPaths7250;
}

const HeavyComponent7250 = memo(function HeavyComponent7250({ config }: HeavyProps7250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7250.displayName = 'HeavyComponent7250';
export default HeavyComponent7250;
