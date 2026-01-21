'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14924<T> = T extends (infer U)[]
  ? DeepReadonlyArray14924<U>
  : T extends object
  ? DeepReadonlyObject14924<T>
  : T;

interface DeepReadonlyArray14924<T> extends ReadonlyArray<DeepReadonly14924<T>> {}

type DeepReadonlyObject14924<T> = {
  readonly [P in keyof T]: DeepReadonly14924<T[P]>;
};

type UnionToIntersection14924<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14924<T> = UnionToIntersection14924<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14924<T extends unknown[], V> = [...T, V];

type TuplifyUnion14924<T, L = LastOf14924<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14924<TuplifyUnion14924<Exclude<T, L>>, L>;

type DeepPartial14924<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14924<T[P]> }
  : T;

type Paths14924<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14924<K, Paths14924<T[K], Prev14924[D]>> : never }[keyof T]
  : never;

type Prev14924 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14924<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14924 {
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

type ConfigPaths14924 = Paths14924<NestedConfig14924>;

interface HeavyProps14924 {
  config: DeepPartial14924<NestedConfig14924>;
  path?: ConfigPaths14924;
}

const HeavyComponent14924 = memo(function HeavyComponent14924({ config }: HeavyProps14924) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14924) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14924 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14924: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14924.displayName = 'HeavyComponent14924';
export default HeavyComponent14924;
