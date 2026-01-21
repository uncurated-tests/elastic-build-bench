'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14019<T> = T extends (infer U)[]
  ? DeepReadonlyArray14019<U>
  : T extends object
  ? DeepReadonlyObject14019<T>
  : T;

interface DeepReadonlyArray14019<T> extends ReadonlyArray<DeepReadonly14019<T>> {}

type DeepReadonlyObject14019<T> = {
  readonly [P in keyof T]: DeepReadonly14019<T[P]>;
};

type UnionToIntersection14019<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14019<T> = UnionToIntersection14019<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14019<T extends unknown[], V> = [...T, V];

type TuplifyUnion14019<T, L = LastOf14019<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14019<TuplifyUnion14019<Exclude<T, L>>, L>;

type DeepPartial14019<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14019<T[P]> }
  : T;

type Paths14019<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14019<K, Paths14019<T[K], Prev14019[D]>> : never }[keyof T]
  : never;

type Prev14019 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14019<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14019 {
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

type ConfigPaths14019 = Paths14019<NestedConfig14019>;

interface HeavyProps14019 {
  config: DeepPartial14019<NestedConfig14019>;
  path?: ConfigPaths14019;
}

const HeavyComponent14019 = memo(function HeavyComponent14019({ config }: HeavyProps14019) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14019) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14019 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14019: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14019.displayName = 'HeavyComponent14019';
export default HeavyComponent14019;
