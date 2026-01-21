'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12426<T> = T extends (infer U)[]
  ? DeepReadonlyArray12426<U>
  : T extends object
  ? DeepReadonlyObject12426<T>
  : T;

interface DeepReadonlyArray12426<T> extends ReadonlyArray<DeepReadonly12426<T>> {}

type DeepReadonlyObject12426<T> = {
  readonly [P in keyof T]: DeepReadonly12426<T[P]>;
};

type UnionToIntersection12426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12426<T> = UnionToIntersection12426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12426<T extends unknown[], V> = [...T, V];

type TuplifyUnion12426<T, L = LastOf12426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12426<TuplifyUnion12426<Exclude<T, L>>, L>;

type DeepPartial12426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12426<T[P]> }
  : T;

type Paths12426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12426<K, Paths12426<T[K], Prev12426[D]>> : never }[keyof T]
  : never;

type Prev12426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12426 {
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

type ConfigPaths12426 = Paths12426<NestedConfig12426>;

interface HeavyProps12426 {
  config: DeepPartial12426<NestedConfig12426>;
  path?: ConfigPaths12426;
}

const HeavyComponent12426 = memo(function HeavyComponent12426({ config }: HeavyProps12426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12426.displayName = 'HeavyComponent12426';
export default HeavyComponent12426;
