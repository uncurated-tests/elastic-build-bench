'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7906<T> = T extends (infer U)[]
  ? DeepReadonlyArray7906<U>
  : T extends object
  ? DeepReadonlyObject7906<T>
  : T;

interface DeepReadonlyArray7906<T> extends ReadonlyArray<DeepReadonly7906<T>> {}

type DeepReadonlyObject7906<T> = {
  readonly [P in keyof T]: DeepReadonly7906<T[P]>;
};

type UnionToIntersection7906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7906<T> = UnionToIntersection7906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7906<T extends unknown[], V> = [...T, V];

type TuplifyUnion7906<T, L = LastOf7906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7906<TuplifyUnion7906<Exclude<T, L>>, L>;

type DeepPartial7906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7906<T[P]> }
  : T;

type Paths7906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7906<K, Paths7906<T[K], Prev7906[D]>> : never }[keyof T]
  : never;

type Prev7906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7906 {
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

type ConfigPaths7906 = Paths7906<NestedConfig7906>;

interface HeavyProps7906 {
  config: DeepPartial7906<NestedConfig7906>;
  path?: ConfigPaths7906;
}

const HeavyComponent7906 = memo(function HeavyComponent7906({ config }: HeavyProps7906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7906.displayName = 'HeavyComponent7906';
export default HeavyComponent7906;
