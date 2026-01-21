'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4102<T> = T extends (infer U)[]
  ? DeepReadonlyArray4102<U>
  : T extends object
  ? DeepReadonlyObject4102<T>
  : T;

interface DeepReadonlyArray4102<T> extends ReadonlyArray<DeepReadonly4102<T>> {}

type DeepReadonlyObject4102<T> = {
  readonly [P in keyof T]: DeepReadonly4102<T[P]>;
};

type UnionToIntersection4102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4102<T> = UnionToIntersection4102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4102<T extends unknown[], V> = [...T, V];

type TuplifyUnion4102<T, L = LastOf4102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4102<TuplifyUnion4102<Exclude<T, L>>, L>;

type DeepPartial4102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4102<T[P]> }
  : T;

type Paths4102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4102<K, Paths4102<T[K], Prev4102[D]>> : never }[keyof T]
  : never;

type Prev4102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4102 {
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

type ConfigPaths4102 = Paths4102<NestedConfig4102>;

interface HeavyProps4102 {
  config: DeepPartial4102<NestedConfig4102>;
  path?: ConfigPaths4102;
}

const HeavyComponent4102 = memo(function HeavyComponent4102({ config }: HeavyProps4102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4102.displayName = 'HeavyComponent4102';
export default HeavyComponent4102;
