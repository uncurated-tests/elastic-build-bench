'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12223<T> = T extends (infer U)[]
  ? DeepReadonlyArray12223<U>
  : T extends object
  ? DeepReadonlyObject12223<T>
  : T;

interface DeepReadonlyArray12223<T> extends ReadonlyArray<DeepReadonly12223<T>> {}

type DeepReadonlyObject12223<T> = {
  readonly [P in keyof T]: DeepReadonly12223<T[P]>;
};

type UnionToIntersection12223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12223<T> = UnionToIntersection12223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12223<T extends unknown[], V> = [...T, V];

type TuplifyUnion12223<T, L = LastOf12223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12223<TuplifyUnion12223<Exclude<T, L>>, L>;

type DeepPartial12223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12223<T[P]> }
  : T;

type Paths12223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12223<K, Paths12223<T[K], Prev12223[D]>> : never }[keyof T]
  : never;

type Prev12223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12223 {
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

type ConfigPaths12223 = Paths12223<NestedConfig12223>;

interface HeavyProps12223 {
  config: DeepPartial12223<NestedConfig12223>;
  path?: ConfigPaths12223;
}

const HeavyComponent12223 = memo(function HeavyComponent12223({ config }: HeavyProps12223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12223.displayName = 'HeavyComponent12223';
export default HeavyComponent12223;
