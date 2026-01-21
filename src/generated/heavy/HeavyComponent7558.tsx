'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7558<T> = T extends (infer U)[]
  ? DeepReadonlyArray7558<U>
  : T extends object
  ? DeepReadonlyObject7558<T>
  : T;

interface DeepReadonlyArray7558<T> extends ReadonlyArray<DeepReadonly7558<T>> {}

type DeepReadonlyObject7558<T> = {
  readonly [P in keyof T]: DeepReadonly7558<T[P]>;
};

type UnionToIntersection7558<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7558<T> = UnionToIntersection7558<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7558<T extends unknown[], V> = [...T, V];

type TuplifyUnion7558<T, L = LastOf7558<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7558<TuplifyUnion7558<Exclude<T, L>>, L>;

type DeepPartial7558<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7558<T[P]> }
  : T;

type Paths7558<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7558<K, Paths7558<T[K], Prev7558[D]>> : never }[keyof T]
  : never;

type Prev7558 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7558<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7558 {
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

type ConfigPaths7558 = Paths7558<NestedConfig7558>;

interface HeavyProps7558 {
  config: DeepPartial7558<NestedConfig7558>;
  path?: ConfigPaths7558;
}

const HeavyComponent7558 = memo(function HeavyComponent7558({ config }: HeavyProps7558) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7558) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7558 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7558: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7558.displayName = 'HeavyComponent7558';
export default HeavyComponent7558;
