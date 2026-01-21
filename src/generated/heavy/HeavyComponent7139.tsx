'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7139<T> = T extends (infer U)[]
  ? DeepReadonlyArray7139<U>
  : T extends object
  ? DeepReadonlyObject7139<T>
  : T;

interface DeepReadonlyArray7139<T> extends ReadonlyArray<DeepReadonly7139<T>> {}

type DeepReadonlyObject7139<T> = {
  readonly [P in keyof T]: DeepReadonly7139<T[P]>;
};

type UnionToIntersection7139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7139<T> = UnionToIntersection7139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7139<T extends unknown[], V> = [...T, V];

type TuplifyUnion7139<T, L = LastOf7139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7139<TuplifyUnion7139<Exclude<T, L>>, L>;

type DeepPartial7139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7139<T[P]> }
  : T;

type Paths7139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7139<K, Paths7139<T[K], Prev7139[D]>> : never }[keyof T]
  : never;

type Prev7139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7139 {
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

type ConfigPaths7139 = Paths7139<NestedConfig7139>;

interface HeavyProps7139 {
  config: DeepPartial7139<NestedConfig7139>;
  path?: ConfigPaths7139;
}

const HeavyComponent7139 = memo(function HeavyComponent7139({ config }: HeavyProps7139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7139.displayName = 'HeavyComponent7139';
export default HeavyComponent7139;
