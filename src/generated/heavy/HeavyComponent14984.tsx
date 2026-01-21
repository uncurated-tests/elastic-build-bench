'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14984<T> = T extends (infer U)[]
  ? DeepReadonlyArray14984<U>
  : T extends object
  ? DeepReadonlyObject14984<T>
  : T;

interface DeepReadonlyArray14984<T> extends ReadonlyArray<DeepReadonly14984<T>> {}

type DeepReadonlyObject14984<T> = {
  readonly [P in keyof T]: DeepReadonly14984<T[P]>;
};

type UnionToIntersection14984<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14984<T> = UnionToIntersection14984<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14984<T extends unknown[], V> = [...T, V];

type TuplifyUnion14984<T, L = LastOf14984<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14984<TuplifyUnion14984<Exclude<T, L>>, L>;

type DeepPartial14984<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14984<T[P]> }
  : T;

type Paths14984<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14984<K, Paths14984<T[K], Prev14984[D]>> : never }[keyof T]
  : never;

type Prev14984 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14984<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14984 {
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

type ConfigPaths14984 = Paths14984<NestedConfig14984>;

interface HeavyProps14984 {
  config: DeepPartial14984<NestedConfig14984>;
  path?: ConfigPaths14984;
}

const HeavyComponent14984 = memo(function HeavyComponent14984({ config }: HeavyProps14984) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14984) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14984 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14984: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14984.displayName = 'HeavyComponent14984';
export default HeavyComponent14984;
