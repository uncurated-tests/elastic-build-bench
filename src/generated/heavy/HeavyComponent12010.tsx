'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12010<T> = T extends (infer U)[]
  ? DeepReadonlyArray12010<U>
  : T extends object
  ? DeepReadonlyObject12010<T>
  : T;

interface DeepReadonlyArray12010<T> extends ReadonlyArray<DeepReadonly12010<T>> {}

type DeepReadonlyObject12010<T> = {
  readonly [P in keyof T]: DeepReadonly12010<T[P]>;
};

type UnionToIntersection12010<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12010<T> = UnionToIntersection12010<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12010<T extends unknown[], V> = [...T, V];

type TuplifyUnion12010<T, L = LastOf12010<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12010<TuplifyUnion12010<Exclude<T, L>>, L>;

type DeepPartial12010<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12010<T[P]> }
  : T;

type Paths12010<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12010<K, Paths12010<T[K], Prev12010[D]>> : never }[keyof T]
  : never;

type Prev12010 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12010<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12010 {
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

type ConfigPaths12010 = Paths12010<NestedConfig12010>;

interface HeavyProps12010 {
  config: DeepPartial12010<NestedConfig12010>;
  path?: ConfigPaths12010;
}

const HeavyComponent12010 = memo(function HeavyComponent12010({ config }: HeavyProps12010) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12010) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12010 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12010: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12010.displayName = 'HeavyComponent12010';
export default HeavyComponent12010;
