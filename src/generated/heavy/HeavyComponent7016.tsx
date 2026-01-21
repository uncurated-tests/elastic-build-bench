'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7016<T> = T extends (infer U)[]
  ? DeepReadonlyArray7016<U>
  : T extends object
  ? DeepReadonlyObject7016<T>
  : T;

interface DeepReadonlyArray7016<T> extends ReadonlyArray<DeepReadonly7016<T>> {}

type DeepReadonlyObject7016<T> = {
  readonly [P in keyof T]: DeepReadonly7016<T[P]>;
};

type UnionToIntersection7016<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7016<T> = UnionToIntersection7016<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7016<T extends unknown[], V> = [...T, V];

type TuplifyUnion7016<T, L = LastOf7016<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7016<TuplifyUnion7016<Exclude<T, L>>, L>;

type DeepPartial7016<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7016<T[P]> }
  : T;

type Paths7016<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7016<K, Paths7016<T[K], Prev7016[D]>> : never }[keyof T]
  : never;

type Prev7016 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7016<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7016 {
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

type ConfigPaths7016 = Paths7016<NestedConfig7016>;

interface HeavyProps7016 {
  config: DeepPartial7016<NestedConfig7016>;
  path?: ConfigPaths7016;
}

const HeavyComponent7016 = memo(function HeavyComponent7016({ config }: HeavyProps7016) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7016) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7016 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7016: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7016.displayName = 'HeavyComponent7016';
export default HeavyComponent7016;
