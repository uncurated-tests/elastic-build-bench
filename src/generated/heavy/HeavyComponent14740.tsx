'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14740<T> = T extends (infer U)[]
  ? DeepReadonlyArray14740<U>
  : T extends object
  ? DeepReadonlyObject14740<T>
  : T;

interface DeepReadonlyArray14740<T> extends ReadonlyArray<DeepReadonly14740<T>> {}

type DeepReadonlyObject14740<T> = {
  readonly [P in keyof T]: DeepReadonly14740<T[P]>;
};

type UnionToIntersection14740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14740<T> = UnionToIntersection14740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14740<T extends unknown[], V> = [...T, V];

type TuplifyUnion14740<T, L = LastOf14740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14740<TuplifyUnion14740<Exclude<T, L>>, L>;

type DeepPartial14740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14740<T[P]> }
  : T;

type Paths14740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14740<K, Paths14740<T[K], Prev14740[D]>> : never }[keyof T]
  : never;

type Prev14740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14740 {
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

type ConfigPaths14740 = Paths14740<NestedConfig14740>;

interface HeavyProps14740 {
  config: DeepPartial14740<NestedConfig14740>;
  path?: ConfigPaths14740;
}

const HeavyComponent14740 = memo(function HeavyComponent14740({ config }: HeavyProps14740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14740.displayName = 'HeavyComponent14740';
export default HeavyComponent14740;
