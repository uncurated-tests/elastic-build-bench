'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12388<T> = T extends (infer U)[]
  ? DeepReadonlyArray12388<U>
  : T extends object
  ? DeepReadonlyObject12388<T>
  : T;

interface DeepReadonlyArray12388<T> extends ReadonlyArray<DeepReadonly12388<T>> {}

type DeepReadonlyObject12388<T> = {
  readonly [P in keyof T]: DeepReadonly12388<T[P]>;
};

type UnionToIntersection12388<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12388<T> = UnionToIntersection12388<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12388<T extends unknown[], V> = [...T, V];

type TuplifyUnion12388<T, L = LastOf12388<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12388<TuplifyUnion12388<Exclude<T, L>>, L>;

type DeepPartial12388<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12388<T[P]> }
  : T;

type Paths12388<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12388<K, Paths12388<T[K], Prev12388[D]>> : never }[keyof T]
  : never;

type Prev12388 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12388<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12388 {
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

type ConfigPaths12388 = Paths12388<NestedConfig12388>;

interface HeavyProps12388 {
  config: DeepPartial12388<NestedConfig12388>;
  path?: ConfigPaths12388;
}

const HeavyComponent12388 = memo(function HeavyComponent12388({ config }: HeavyProps12388) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12388) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12388 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12388: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12388.displayName = 'HeavyComponent12388';
export default HeavyComponent12388;
