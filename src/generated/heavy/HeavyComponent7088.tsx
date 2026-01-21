'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7088<T> = T extends (infer U)[]
  ? DeepReadonlyArray7088<U>
  : T extends object
  ? DeepReadonlyObject7088<T>
  : T;

interface DeepReadonlyArray7088<T> extends ReadonlyArray<DeepReadonly7088<T>> {}

type DeepReadonlyObject7088<T> = {
  readonly [P in keyof T]: DeepReadonly7088<T[P]>;
};

type UnionToIntersection7088<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7088<T> = UnionToIntersection7088<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7088<T extends unknown[], V> = [...T, V];

type TuplifyUnion7088<T, L = LastOf7088<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7088<TuplifyUnion7088<Exclude<T, L>>, L>;

type DeepPartial7088<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7088<T[P]> }
  : T;

type Paths7088<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7088<K, Paths7088<T[K], Prev7088[D]>> : never }[keyof T]
  : never;

type Prev7088 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7088<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7088 {
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

type ConfigPaths7088 = Paths7088<NestedConfig7088>;

interface HeavyProps7088 {
  config: DeepPartial7088<NestedConfig7088>;
  path?: ConfigPaths7088;
}

const HeavyComponent7088 = memo(function HeavyComponent7088({ config }: HeavyProps7088) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7088) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7088 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7088: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7088.displayName = 'HeavyComponent7088';
export default HeavyComponent7088;
