'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7440<T> = T extends (infer U)[]
  ? DeepReadonlyArray7440<U>
  : T extends object
  ? DeepReadonlyObject7440<T>
  : T;

interface DeepReadonlyArray7440<T> extends ReadonlyArray<DeepReadonly7440<T>> {}

type DeepReadonlyObject7440<T> = {
  readonly [P in keyof T]: DeepReadonly7440<T[P]>;
};

type UnionToIntersection7440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7440<T> = UnionToIntersection7440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7440<T extends unknown[], V> = [...T, V];

type TuplifyUnion7440<T, L = LastOf7440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7440<TuplifyUnion7440<Exclude<T, L>>, L>;

type DeepPartial7440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7440<T[P]> }
  : T;

type Paths7440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7440<K, Paths7440<T[K], Prev7440[D]>> : never }[keyof T]
  : never;

type Prev7440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7440 {
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

type ConfigPaths7440 = Paths7440<NestedConfig7440>;

interface HeavyProps7440 {
  config: DeepPartial7440<NestedConfig7440>;
  path?: ConfigPaths7440;
}

const HeavyComponent7440 = memo(function HeavyComponent7440({ config }: HeavyProps7440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7440.displayName = 'HeavyComponent7440';
export default HeavyComponent7440;
