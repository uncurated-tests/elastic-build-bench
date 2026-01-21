'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7844<T> = T extends (infer U)[]
  ? DeepReadonlyArray7844<U>
  : T extends object
  ? DeepReadonlyObject7844<T>
  : T;

interface DeepReadonlyArray7844<T> extends ReadonlyArray<DeepReadonly7844<T>> {}

type DeepReadonlyObject7844<T> = {
  readonly [P in keyof T]: DeepReadonly7844<T[P]>;
};

type UnionToIntersection7844<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7844<T> = UnionToIntersection7844<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7844<T extends unknown[], V> = [...T, V];

type TuplifyUnion7844<T, L = LastOf7844<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7844<TuplifyUnion7844<Exclude<T, L>>, L>;

type DeepPartial7844<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7844<T[P]> }
  : T;

type Paths7844<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7844<K, Paths7844<T[K], Prev7844[D]>> : never }[keyof T]
  : never;

type Prev7844 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7844<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7844 {
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

type ConfigPaths7844 = Paths7844<NestedConfig7844>;

interface HeavyProps7844 {
  config: DeepPartial7844<NestedConfig7844>;
  path?: ConfigPaths7844;
}

const HeavyComponent7844 = memo(function HeavyComponent7844({ config }: HeavyProps7844) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7844) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7844 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7844: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7844.displayName = 'HeavyComponent7844';
export default HeavyComponent7844;
