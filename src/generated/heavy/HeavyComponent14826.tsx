'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14826<T> = T extends (infer U)[]
  ? DeepReadonlyArray14826<U>
  : T extends object
  ? DeepReadonlyObject14826<T>
  : T;

interface DeepReadonlyArray14826<T> extends ReadonlyArray<DeepReadonly14826<T>> {}

type DeepReadonlyObject14826<T> = {
  readonly [P in keyof T]: DeepReadonly14826<T[P]>;
};

type UnionToIntersection14826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14826<T> = UnionToIntersection14826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14826<T extends unknown[], V> = [...T, V];

type TuplifyUnion14826<T, L = LastOf14826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14826<TuplifyUnion14826<Exclude<T, L>>, L>;

type DeepPartial14826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14826<T[P]> }
  : T;

type Paths14826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14826<K, Paths14826<T[K], Prev14826[D]>> : never }[keyof T]
  : never;

type Prev14826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14826 {
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

type ConfigPaths14826 = Paths14826<NestedConfig14826>;

interface HeavyProps14826 {
  config: DeepPartial14826<NestedConfig14826>;
  path?: ConfigPaths14826;
}

const HeavyComponent14826 = memo(function HeavyComponent14826({ config }: HeavyProps14826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14826.displayName = 'HeavyComponent14826';
export default HeavyComponent14826;
