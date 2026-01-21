'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12513<T> = T extends (infer U)[]
  ? DeepReadonlyArray12513<U>
  : T extends object
  ? DeepReadonlyObject12513<T>
  : T;

interface DeepReadonlyArray12513<T> extends ReadonlyArray<DeepReadonly12513<T>> {}

type DeepReadonlyObject12513<T> = {
  readonly [P in keyof T]: DeepReadonly12513<T[P]>;
};

type UnionToIntersection12513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12513<T> = UnionToIntersection12513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12513<T extends unknown[], V> = [...T, V];

type TuplifyUnion12513<T, L = LastOf12513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12513<TuplifyUnion12513<Exclude<T, L>>, L>;

type DeepPartial12513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12513<T[P]> }
  : T;

type Paths12513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12513<K, Paths12513<T[K], Prev12513[D]>> : never }[keyof T]
  : never;

type Prev12513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12513 {
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

type ConfigPaths12513 = Paths12513<NestedConfig12513>;

interface HeavyProps12513 {
  config: DeepPartial12513<NestedConfig12513>;
  path?: ConfigPaths12513;
}

const HeavyComponent12513 = memo(function HeavyComponent12513({ config }: HeavyProps12513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12513.displayName = 'HeavyComponent12513';
export default HeavyComponent12513;
