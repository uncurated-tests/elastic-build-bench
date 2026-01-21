'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7776<T> = T extends (infer U)[]
  ? DeepReadonlyArray7776<U>
  : T extends object
  ? DeepReadonlyObject7776<T>
  : T;

interface DeepReadonlyArray7776<T> extends ReadonlyArray<DeepReadonly7776<T>> {}

type DeepReadonlyObject7776<T> = {
  readonly [P in keyof T]: DeepReadonly7776<T[P]>;
};

type UnionToIntersection7776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7776<T> = UnionToIntersection7776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7776<T extends unknown[], V> = [...T, V];

type TuplifyUnion7776<T, L = LastOf7776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7776<TuplifyUnion7776<Exclude<T, L>>, L>;

type DeepPartial7776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7776<T[P]> }
  : T;

type Paths7776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7776<K, Paths7776<T[K], Prev7776[D]>> : never }[keyof T]
  : never;

type Prev7776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7776 {
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

type ConfigPaths7776 = Paths7776<NestedConfig7776>;

interface HeavyProps7776 {
  config: DeepPartial7776<NestedConfig7776>;
  path?: ConfigPaths7776;
}

const HeavyComponent7776 = memo(function HeavyComponent7776({ config }: HeavyProps7776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7776.displayName = 'HeavyComponent7776';
export default HeavyComponent7776;
