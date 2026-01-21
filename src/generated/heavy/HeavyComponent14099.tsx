'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14099<T> = T extends (infer U)[]
  ? DeepReadonlyArray14099<U>
  : T extends object
  ? DeepReadonlyObject14099<T>
  : T;

interface DeepReadonlyArray14099<T> extends ReadonlyArray<DeepReadonly14099<T>> {}

type DeepReadonlyObject14099<T> = {
  readonly [P in keyof T]: DeepReadonly14099<T[P]>;
};

type UnionToIntersection14099<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14099<T> = UnionToIntersection14099<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14099<T extends unknown[], V> = [...T, V];

type TuplifyUnion14099<T, L = LastOf14099<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14099<TuplifyUnion14099<Exclude<T, L>>, L>;

type DeepPartial14099<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14099<T[P]> }
  : T;

type Paths14099<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14099<K, Paths14099<T[K], Prev14099[D]>> : never }[keyof T]
  : never;

type Prev14099 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14099<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14099 {
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

type ConfigPaths14099 = Paths14099<NestedConfig14099>;

interface HeavyProps14099 {
  config: DeepPartial14099<NestedConfig14099>;
  path?: ConfigPaths14099;
}

const HeavyComponent14099 = memo(function HeavyComponent14099({ config }: HeavyProps14099) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14099) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14099 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14099: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14099.displayName = 'HeavyComponent14099';
export default HeavyComponent14099;
