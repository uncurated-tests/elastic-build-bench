'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12289<T> = T extends (infer U)[]
  ? DeepReadonlyArray12289<U>
  : T extends object
  ? DeepReadonlyObject12289<T>
  : T;

interface DeepReadonlyArray12289<T> extends ReadonlyArray<DeepReadonly12289<T>> {}

type DeepReadonlyObject12289<T> = {
  readonly [P in keyof T]: DeepReadonly12289<T[P]>;
};

type UnionToIntersection12289<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12289<T> = UnionToIntersection12289<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12289<T extends unknown[], V> = [...T, V];

type TuplifyUnion12289<T, L = LastOf12289<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12289<TuplifyUnion12289<Exclude<T, L>>, L>;

type DeepPartial12289<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12289<T[P]> }
  : T;

type Paths12289<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12289<K, Paths12289<T[K], Prev12289[D]>> : never }[keyof T]
  : never;

type Prev12289 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12289<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12289 {
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

type ConfigPaths12289 = Paths12289<NestedConfig12289>;

interface HeavyProps12289 {
  config: DeepPartial12289<NestedConfig12289>;
  path?: ConfigPaths12289;
}

const HeavyComponent12289 = memo(function HeavyComponent12289({ config }: HeavyProps12289) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12289) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12289 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12289: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12289.displayName = 'HeavyComponent12289';
export default HeavyComponent12289;
