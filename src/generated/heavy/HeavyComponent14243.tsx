'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14243<T> = T extends (infer U)[]
  ? DeepReadonlyArray14243<U>
  : T extends object
  ? DeepReadonlyObject14243<T>
  : T;

interface DeepReadonlyArray14243<T> extends ReadonlyArray<DeepReadonly14243<T>> {}

type DeepReadonlyObject14243<T> = {
  readonly [P in keyof T]: DeepReadonly14243<T[P]>;
};

type UnionToIntersection14243<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14243<T> = UnionToIntersection14243<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14243<T extends unknown[], V> = [...T, V];

type TuplifyUnion14243<T, L = LastOf14243<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14243<TuplifyUnion14243<Exclude<T, L>>, L>;

type DeepPartial14243<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14243<T[P]> }
  : T;

type Paths14243<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14243<K, Paths14243<T[K], Prev14243[D]>> : never }[keyof T]
  : never;

type Prev14243 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14243<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14243 {
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

type ConfigPaths14243 = Paths14243<NestedConfig14243>;

interface HeavyProps14243 {
  config: DeepPartial14243<NestedConfig14243>;
  path?: ConfigPaths14243;
}

const HeavyComponent14243 = memo(function HeavyComponent14243({ config }: HeavyProps14243) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14243) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14243 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14243: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14243.displayName = 'HeavyComponent14243';
export default HeavyComponent14243;
