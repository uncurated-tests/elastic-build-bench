'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14401<T> = T extends (infer U)[]
  ? DeepReadonlyArray14401<U>
  : T extends object
  ? DeepReadonlyObject14401<T>
  : T;

interface DeepReadonlyArray14401<T> extends ReadonlyArray<DeepReadonly14401<T>> {}

type DeepReadonlyObject14401<T> = {
  readonly [P in keyof T]: DeepReadonly14401<T[P]>;
};

type UnionToIntersection14401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14401<T> = UnionToIntersection14401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14401<T extends unknown[], V> = [...T, V];

type TuplifyUnion14401<T, L = LastOf14401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14401<TuplifyUnion14401<Exclude<T, L>>, L>;

type DeepPartial14401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14401<T[P]> }
  : T;

type Paths14401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14401<K, Paths14401<T[K], Prev14401[D]>> : never }[keyof T]
  : never;

type Prev14401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14401 {
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

type ConfigPaths14401 = Paths14401<NestedConfig14401>;

interface HeavyProps14401 {
  config: DeepPartial14401<NestedConfig14401>;
  path?: ConfigPaths14401;
}

const HeavyComponent14401 = memo(function HeavyComponent14401({ config }: HeavyProps14401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14401.displayName = 'HeavyComponent14401';
export default HeavyComponent14401;
