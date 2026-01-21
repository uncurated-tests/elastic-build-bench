'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14157<T> = T extends (infer U)[]
  ? DeepReadonlyArray14157<U>
  : T extends object
  ? DeepReadonlyObject14157<T>
  : T;

interface DeepReadonlyArray14157<T> extends ReadonlyArray<DeepReadonly14157<T>> {}

type DeepReadonlyObject14157<T> = {
  readonly [P in keyof T]: DeepReadonly14157<T[P]>;
};

type UnionToIntersection14157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14157<T> = UnionToIntersection14157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14157<T extends unknown[], V> = [...T, V];

type TuplifyUnion14157<T, L = LastOf14157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14157<TuplifyUnion14157<Exclude<T, L>>, L>;

type DeepPartial14157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14157<T[P]> }
  : T;

type Paths14157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14157<K, Paths14157<T[K], Prev14157[D]>> : never }[keyof T]
  : never;

type Prev14157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14157 {
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

type ConfigPaths14157 = Paths14157<NestedConfig14157>;

interface HeavyProps14157 {
  config: DeepPartial14157<NestedConfig14157>;
  path?: ConfigPaths14157;
}

const HeavyComponent14157 = memo(function HeavyComponent14157({ config }: HeavyProps14157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14157.displayName = 'HeavyComponent14157';
export default HeavyComponent14157;
