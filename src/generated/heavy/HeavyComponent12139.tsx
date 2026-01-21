'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12139<T> = T extends (infer U)[]
  ? DeepReadonlyArray12139<U>
  : T extends object
  ? DeepReadonlyObject12139<T>
  : T;

interface DeepReadonlyArray12139<T> extends ReadonlyArray<DeepReadonly12139<T>> {}

type DeepReadonlyObject12139<T> = {
  readonly [P in keyof T]: DeepReadonly12139<T[P]>;
};

type UnionToIntersection12139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12139<T> = UnionToIntersection12139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12139<T extends unknown[], V> = [...T, V];

type TuplifyUnion12139<T, L = LastOf12139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12139<TuplifyUnion12139<Exclude<T, L>>, L>;

type DeepPartial12139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12139<T[P]> }
  : T;

type Paths12139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12139<K, Paths12139<T[K], Prev12139[D]>> : never }[keyof T]
  : never;

type Prev12139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12139 {
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

type ConfigPaths12139 = Paths12139<NestedConfig12139>;

interface HeavyProps12139 {
  config: DeepPartial12139<NestedConfig12139>;
  path?: ConfigPaths12139;
}

const HeavyComponent12139 = memo(function HeavyComponent12139({ config }: HeavyProps12139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12139.displayName = 'HeavyComponent12139';
export default HeavyComponent12139;
