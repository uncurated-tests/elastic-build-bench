'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7268<T> = T extends (infer U)[]
  ? DeepReadonlyArray7268<U>
  : T extends object
  ? DeepReadonlyObject7268<T>
  : T;

interface DeepReadonlyArray7268<T> extends ReadonlyArray<DeepReadonly7268<T>> {}

type DeepReadonlyObject7268<T> = {
  readonly [P in keyof T]: DeepReadonly7268<T[P]>;
};

type UnionToIntersection7268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7268<T> = UnionToIntersection7268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7268<T extends unknown[], V> = [...T, V];

type TuplifyUnion7268<T, L = LastOf7268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7268<TuplifyUnion7268<Exclude<T, L>>, L>;

type DeepPartial7268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7268<T[P]> }
  : T;

type Paths7268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7268<K, Paths7268<T[K], Prev7268[D]>> : never }[keyof T]
  : never;

type Prev7268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7268 {
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

type ConfigPaths7268 = Paths7268<NestedConfig7268>;

interface HeavyProps7268 {
  config: DeepPartial7268<NestedConfig7268>;
  path?: ConfigPaths7268;
}

const HeavyComponent7268 = memo(function HeavyComponent7268({ config }: HeavyProps7268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7268.displayName = 'HeavyComponent7268';
export default HeavyComponent7268;
