'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14977<T> = T extends (infer U)[]
  ? DeepReadonlyArray14977<U>
  : T extends object
  ? DeepReadonlyObject14977<T>
  : T;

interface DeepReadonlyArray14977<T> extends ReadonlyArray<DeepReadonly14977<T>> {}

type DeepReadonlyObject14977<T> = {
  readonly [P in keyof T]: DeepReadonly14977<T[P]>;
};

type UnionToIntersection14977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14977<T> = UnionToIntersection14977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14977<T extends unknown[], V> = [...T, V];

type TuplifyUnion14977<T, L = LastOf14977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14977<TuplifyUnion14977<Exclude<T, L>>, L>;

type DeepPartial14977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14977<T[P]> }
  : T;

type Paths14977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14977<K, Paths14977<T[K], Prev14977[D]>> : never }[keyof T]
  : never;

type Prev14977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14977 {
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

type ConfigPaths14977 = Paths14977<NestedConfig14977>;

interface HeavyProps14977 {
  config: DeepPartial14977<NestedConfig14977>;
  path?: ConfigPaths14977;
}

const HeavyComponent14977 = memo(function HeavyComponent14977({ config }: HeavyProps14977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14977.displayName = 'HeavyComponent14977';
export default HeavyComponent14977;
