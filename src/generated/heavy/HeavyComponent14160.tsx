'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14160<T> = T extends (infer U)[]
  ? DeepReadonlyArray14160<U>
  : T extends object
  ? DeepReadonlyObject14160<T>
  : T;

interface DeepReadonlyArray14160<T> extends ReadonlyArray<DeepReadonly14160<T>> {}

type DeepReadonlyObject14160<T> = {
  readonly [P in keyof T]: DeepReadonly14160<T[P]>;
};

type UnionToIntersection14160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14160<T> = UnionToIntersection14160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14160<T extends unknown[], V> = [...T, V];

type TuplifyUnion14160<T, L = LastOf14160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14160<TuplifyUnion14160<Exclude<T, L>>, L>;

type DeepPartial14160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14160<T[P]> }
  : T;

type Paths14160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14160<K, Paths14160<T[K], Prev14160[D]>> : never }[keyof T]
  : never;

type Prev14160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14160 {
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

type ConfigPaths14160 = Paths14160<NestedConfig14160>;

interface HeavyProps14160 {
  config: DeepPartial14160<NestedConfig14160>;
  path?: ConfigPaths14160;
}

const HeavyComponent14160 = memo(function HeavyComponent14160({ config }: HeavyProps14160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14160.displayName = 'HeavyComponent14160';
export default HeavyComponent14160;
