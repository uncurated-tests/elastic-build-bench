'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12896<T> = T extends (infer U)[]
  ? DeepReadonlyArray12896<U>
  : T extends object
  ? DeepReadonlyObject12896<T>
  : T;

interface DeepReadonlyArray12896<T> extends ReadonlyArray<DeepReadonly12896<T>> {}

type DeepReadonlyObject12896<T> = {
  readonly [P in keyof T]: DeepReadonly12896<T[P]>;
};

type UnionToIntersection12896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12896<T> = UnionToIntersection12896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12896<T extends unknown[], V> = [...T, V];

type TuplifyUnion12896<T, L = LastOf12896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12896<TuplifyUnion12896<Exclude<T, L>>, L>;

type DeepPartial12896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12896<T[P]> }
  : T;

type Paths12896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12896<K, Paths12896<T[K], Prev12896[D]>> : never }[keyof T]
  : never;

type Prev12896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12896 {
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

type ConfigPaths12896 = Paths12896<NestedConfig12896>;

interface HeavyProps12896 {
  config: DeepPartial12896<NestedConfig12896>;
  path?: ConfigPaths12896;
}

const HeavyComponent12896 = memo(function HeavyComponent12896({ config }: HeavyProps12896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12896.displayName = 'HeavyComponent12896';
export default HeavyComponent12896;
