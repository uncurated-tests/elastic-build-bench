'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14036<T> = T extends (infer U)[]
  ? DeepReadonlyArray14036<U>
  : T extends object
  ? DeepReadonlyObject14036<T>
  : T;

interface DeepReadonlyArray14036<T> extends ReadonlyArray<DeepReadonly14036<T>> {}

type DeepReadonlyObject14036<T> = {
  readonly [P in keyof T]: DeepReadonly14036<T[P]>;
};

type UnionToIntersection14036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14036<T> = UnionToIntersection14036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14036<T extends unknown[], V> = [...T, V];

type TuplifyUnion14036<T, L = LastOf14036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14036<TuplifyUnion14036<Exclude<T, L>>, L>;

type DeepPartial14036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14036<T[P]> }
  : T;

type Paths14036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14036<K, Paths14036<T[K], Prev14036[D]>> : never }[keyof T]
  : never;

type Prev14036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14036 {
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

type ConfigPaths14036 = Paths14036<NestedConfig14036>;

interface HeavyProps14036 {
  config: DeepPartial14036<NestedConfig14036>;
  path?: ConfigPaths14036;
}

const HeavyComponent14036 = memo(function HeavyComponent14036({ config }: HeavyProps14036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14036.displayName = 'HeavyComponent14036';
export default HeavyComponent14036;
