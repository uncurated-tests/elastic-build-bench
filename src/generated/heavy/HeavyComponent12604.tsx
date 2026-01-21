'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12604<T> = T extends (infer U)[]
  ? DeepReadonlyArray12604<U>
  : T extends object
  ? DeepReadonlyObject12604<T>
  : T;

interface DeepReadonlyArray12604<T> extends ReadonlyArray<DeepReadonly12604<T>> {}

type DeepReadonlyObject12604<T> = {
  readonly [P in keyof T]: DeepReadonly12604<T[P]>;
};

type UnionToIntersection12604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12604<T> = UnionToIntersection12604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12604<T extends unknown[], V> = [...T, V];

type TuplifyUnion12604<T, L = LastOf12604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12604<TuplifyUnion12604<Exclude<T, L>>, L>;

type DeepPartial12604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12604<T[P]> }
  : T;

type Paths12604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12604<K, Paths12604<T[K], Prev12604[D]>> : never }[keyof T]
  : never;

type Prev12604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12604 {
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

type ConfigPaths12604 = Paths12604<NestedConfig12604>;

interface HeavyProps12604 {
  config: DeepPartial12604<NestedConfig12604>;
  path?: ConfigPaths12604;
}

const HeavyComponent12604 = memo(function HeavyComponent12604({ config }: HeavyProps12604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12604.displayName = 'HeavyComponent12604';
export default HeavyComponent12604;
