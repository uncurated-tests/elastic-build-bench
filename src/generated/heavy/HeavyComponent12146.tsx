'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12146<T> = T extends (infer U)[]
  ? DeepReadonlyArray12146<U>
  : T extends object
  ? DeepReadonlyObject12146<T>
  : T;

interface DeepReadonlyArray12146<T> extends ReadonlyArray<DeepReadonly12146<T>> {}

type DeepReadonlyObject12146<T> = {
  readonly [P in keyof T]: DeepReadonly12146<T[P]>;
};

type UnionToIntersection12146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12146<T> = UnionToIntersection12146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12146<T extends unknown[], V> = [...T, V];

type TuplifyUnion12146<T, L = LastOf12146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12146<TuplifyUnion12146<Exclude<T, L>>, L>;

type DeepPartial12146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12146<T[P]> }
  : T;

type Paths12146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12146<K, Paths12146<T[K], Prev12146[D]>> : never }[keyof T]
  : never;

type Prev12146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12146 {
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

type ConfigPaths12146 = Paths12146<NestedConfig12146>;

interface HeavyProps12146 {
  config: DeepPartial12146<NestedConfig12146>;
  path?: ConfigPaths12146;
}

const HeavyComponent12146 = memo(function HeavyComponent12146({ config }: HeavyProps12146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12146.displayName = 'HeavyComponent12146';
export default HeavyComponent12146;
