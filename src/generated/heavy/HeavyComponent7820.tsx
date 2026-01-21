'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7820<T> = T extends (infer U)[]
  ? DeepReadonlyArray7820<U>
  : T extends object
  ? DeepReadonlyObject7820<T>
  : T;

interface DeepReadonlyArray7820<T> extends ReadonlyArray<DeepReadonly7820<T>> {}

type DeepReadonlyObject7820<T> = {
  readonly [P in keyof T]: DeepReadonly7820<T[P]>;
};

type UnionToIntersection7820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7820<T> = UnionToIntersection7820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7820<T extends unknown[], V> = [...T, V];

type TuplifyUnion7820<T, L = LastOf7820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7820<TuplifyUnion7820<Exclude<T, L>>, L>;

type DeepPartial7820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7820<T[P]> }
  : T;

type Paths7820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7820<K, Paths7820<T[K], Prev7820[D]>> : never }[keyof T]
  : never;

type Prev7820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7820 {
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

type ConfigPaths7820 = Paths7820<NestedConfig7820>;

interface HeavyProps7820 {
  config: DeepPartial7820<NestedConfig7820>;
  path?: ConfigPaths7820;
}

const HeavyComponent7820 = memo(function HeavyComponent7820({ config }: HeavyProps7820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7820.displayName = 'HeavyComponent7820';
export default HeavyComponent7820;
