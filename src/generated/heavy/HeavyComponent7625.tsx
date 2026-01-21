'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7625<T> = T extends (infer U)[]
  ? DeepReadonlyArray7625<U>
  : T extends object
  ? DeepReadonlyObject7625<T>
  : T;

interface DeepReadonlyArray7625<T> extends ReadonlyArray<DeepReadonly7625<T>> {}

type DeepReadonlyObject7625<T> = {
  readonly [P in keyof T]: DeepReadonly7625<T[P]>;
};

type UnionToIntersection7625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7625<T> = UnionToIntersection7625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7625<T extends unknown[], V> = [...T, V];

type TuplifyUnion7625<T, L = LastOf7625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7625<TuplifyUnion7625<Exclude<T, L>>, L>;

type DeepPartial7625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7625<T[P]> }
  : T;

type Paths7625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7625<K, Paths7625<T[K], Prev7625[D]>> : never }[keyof T]
  : never;

type Prev7625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7625 {
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

type ConfigPaths7625 = Paths7625<NestedConfig7625>;

interface HeavyProps7625 {
  config: DeepPartial7625<NestedConfig7625>;
  path?: ConfigPaths7625;
}

const HeavyComponent7625 = memo(function HeavyComponent7625({ config }: HeavyProps7625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7625.displayName = 'HeavyComponent7625';
export default HeavyComponent7625;
