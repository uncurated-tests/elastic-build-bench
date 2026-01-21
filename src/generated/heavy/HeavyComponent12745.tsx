'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12745<T> = T extends (infer U)[]
  ? DeepReadonlyArray12745<U>
  : T extends object
  ? DeepReadonlyObject12745<T>
  : T;

interface DeepReadonlyArray12745<T> extends ReadonlyArray<DeepReadonly12745<T>> {}

type DeepReadonlyObject12745<T> = {
  readonly [P in keyof T]: DeepReadonly12745<T[P]>;
};

type UnionToIntersection12745<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12745<T> = UnionToIntersection12745<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12745<T extends unknown[], V> = [...T, V];

type TuplifyUnion12745<T, L = LastOf12745<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12745<TuplifyUnion12745<Exclude<T, L>>, L>;

type DeepPartial12745<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12745<T[P]> }
  : T;

type Paths12745<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12745<K, Paths12745<T[K], Prev12745[D]>> : never }[keyof T]
  : never;

type Prev12745 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12745<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12745 {
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

type ConfigPaths12745 = Paths12745<NestedConfig12745>;

interface HeavyProps12745 {
  config: DeepPartial12745<NestedConfig12745>;
  path?: ConfigPaths12745;
}

const HeavyComponent12745 = memo(function HeavyComponent12745({ config }: HeavyProps12745) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12745) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12745 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12745: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12745.displayName = 'HeavyComponent12745';
export default HeavyComponent12745;
