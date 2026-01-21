'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7726<T> = T extends (infer U)[]
  ? DeepReadonlyArray7726<U>
  : T extends object
  ? DeepReadonlyObject7726<T>
  : T;

interface DeepReadonlyArray7726<T> extends ReadonlyArray<DeepReadonly7726<T>> {}

type DeepReadonlyObject7726<T> = {
  readonly [P in keyof T]: DeepReadonly7726<T[P]>;
};

type UnionToIntersection7726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7726<T> = UnionToIntersection7726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7726<T extends unknown[], V> = [...T, V];

type TuplifyUnion7726<T, L = LastOf7726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7726<TuplifyUnion7726<Exclude<T, L>>, L>;

type DeepPartial7726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7726<T[P]> }
  : T;

type Paths7726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7726<K, Paths7726<T[K], Prev7726[D]>> : never }[keyof T]
  : never;

type Prev7726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7726 {
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

type ConfigPaths7726 = Paths7726<NestedConfig7726>;

interface HeavyProps7726 {
  config: DeepPartial7726<NestedConfig7726>;
  path?: ConfigPaths7726;
}

const HeavyComponent7726 = memo(function HeavyComponent7726({ config }: HeavyProps7726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7726.displayName = 'HeavyComponent7726';
export default HeavyComponent7726;
