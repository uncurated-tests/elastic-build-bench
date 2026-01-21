'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14878<T> = T extends (infer U)[]
  ? DeepReadonlyArray14878<U>
  : T extends object
  ? DeepReadonlyObject14878<T>
  : T;

interface DeepReadonlyArray14878<T> extends ReadonlyArray<DeepReadonly14878<T>> {}

type DeepReadonlyObject14878<T> = {
  readonly [P in keyof T]: DeepReadonly14878<T[P]>;
};

type UnionToIntersection14878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14878<T> = UnionToIntersection14878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14878<T extends unknown[], V> = [...T, V];

type TuplifyUnion14878<T, L = LastOf14878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14878<TuplifyUnion14878<Exclude<T, L>>, L>;

type DeepPartial14878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14878<T[P]> }
  : T;

type Paths14878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14878<K, Paths14878<T[K], Prev14878[D]>> : never }[keyof T]
  : never;

type Prev14878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14878 {
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

type ConfigPaths14878 = Paths14878<NestedConfig14878>;

interface HeavyProps14878 {
  config: DeepPartial14878<NestedConfig14878>;
  path?: ConfigPaths14878;
}

const HeavyComponent14878 = memo(function HeavyComponent14878({ config }: HeavyProps14878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14878.displayName = 'HeavyComponent14878';
export default HeavyComponent14878;
