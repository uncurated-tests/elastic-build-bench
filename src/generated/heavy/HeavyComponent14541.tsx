'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14541<T> = T extends (infer U)[]
  ? DeepReadonlyArray14541<U>
  : T extends object
  ? DeepReadonlyObject14541<T>
  : T;

interface DeepReadonlyArray14541<T> extends ReadonlyArray<DeepReadonly14541<T>> {}

type DeepReadonlyObject14541<T> = {
  readonly [P in keyof T]: DeepReadonly14541<T[P]>;
};

type UnionToIntersection14541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14541<T> = UnionToIntersection14541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14541<T extends unknown[], V> = [...T, V];

type TuplifyUnion14541<T, L = LastOf14541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14541<TuplifyUnion14541<Exclude<T, L>>, L>;

type DeepPartial14541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14541<T[P]> }
  : T;

type Paths14541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14541<K, Paths14541<T[K], Prev14541[D]>> : never }[keyof T]
  : never;

type Prev14541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14541 {
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

type ConfigPaths14541 = Paths14541<NestedConfig14541>;

interface HeavyProps14541 {
  config: DeepPartial14541<NestedConfig14541>;
  path?: ConfigPaths14541;
}

const HeavyComponent14541 = memo(function HeavyComponent14541({ config }: HeavyProps14541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14541.displayName = 'HeavyComponent14541';
export default HeavyComponent14541;
