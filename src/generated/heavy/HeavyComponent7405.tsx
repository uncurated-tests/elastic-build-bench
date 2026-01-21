'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7405<T> = T extends (infer U)[]
  ? DeepReadonlyArray7405<U>
  : T extends object
  ? DeepReadonlyObject7405<T>
  : T;

interface DeepReadonlyArray7405<T> extends ReadonlyArray<DeepReadonly7405<T>> {}

type DeepReadonlyObject7405<T> = {
  readonly [P in keyof T]: DeepReadonly7405<T[P]>;
};

type UnionToIntersection7405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7405<T> = UnionToIntersection7405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7405<T extends unknown[], V> = [...T, V];

type TuplifyUnion7405<T, L = LastOf7405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7405<TuplifyUnion7405<Exclude<T, L>>, L>;

type DeepPartial7405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7405<T[P]> }
  : T;

type Paths7405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7405<K, Paths7405<T[K], Prev7405[D]>> : never }[keyof T]
  : never;

type Prev7405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7405 {
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

type ConfigPaths7405 = Paths7405<NestedConfig7405>;

interface HeavyProps7405 {
  config: DeepPartial7405<NestedConfig7405>;
  path?: ConfigPaths7405;
}

const HeavyComponent7405 = memo(function HeavyComponent7405({ config }: HeavyProps7405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7405.displayName = 'HeavyComponent7405';
export default HeavyComponent7405;
