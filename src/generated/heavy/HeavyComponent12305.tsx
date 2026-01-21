'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12305<T> = T extends (infer U)[]
  ? DeepReadonlyArray12305<U>
  : T extends object
  ? DeepReadonlyObject12305<T>
  : T;

interface DeepReadonlyArray12305<T> extends ReadonlyArray<DeepReadonly12305<T>> {}

type DeepReadonlyObject12305<T> = {
  readonly [P in keyof T]: DeepReadonly12305<T[P]>;
};

type UnionToIntersection12305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12305<T> = UnionToIntersection12305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12305<T extends unknown[], V> = [...T, V];

type TuplifyUnion12305<T, L = LastOf12305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12305<TuplifyUnion12305<Exclude<T, L>>, L>;

type DeepPartial12305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12305<T[P]> }
  : T;

type Paths12305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12305<K, Paths12305<T[K], Prev12305[D]>> : never }[keyof T]
  : never;

type Prev12305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12305 {
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

type ConfigPaths12305 = Paths12305<NestedConfig12305>;

interface HeavyProps12305 {
  config: DeepPartial12305<NestedConfig12305>;
  path?: ConfigPaths12305;
}

const HeavyComponent12305 = memo(function HeavyComponent12305({ config }: HeavyProps12305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12305.displayName = 'HeavyComponent12305';
export default HeavyComponent12305;
