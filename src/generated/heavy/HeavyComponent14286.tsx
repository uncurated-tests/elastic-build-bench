'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14286<T> = T extends (infer U)[]
  ? DeepReadonlyArray14286<U>
  : T extends object
  ? DeepReadonlyObject14286<T>
  : T;

interface DeepReadonlyArray14286<T> extends ReadonlyArray<DeepReadonly14286<T>> {}

type DeepReadonlyObject14286<T> = {
  readonly [P in keyof T]: DeepReadonly14286<T[P]>;
};

type UnionToIntersection14286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14286<T> = UnionToIntersection14286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14286<T extends unknown[], V> = [...T, V];

type TuplifyUnion14286<T, L = LastOf14286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14286<TuplifyUnion14286<Exclude<T, L>>, L>;

type DeepPartial14286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14286<T[P]> }
  : T;

type Paths14286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14286<K, Paths14286<T[K], Prev14286[D]>> : never }[keyof T]
  : never;

type Prev14286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14286 {
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

type ConfigPaths14286 = Paths14286<NestedConfig14286>;

interface HeavyProps14286 {
  config: DeepPartial14286<NestedConfig14286>;
  path?: ConfigPaths14286;
}

const HeavyComponent14286 = memo(function HeavyComponent14286({ config }: HeavyProps14286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14286.displayName = 'HeavyComponent14286';
export default HeavyComponent14286;
