'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12373<T> = T extends (infer U)[]
  ? DeepReadonlyArray12373<U>
  : T extends object
  ? DeepReadonlyObject12373<T>
  : T;

interface DeepReadonlyArray12373<T> extends ReadonlyArray<DeepReadonly12373<T>> {}

type DeepReadonlyObject12373<T> = {
  readonly [P in keyof T]: DeepReadonly12373<T[P]>;
};

type UnionToIntersection12373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12373<T> = UnionToIntersection12373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12373<T extends unknown[], V> = [...T, V];

type TuplifyUnion12373<T, L = LastOf12373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12373<TuplifyUnion12373<Exclude<T, L>>, L>;

type DeepPartial12373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12373<T[P]> }
  : T;

type Paths12373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12373<K, Paths12373<T[K], Prev12373[D]>> : never }[keyof T]
  : never;

type Prev12373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12373 {
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

type ConfigPaths12373 = Paths12373<NestedConfig12373>;

interface HeavyProps12373 {
  config: DeepPartial12373<NestedConfig12373>;
  path?: ConfigPaths12373;
}

const HeavyComponent12373 = memo(function HeavyComponent12373({ config }: HeavyProps12373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12373.displayName = 'HeavyComponent12373';
export default HeavyComponent12373;
