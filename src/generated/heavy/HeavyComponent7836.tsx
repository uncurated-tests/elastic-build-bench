'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7836<T> = T extends (infer U)[]
  ? DeepReadonlyArray7836<U>
  : T extends object
  ? DeepReadonlyObject7836<T>
  : T;

interface DeepReadonlyArray7836<T> extends ReadonlyArray<DeepReadonly7836<T>> {}

type DeepReadonlyObject7836<T> = {
  readonly [P in keyof T]: DeepReadonly7836<T[P]>;
};

type UnionToIntersection7836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7836<T> = UnionToIntersection7836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7836<T extends unknown[], V> = [...T, V];

type TuplifyUnion7836<T, L = LastOf7836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7836<TuplifyUnion7836<Exclude<T, L>>, L>;

type DeepPartial7836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7836<T[P]> }
  : T;

type Paths7836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7836<K, Paths7836<T[K], Prev7836[D]>> : never }[keyof T]
  : never;

type Prev7836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7836 {
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

type ConfigPaths7836 = Paths7836<NestedConfig7836>;

interface HeavyProps7836 {
  config: DeepPartial7836<NestedConfig7836>;
  path?: ConfigPaths7836;
}

const HeavyComponent7836 = memo(function HeavyComponent7836({ config }: HeavyProps7836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7836.displayName = 'HeavyComponent7836';
export default HeavyComponent7836;
