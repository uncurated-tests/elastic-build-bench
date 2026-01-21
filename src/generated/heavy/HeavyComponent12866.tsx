'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12866<T> = T extends (infer U)[]
  ? DeepReadonlyArray12866<U>
  : T extends object
  ? DeepReadonlyObject12866<T>
  : T;

interface DeepReadonlyArray12866<T> extends ReadonlyArray<DeepReadonly12866<T>> {}

type DeepReadonlyObject12866<T> = {
  readonly [P in keyof T]: DeepReadonly12866<T[P]>;
};

type UnionToIntersection12866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12866<T> = UnionToIntersection12866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12866<T extends unknown[], V> = [...T, V];

type TuplifyUnion12866<T, L = LastOf12866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12866<TuplifyUnion12866<Exclude<T, L>>, L>;

type DeepPartial12866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12866<T[P]> }
  : T;

type Paths12866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12866<K, Paths12866<T[K], Prev12866[D]>> : never }[keyof T]
  : never;

type Prev12866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12866 {
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

type ConfigPaths12866 = Paths12866<NestedConfig12866>;

interface HeavyProps12866 {
  config: DeepPartial12866<NestedConfig12866>;
  path?: ConfigPaths12866;
}

const HeavyComponent12866 = memo(function HeavyComponent12866({ config }: HeavyProps12866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12866.displayName = 'HeavyComponent12866';
export default HeavyComponent12866;
