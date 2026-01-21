'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12537<T> = T extends (infer U)[]
  ? DeepReadonlyArray12537<U>
  : T extends object
  ? DeepReadonlyObject12537<T>
  : T;

interface DeepReadonlyArray12537<T> extends ReadonlyArray<DeepReadonly12537<T>> {}

type DeepReadonlyObject12537<T> = {
  readonly [P in keyof T]: DeepReadonly12537<T[P]>;
};

type UnionToIntersection12537<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12537<T> = UnionToIntersection12537<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12537<T extends unknown[], V> = [...T, V];

type TuplifyUnion12537<T, L = LastOf12537<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12537<TuplifyUnion12537<Exclude<T, L>>, L>;

type DeepPartial12537<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12537<T[P]> }
  : T;

type Paths12537<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12537<K, Paths12537<T[K], Prev12537[D]>> : never }[keyof T]
  : never;

type Prev12537 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12537<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12537 {
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

type ConfigPaths12537 = Paths12537<NestedConfig12537>;

interface HeavyProps12537 {
  config: DeepPartial12537<NestedConfig12537>;
  path?: ConfigPaths12537;
}

const HeavyComponent12537 = memo(function HeavyComponent12537({ config }: HeavyProps12537) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12537) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12537 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12537: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12537.displayName = 'HeavyComponent12537';
export default HeavyComponent12537;
