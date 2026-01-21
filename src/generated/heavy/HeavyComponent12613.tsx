'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12613<T> = T extends (infer U)[]
  ? DeepReadonlyArray12613<U>
  : T extends object
  ? DeepReadonlyObject12613<T>
  : T;

interface DeepReadonlyArray12613<T> extends ReadonlyArray<DeepReadonly12613<T>> {}

type DeepReadonlyObject12613<T> = {
  readonly [P in keyof T]: DeepReadonly12613<T[P]>;
};

type UnionToIntersection12613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12613<T> = UnionToIntersection12613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12613<T extends unknown[], V> = [...T, V];

type TuplifyUnion12613<T, L = LastOf12613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12613<TuplifyUnion12613<Exclude<T, L>>, L>;

type DeepPartial12613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12613<T[P]> }
  : T;

type Paths12613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12613<K, Paths12613<T[K], Prev12613[D]>> : never }[keyof T]
  : never;

type Prev12613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12613 {
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

type ConfigPaths12613 = Paths12613<NestedConfig12613>;

interface HeavyProps12613 {
  config: DeepPartial12613<NestedConfig12613>;
  path?: ConfigPaths12613;
}

const HeavyComponent12613 = memo(function HeavyComponent12613({ config }: HeavyProps12613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12613.displayName = 'HeavyComponent12613';
export default HeavyComponent12613;
