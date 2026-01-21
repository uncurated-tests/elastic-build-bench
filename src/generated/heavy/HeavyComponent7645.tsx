'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7645<T> = T extends (infer U)[]
  ? DeepReadonlyArray7645<U>
  : T extends object
  ? DeepReadonlyObject7645<T>
  : T;

interface DeepReadonlyArray7645<T> extends ReadonlyArray<DeepReadonly7645<T>> {}

type DeepReadonlyObject7645<T> = {
  readonly [P in keyof T]: DeepReadonly7645<T[P]>;
};

type UnionToIntersection7645<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7645<T> = UnionToIntersection7645<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7645<T extends unknown[], V> = [...T, V];

type TuplifyUnion7645<T, L = LastOf7645<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7645<TuplifyUnion7645<Exclude<T, L>>, L>;

type DeepPartial7645<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7645<T[P]> }
  : T;

type Paths7645<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7645<K, Paths7645<T[K], Prev7645[D]>> : never }[keyof T]
  : never;

type Prev7645 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7645<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7645 {
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

type ConfigPaths7645 = Paths7645<NestedConfig7645>;

interface HeavyProps7645 {
  config: DeepPartial7645<NestedConfig7645>;
  path?: ConfigPaths7645;
}

const HeavyComponent7645 = memo(function HeavyComponent7645({ config }: HeavyProps7645) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7645) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7645 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7645: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7645.displayName = 'HeavyComponent7645';
export default HeavyComponent7645;
