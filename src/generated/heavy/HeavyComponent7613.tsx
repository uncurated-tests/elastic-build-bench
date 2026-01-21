'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7613<T> = T extends (infer U)[]
  ? DeepReadonlyArray7613<U>
  : T extends object
  ? DeepReadonlyObject7613<T>
  : T;

interface DeepReadonlyArray7613<T> extends ReadonlyArray<DeepReadonly7613<T>> {}

type DeepReadonlyObject7613<T> = {
  readonly [P in keyof T]: DeepReadonly7613<T[P]>;
};

type UnionToIntersection7613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7613<T> = UnionToIntersection7613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7613<T extends unknown[], V> = [...T, V];

type TuplifyUnion7613<T, L = LastOf7613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7613<TuplifyUnion7613<Exclude<T, L>>, L>;

type DeepPartial7613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7613<T[P]> }
  : T;

type Paths7613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7613<K, Paths7613<T[K], Prev7613[D]>> : never }[keyof T]
  : never;

type Prev7613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7613 {
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

type ConfigPaths7613 = Paths7613<NestedConfig7613>;

interface HeavyProps7613 {
  config: DeepPartial7613<NestedConfig7613>;
  path?: ConfigPaths7613;
}

const HeavyComponent7613 = memo(function HeavyComponent7613({ config }: HeavyProps7613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7613.displayName = 'HeavyComponent7613';
export default HeavyComponent7613;
