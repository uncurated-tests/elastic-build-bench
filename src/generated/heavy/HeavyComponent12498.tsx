'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12498<T> = T extends (infer U)[]
  ? DeepReadonlyArray12498<U>
  : T extends object
  ? DeepReadonlyObject12498<T>
  : T;

interface DeepReadonlyArray12498<T> extends ReadonlyArray<DeepReadonly12498<T>> {}

type DeepReadonlyObject12498<T> = {
  readonly [P in keyof T]: DeepReadonly12498<T[P]>;
};

type UnionToIntersection12498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12498<T> = UnionToIntersection12498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12498<T extends unknown[], V> = [...T, V];

type TuplifyUnion12498<T, L = LastOf12498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12498<TuplifyUnion12498<Exclude<T, L>>, L>;

type DeepPartial12498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12498<T[P]> }
  : T;

type Paths12498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12498<K, Paths12498<T[K], Prev12498[D]>> : never }[keyof T]
  : never;

type Prev12498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12498 {
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

type ConfigPaths12498 = Paths12498<NestedConfig12498>;

interface HeavyProps12498 {
  config: DeepPartial12498<NestedConfig12498>;
  path?: ConfigPaths12498;
}

const HeavyComponent12498 = memo(function HeavyComponent12498({ config }: HeavyProps12498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12498.displayName = 'HeavyComponent12498';
export default HeavyComponent12498;
