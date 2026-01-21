'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12177<T> = T extends (infer U)[]
  ? DeepReadonlyArray12177<U>
  : T extends object
  ? DeepReadonlyObject12177<T>
  : T;

interface DeepReadonlyArray12177<T> extends ReadonlyArray<DeepReadonly12177<T>> {}

type DeepReadonlyObject12177<T> = {
  readonly [P in keyof T]: DeepReadonly12177<T[P]>;
};

type UnionToIntersection12177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12177<T> = UnionToIntersection12177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12177<T extends unknown[], V> = [...T, V];

type TuplifyUnion12177<T, L = LastOf12177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12177<TuplifyUnion12177<Exclude<T, L>>, L>;

type DeepPartial12177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12177<T[P]> }
  : T;

type Paths12177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12177<K, Paths12177<T[K], Prev12177[D]>> : never }[keyof T]
  : never;

type Prev12177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12177 {
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

type ConfigPaths12177 = Paths12177<NestedConfig12177>;

interface HeavyProps12177 {
  config: DeepPartial12177<NestedConfig12177>;
  path?: ConfigPaths12177;
}

const HeavyComponent12177 = memo(function HeavyComponent12177({ config }: HeavyProps12177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12177.displayName = 'HeavyComponent12177';
export default HeavyComponent12177;
