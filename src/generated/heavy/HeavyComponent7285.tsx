'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7285<T> = T extends (infer U)[]
  ? DeepReadonlyArray7285<U>
  : T extends object
  ? DeepReadonlyObject7285<T>
  : T;

interface DeepReadonlyArray7285<T> extends ReadonlyArray<DeepReadonly7285<T>> {}

type DeepReadonlyObject7285<T> = {
  readonly [P in keyof T]: DeepReadonly7285<T[P]>;
};

type UnionToIntersection7285<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7285<T> = UnionToIntersection7285<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7285<T extends unknown[], V> = [...T, V];

type TuplifyUnion7285<T, L = LastOf7285<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7285<TuplifyUnion7285<Exclude<T, L>>, L>;

type DeepPartial7285<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7285<T[P]> }
  : T;

type Paths7285<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7285<K, Paths7285<T[K], Prev7285[D]>> : never }[keyof T]
  : never;

type Prev7285 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7285<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7285 {
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

type ConfigPaths7285 = Paths7285<NestedConfig7285>;

interface HeavyProps7285 {
  config: DeepPartial7285<NestedConfig7285>;
  path?: ConfigPaths7285;
}

const HeavyComponent7285 = memo(function HeavyComponent7285({ config }: HeavyProps7285) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7285) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7285 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7285: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7285.displayName = 'HeavyComponent7285';
export default HeavyComponent7285;
