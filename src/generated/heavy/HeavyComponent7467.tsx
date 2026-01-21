'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7467<T> = T extends (infer U)[]
  ? DeepReadonlyArray7467<U>
  : T extends object
  ? DeepReadonlyObject7467<T>
  : T;

interface DeepReadonlyArray7467<T> extends ReadonlyArray<DeepReadonly7467<T>> {}

type DeepReadonlyObject7467<T> = {
  readonly [P in keyof T]: DeepReadonly7467<T[P]>;
};

type UnionToIntersection7467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7467<T> = UnionToIntersection7467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7467<T extends unknown[], V> = [...T, V];

type TuplifyUnion7467<T, L = LastOf7467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7467<TuplifyUnion7467<Exclude<T, L>>, L>;

type DeepPartial7467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7467<T[P]> }
  : T;

type Paths7467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7467<K, Paths7467<T[K], Prev7467[D]>> : never }[keyof T]
  : never;

type Prev7467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7467 {
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

type ConfigPaths7467 = Paths7467<NestedConfig7467>;

interface HeavyProps7467 {
  config: DeepPartial7467<NestedConfig7467>;
  path?: ConfigPaths7467;
}

const HeavyComponent7467 = memo(function HeavyComponent7467({ config }: HeavyProps7467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7467.displayName = 'HeavyComponent7467';
export default HeavyComponent7467;
