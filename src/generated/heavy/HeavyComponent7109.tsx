'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7109<T> = T extends (infer U)[]
  ? DeepReadonlyArray7109<U>
  : T extends object
  ? DeepReadonlyObject7109<T>
  : T;

interface DeepReadonlyArray7109<T> extends ReadonlyArray<DeepReadonly7109<T>> {}

type DeepReadonlyObject7109<T> = {
  readonly [P in keyof T]: DeepReadonly7109<T[P]>;
};

type UnionToIntersection7109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7109<T> = UnionToIntersection7109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7109<T extends unknown[], V> = [...T, V];

type TuplifyUnion7109<T, L = LastOf7109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7109<TuplifyUnion7109<Exclude<T, L>>, L>;

type DeepPartial7109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7109<T[P]> }
  : T;

type Paths7109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7109<K, Paths7109<T[K], Prev7109[D]>> : never }[keyof T]
  : never;

type Prev7109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7109 {
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

type ConfigPaths7109 = Paths7109<NestedConfig7109>;

interface HeavyProps7109 {
  config: DeepPartial7109<NestedConfig7109>;
  path?: ConfigPaths7109;
}

const HeavyComponent7109 = memo(function HeavyComponent7109({ config }: HeavyProps7109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7109.displayName = 'HeavyComponent7109';
export default HeavyComponent7109;
