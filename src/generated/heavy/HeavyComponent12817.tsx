'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12817<T> = T extends (infer U)[]
  ? DeepReadonlyArray12817<U>
  : T extends object
  ? DeepReadonlyObject12817<T>
  : T;

interface DeepReadonlyArray12817<T> extends ReadonlyArray<DeepReadonly12817<T>> {}

type DeepReadonlyObject12817<T> = {
  readonly [P in keyof T]: DeepReadonly12817<T[P]>;
};

type UnionToIntersection12817<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12817<T> = UnionToIntersection12817<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12817<T extends unknown[], V> = [...T, V];

type TuplifyUnion12817<T, L = LastOf12817<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12817<TuplifyUnion12817<Exclude<T, L>>, L>;

type DeepPartial12817<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12817<T[P]> }
  : T;

type Paths12817<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12817<K, Paths12817<T[K], Prev12817[D]>> : never }[keyof T]
  : never;

type Prev12817 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12817<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12817 {
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

type ConfigPaths12817 = Paths12817<NestedConfig12817>;

interface HeavyProps12817 {
  config: DeepPartial12817<NestedConfig12817>;
  path?: ConfigPaths12817;
}

const HeavyComponent12817 = memo(function HeavyComponent12817({ config }: HeavyProps12817) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12817) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12817 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12817: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12817.displayName = 'HeavyComponent12817';
export default HeavyComponent12817;
