'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14909<T> = T extends (infer U)[]
  ? DeepReadonlyArray14909<U>
  : T extends object
  ? DeepReadonlyObject14909<T>
  : T;

interface DeepReadonlyArray14909<T> extends ReadonlyArray<DeepReadonly14909<T>> {}

type DeepReadonlyObject14909<T> = {
  readonly [P in keyof T]: DeepReadonly14909<T[P]>;
};

type UnionToIntersection14909<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14909<T> = UnionToIntersection14909<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14909<T extends unknown[], V> = [...T, V];

type TuplifyUnion14909<T, L = LastOf14909<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14909<TuplifyUnion14909<Exclude<T, L>>, L>;

type DeepPartial14909<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14909<T[P]> }
  : T;

type Paths14909<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14909<K, Paths14909<T[K], Prev14909[D]>> : never }[keyof T]
  : never;

type Prev14909 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14909<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14909 {
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

type ConfigPaths14909 = Paths14909<NestedConfig14909>;

interface HeavyProps14909 {
  config: DeepPartial14909<NestedConfig14909>;
  path?: ConfigPaths14909;
}

const HeavyComponent14909 = memo(function HeavyComponent14909({ config }: HeavyProps14909) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14909) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14909 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14909: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14909.displayName = 'HeavyComponent14909';
export default HeavyComponent14909;
