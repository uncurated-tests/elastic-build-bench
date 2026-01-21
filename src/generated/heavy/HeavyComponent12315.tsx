'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12315<T> = T extends (infer U)[]
  ? DeepReadonlyArray12315<U>
  : T extends object
  ? DeepReadonlyObject12315<T>
  : T;

interface DeepReadonlyArray12315<T> extends ReadonlyArray<DeepReadonly12315<T>> {}

type DeepReadonlyObject12315<T> = {
  readonly [P in keyof T]: DeepReadonly12315<T[P]>;
};

type UnionToIntersection12315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12315<T> = UnionToIntersection12315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12315<T extends unknown[], V> = [...T, V];

type TuplifyUnion12315<T, L = LastOf12315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12315<TuplifyUnion12315<Exclude<T, L>>, L>;

type DeepPartial12315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12315<T[P]> }
  : T;

type Paths12315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12315<K, Paths12315<T[K], Prev12315[D]>> : never }[keyof T]
  : never;

type Prev12315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12315 {
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

type ConfigPaths12315 = Paths12315<NestedConfig12315>;

interface HeavyProps12315 {
  config: DeepPartial12315<NestedConfig12315>;
  path?: ConfigPaths12315;
}

const HeavyComponent12315 = memo(function HeavyComponent12315({ config }: HeavyProps12315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12315.displayName = 'HeavyComponent12315';
export default HeavyComponent12315;
