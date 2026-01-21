'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7813<T> = T extends (infer U)[]
  ? DeepReadonlyArray7813<U>
  : T extends object
  ? DeepReadonlyObject7813<T>
  : T;

interface DeepReadonlyArray7813<T> extends ReadonlyArray<DeepReadonly7813<T>> {}

type DeepReadonlyObject7813<T> = {
  readonly [P in keyof T]: DeepReadonly7813<T[P]>;
};

type UnionToIntersection7813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7813<T> = UnionToIntersection7813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7813<T extends unknown[], V> = [...T, V];

type TuplifyUnion7813<T, L = LastOf7813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7813<TuplifyUnion7813<Exclude<T, L>>, L>;

type DeepPartial7813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7813<T[P]> }
  : T;

type Paths7813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7813<K, Paths7813<T[K], Prev7813[D]>> : never }[keyof T]
  : never;

type Prev7813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7813 {
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

type ConfigPaths7813 = Paths7813<NestedConfig7813>;

interface HeavyProps7813 {
  config: DeepPartial7813<NestedConfig7813>;
  path?: ConfigPaths7813;
}

const HeavyComponent7813 = memo(function HeavyComponent7813({ config }: HeavyProps7813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7813.displayName = 'HeavyComponent7813';
export default HeavyComponent7813;
