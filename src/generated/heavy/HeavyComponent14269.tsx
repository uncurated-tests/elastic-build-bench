'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14269<T> = T extends (infer U)[]
  ? DeepReadonlyArray14269<U>
  : T extends object
  ? DeepReadonlyObject14269<T>
  : T;

interface DeepReadonlyArray14269<T> extends ReadonlyArray<DeepReadonly14269<T>> {}

type DeepReadonlyObject14269<T> = {
  readonly [P in keyof T]: DeepReadonly14269<T[P]>;
};

type UnionToIntersection14269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14269<T> = UnionToIntersection14269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14269<T extends unknown[], V> = [...T, V];

type TuplifyUnion14269<T, L = LastOf14269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14269<TuplifyUnion14269<Exclude<T, L>>, L>;

type DeepPartial14269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14269<T[P]> }
  : T;

type Paths14269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14269<K, Paths14269<T[K], Prev14269[D]>> : never }[keyof T]
  : never;

type Prev14269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14269 {
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

type ConfigPaths14269 = Paths14269<NestedConfig14269>;

interface HeavyProps14269 {
  config: DeepPartial14269<NestedConfig14269>;
  path?: ConfigPaths14269;
}

const HeavyComponent14269 = memo(function HeavyComponent14269({ config }: HeavyProps14269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14269.displayName = 'HeavyComponent14269';
export default HeavyComponent14269;
