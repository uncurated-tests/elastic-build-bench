'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7096<T> = T extends (infer U)[]
  ? DeepReadonlyArray7096<U>
  : T extends object
  ? DeepReadonlyObject7096<T>
  : T;

interface DeepReadonlyArray7096<T> extends ReadonlyArray<DeepReadonly7096<T>> {}

type DeepReadonlyObject7096<T> = {
  readonly [P in keyof T]: DeepReadonly7096<T[P]>;
};

type UnionToIntersection7096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7096<T> = UnionToIntersection7096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7096<T extends unknown[], V> = [...T, V];

type TuplifyUnion7096<T, L = LastOf7096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7096<TuplifyUnion7096<Exclude<T, L>>, L>;

type DeepPartial7096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7096<T[P]> }
  : T;

type Paths7096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7096<K, Paths7096<T[K], Prev7096[D]>> : never }[keyof T]
  : never;

type Prev7096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7096 {
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

type ConfigPaths7096 = Paths7096<NestedConfig7096>;

interface HeavyProps7096 {
  config: DeepPartial7096<NestedConfig7096>;
  path?: ConfigPaths7096;
}

const HeavyComponent7096 = memo(function HeavyComponent7096({ config }: HeavyProps7096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7096.displayName = 'HeavyComponent7096';
export default HeavyComponent7096;
