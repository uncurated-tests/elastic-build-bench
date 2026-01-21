'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14836<T> = T extends (infer U)[]
  ? DeepReadonlyArray14836<U>
  : T extends object
  ? DeepReadonlyObject14836<T>
  : T;

interface DeepReadonlyArray14836<T> extends ReadonlyArray<DeepReadonly14836<T>> {}

type DeepReadonlyObject14836<T> = {
  readonly [P in keyof T]: DeepReadonly14836<T[P]>;
};

type UnionToIntersection14836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14836<T> = UnionToIntersection14836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14836<T extends unknown[], V> = [...T, V];

type TuplifyUnion14836<T, L = LastOf14836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14836<TuplifyUnion14836<Exclude<T, L>>, L>;

type DeepPartial14836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14836<T[P]> }
  : T;

type Paths14836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14836<K, Paths14836<T[K], Prev14836[D]>> : never }[keyof T]
  : never;

type Prev14836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14836 {
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

type ConfigPaths14836 = Paths14836<NestedConfig14836>;

interface HeavyProps14836 {
  config: DeepPartial14836<NestedConfig14836>;
  path?: ConfigPaths14836;
}

const HeavyComponent14836 = memo(function HeavyComponent14836({ config }: HeavyProps14836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14836.displayName = 'HeavyComponent14836';
export default HeavyComponent14836;
