'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7071<T> = T extends (infer U)[]
  ? DeepReadonlyArray7071<U>
  : T extends object
  ? DeepReadonlyObject7071<T>
  : T;

interface DeepReadonlyArray7071<T> extends ReadonlyArray<DeepReadonly7071<T>> {}

type DeepReadonlyObject7071<T> = {
  readonly [P in keyof T]: DeepReadonly7071<T[P]>;
};

type UnionToIntersection7071<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7071<T> = UnionToIntersection7071<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7071<T extends unknown[], V> = [...T, V];

type TuplifyUnion7071<T, L = LastOf7071<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7071<TuplifyUnion7071<Exclude<T, L>>, L>;

type DeepPartial7071<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7071<T[P]> }
  : T;

type Paths7071<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7071<K, Paths7071<T[K], Prev7071[D]>> : never }[keyof T]
  : never;

type Prev7071 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7071<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7071 {
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

type ConfigPaths7071 = Paths7071<NestedConfig7071>;

interface HeavyProps7071 {
  config: DeepPartial7071<NestedConfig7071>;
  path?: ConfigPaths7071;
}

const HeavyComponent7071 = memo(function HeavyComponent7071({ config }: HeavyProps7071) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7071) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7071 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7071: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7071.displayName = 'HeavyComponent7071';
export default HeavyComponent7071;
