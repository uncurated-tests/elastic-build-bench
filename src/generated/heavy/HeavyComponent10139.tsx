'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10139<T> = T extends (infer U)[]
  ? DeepReadonlyArray10139<U>
  : T extends object
  ? DeepReadonlyObject10139<T>
  : T;

interface DeepReadonlyArray10139<T> extends ReadonlyArray<DeepReadonly10139<T>> {}

type DeepReadonlyObject10139<T> = {
  readonly [P in keyof T]: DeepReadonly10139<T[P]>;
};

type UnionToIntersection10139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10139<T> = UnionToIntersection10139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10139<T extends unknown[], V> = [...T, V];

type TuplifyUnion10139<T, L = LastOf10139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10139<TuplifyUnion10139<Exclude<T, L>>, L>;

type DeepPartial10139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10139<T[P]> }
  : T;

type Paths10139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10139<K, Paths10139<T[K], Prev10139[D]>> : never }[keyof T]
  : never;

type Prev10139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10139 {
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

type ConfigPaths10139 = Paths10139<NestedConfig10139>;

interface HeavyProps10139 {
  config: DeepPartial10139<NestedConfig10139>;
  path?: ConfigPaths10139;
}

const HeavyComponent10139 = memo(function HeavyComponent10139({ config }: HeavyProps10139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10139.displayName = 'HeavyComponent10139';
export default HeavyComponent10139;
