'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7303<T> = T extends (infer U)[]
  ? DeepReadonlyArray7303<U>
  : T extends object
  ? DeepReadonlyObject7303<T>
  : T;

interface DeepReadonlyArray7303<T> extends ReadonlyArray<DeepReadonly7303<T>> {}

type DeepReadonlyObject7303<T> = {
  readonly [P in keyof T]: DeepReadonly7303<T[P]>;
};

type UnionToIntersection7303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7303<T> = UnionToIntersection7303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7303<T extends unknown[], V> = [...T, V];

type TuplifyUnion7303<T, L = LastOf7303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7303<TuplifyUnion7303<Exclude<T, L>>, L>;

type DeepPartial7303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7303<T[P]> }
  : T;

type Paths7303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7303<K, Paths7303<T[K], Prev7303[D]>> : never }[keyof T]
  : never;

type Prev7303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7303 {
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

type ConfigPaths7303 = Paths7303<NestedConfig7303>;

interface HeavyProps7303 {
  config: DeepPartial7303<NestedConfig7303>;
  path?: ConfigPaths7303;
}

const HeavyComponent7303 = memo(function HeavyComponent7303({ config }: HeavyProps7303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7303.displayName = 'HeavyComponent7303';
export default HeavyComponent7303;
