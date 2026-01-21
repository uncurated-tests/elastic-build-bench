'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14051<T> = T extends (infer U)[]
  ? DeepReadonlyArray14051<U>
  : T extends object
  ? DeepReadonlyObject14051<T>
  : T;

interface DeepReadonlyArray14051<T> extends ReadonlyArray<DeepReadonly14051<T>> {}

type DeepReadonlyObject14051<T> = {
  readonly [P in keyof T]: DeepReadonly14051<T[P]>;
};

type UnionToIntersection14051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14051<T> = UnionToIntersection14051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14051<T extends unknown[], V> = [...T, V];

type TuplifyUnion14051<T, L = LastOf14051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14051<TuplifyUnion14051<Exclude<T, L>>, L>;

type DeepPartial14051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14051<T[P]> }
  : T;

type Paths14051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14051<K, Paths14051<T[K], Prev14051[D]>> : never }[keyof T]
  : never;

type Prev14051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14051 {
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

type ConfigPaths14051 = Paths14051<NestedConfig14051>;

interface HeavyProps14051 {
  config: DeepPartial14051<NestedConfig14051>;
  path?: ConfigPaths14051;
}

const HeavyComponent14051 = memo(function HeavyComponent14051({ config }: HeavyProps14051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14051.displayName = 'HeavyComponent14051';
export default HeavyComponent14051;
