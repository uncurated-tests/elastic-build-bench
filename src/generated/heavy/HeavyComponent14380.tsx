'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14380<T> = T extends (infer U)[]
  ? DeepReadonlyArray14380<U>
  : T extends object
  ? DeepReadonlyObject14380<T>
  : T;

interface DeepReadonlyArray14380<T> extends ReadonlyArray<DeepReadonly14380<T>> {}

type DeepReadonlyObject14380<T> = {
  readonly [P in keyof T]: DeepReadonly14380<T[P]>;
};

type UnionToIntersection14380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14380<T> = UnionToIntersection14380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14380<T extends unknown[], V> = [...T, V];

type TuplifyUnion14380<T, L = LastOf14380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14380<TuplifyUnion14380<Exclude<T, L>>, L>;

type DeepPartial14380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14380<T[P]> }
  : T;

type Paths14380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14380<K, Paths14380<T[K], Prev14380[D]>> : never }[keyof T]
  : never;

type Prev14380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14380 {
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

type ConfigPaths14380 = Paths14380<NestedConfig14380>;

interface HeavyProps14380 {
  config: DeepPartial14380<NestedConfig14380>;
  path?: ConfigPaths14380;
}

const HeavyComponent14380 = memo(function HeavyComponent14380({ config }: HeavyProps14380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14380.displayName = 'HeavyComponent14380';
export default HeavyComponent14380;
