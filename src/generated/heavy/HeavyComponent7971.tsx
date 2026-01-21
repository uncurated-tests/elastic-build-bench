'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7971<T> = T extends (infer U)[]
  ? DeepReadonlyArray7971<U>
  : T extends object
  ? DeepReadonlyObject7971<T>
  : T;

interface DeepReadonlyArray7971<T> extends ReadonlyArray<DeepReadonly7971<T>> {}

type DeepReadonlyObject7971<T> = {
  readonly [P in keyof T]: DeepReadonly7971<T[P]>;
};

type UnionToIntersection7971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7971<T> = UnionToIntersection7971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7971<T extends unknown[], V> = [...T, V];

type TuplifyUnion7971<T, L = LastOf7971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7971<TuplifyUnion7971<Exclude<T, L>>, L>;

type DeepPartial7971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7971<T[P]> }
  : T;

type Paths7971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7971<K, Paths7971<T[K], Prev7971[D]>> : never }[keyof T]
  : never;

type Prev7971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7971 {
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

type ConfigPaths7971 = Paths7971<NestedConfig7971>;

interface HeavyProps7971 {
  config: DeepPartial7971<NestedConfig7971>;
  path?: ConfigPaths7971;
}

const HeavyComponent7971 = memo(function HeavyComponent7971({ config }: HeavyProps7971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7971.displayName = 'HeavyComponent7971';
export default HeavyComponent7971;
