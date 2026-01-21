'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12561<T> = T extends (infer U)[]
  ? DeepReadonlyArray12561<U>
  : T extends object
  ? DeepReadonlyObject12561<T>
  : T;

interface DeepReadonlyArray12561<T> extends ReadonlyArray<DeepReadonly12561<T>> {}

type DeepReadonlyObject12561<T> = {
  readonly [P in keyof T]: DeepReadonly12561<T[P]>;
};

type UnionToIntersection12561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12561<T> = UnionToIntersection12561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12561<T extends unknown[], V> = [...T, V];

type TuplifyUnion12561<T, L = LastOf12561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12561<TuplifyUnion12561<Exclude<T, L>>, L>;

type DeepPartial12561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12561<T[P]> }
  : T;

type Paths12561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12561<K, Paths12561<T[K], Prev12561[D]>> : never }[keyof T]
  : never;

type Prev12561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12561 {
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

type ConfigPaths12561 = Paths12561<NestedConfig12561>;

interface HeavyProps12561 {
  config: DeepPartial12561<NestedConfig12561>;
  path?: ConfigPaths12561;
}

const HeavyComponent12561 = memo(function HeavyComponent12561({ config }: HeavyProps12561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12561.displayName = 'HeavyComponent12561';
export default HeavyComponent12561;
