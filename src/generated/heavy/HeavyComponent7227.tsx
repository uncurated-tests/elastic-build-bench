'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7227<T> = T extends (infer U)[]
  ? DeepReadonlyArray7227<U>
  : T extends object
  ? DeepReadonlyObject7227<T>
  : T;

interface DeepReadonlyArray7227<T> extends ReadonlyArray<DeepReadonly7227<T>> {}

type DeepReadonlyObject7227<T> = {
  readonly [P in keyof T]: DeepReadonly7227<T[P]>;
};

type UnionToIntersection7227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7227<T> = UnionToIntersection7227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7227<T extends unknown[], V> = [...T, V];

type TuplifyUnion7227<T, L = LastOf7227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7227<TuplifyUnion7227<Exclude<T, L>>, L>;

type DeepPartial7227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7227<T[P]> }
  : T;

type Paths7227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7227<K, Paths7227<T[K], Prev7227[D]>> : never }[keyof T]
  : never;

type Prev7227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7227 {
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

type ConfigPaths7227 = Paths7227<NestedConfig7227>;

interface HeavyProps7227 {
  config: DeepPartial7227<NestedConfig7227>;
  path?: ConfigPaths7227;
}

const HeavyComponent7227 = memo(function HeavyComponent7227({ config }: HeavyProps7227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7227.displayName = 'HeavyComponent7227';
export default HeavyComponent7227;
