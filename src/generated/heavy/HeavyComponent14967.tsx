'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14967<T> = T extends (infer U)[]
  ? DeepReadonlyArray14967<U>
  : T extends object
  ? DeepReadonlyObject14967<T>
  : T;

interface DeepReadonlyArray14967<T> extends ReadonlyArray<DeepReadonly14967<T>> {}

type DeepReadonlyObject14967<T> = {
  readonly [P in keyof T]: DeepReadonly14967<T[P]>;
};

type UnionToIntersection14967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14967<T> = UnionToIntersection14967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14967<T extends unknown[], V> = [...T, V];

type TuplifyUnion14967<T, L = LastOf14967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14967<TuplifyUnion14967<Exclude<T, L>>, L>;

type DeepPartial14967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14967<T[P]> }
  : T;

type Paths14967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14967<K, Paths14967<T[K], Prev14967[D]>> : never }[keyof T]
  : never;

type Prev14967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14967 {
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

type ConfigPaths14967 = Paths14967<NestedConfig14967>;

interface HeavyProps14967 {
  config: DeepPartial14967<NestedConfig14967>;
  path?: ConfigPaths14967;
}

const HeavyComponent14967 = memo(function HeavyComponent14967({ config }: HeavyProps14967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14967.displayName = 'HeavyComponent14967';
export default HeavyComponent14967;
