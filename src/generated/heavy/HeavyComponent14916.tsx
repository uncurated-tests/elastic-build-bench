'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14916<T> = T extends (infer U)[]
  ? DeepReadonlyArray14916<U>
  : T extends object
  ? DeepReadonlyObject14916<T>
  : T;

interface DeepReadonlyArray14916<T> extends ReadonlyArray<DeepReadonly14916<T>> {}

type DeepReadonlyObject14916<T> = {
  readonly [P in keyof T]: DeepReadonly14916<T[P]>;
};

type UnionToIntersection14916<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14916<T> = UnionToIntersection14916<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14916<T extends unknown[], V> = [...T, V];

type TuplifyUnion14916<T, L = LastOf14916<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14916<TuplifyUnion14916<Exclude<T, L>>, L>;

type DeepPartial14916<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14916<T[P]> }
  : T;

type Paths14916<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14916<K, Paths14916<T[K], Prev14916[D]>> : never }[keyof T]
  : never;

type Prev14916 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14916<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14916 {
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

type ConfigPaths14916 = Paths14916<NestedConfig14916>;

interface HeavyProps14916 {
  config: DeepPartial14916<NestedConfig14916>;
  path?: ConfigPaths14916;
}

const HeavyComponent14916 = memo(function HeavyComponent14916({ config }: HeavyProps14916) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14916) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14916 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14916: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14916.displayName = 'HeavyComponent14916';
export default HeavyComponent14916;
