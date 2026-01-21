'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12104<T> = T extends (infer U)[]
  ? DeepReadonlyArray12104<U>
  : T extends object
  ? DeepReadonlyObject12104<T>
  : T;

interface DeepReadonlyArray12104<T> extends ReadonlyArray<DeepReadonly12104<T>> {}

type DeepReadonlyObject12104<T> = {
  readonly [P in keyof T]: DeepReadonly12104<T[P]>;
};

type UnionToIntersection12104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12104<T> = UnionToIntersection12104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12104<T extends unknown[], V> = [...T, V];

type TuplifyUnion12104<T, L = LastOf12104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12104<TuplifyUnion12104<Exclude<T, L>>, L>;

type DeepPartial12104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12104<T[P]> }
  : T;

type Paths12104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12104<K, Paths12104<T[K], Prev12104[D]>> : never }[keyof T]
  : never;

type Prev12104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12104 {
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

type ConfigPaths12104 = Paths12104<NestedConfig12104>;

interface HeavyProps12104 {
  config: DeepPartial12104<NestedConfig12104>;
  path?: ConfigPaths12104;
}

const HeavyComponent12104 = memo(function HeavyComponent12104({ config }: HeavyProps12104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12104.displayName = 'HeavyComponent12104';
export default HeavyComponent12104;
