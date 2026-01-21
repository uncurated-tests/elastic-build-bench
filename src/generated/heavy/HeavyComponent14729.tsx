'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14729<T> = T extends (infer U)[]
  ? DeepReadonlyArray14729<U>
  : T extends object
  ? DeepReadonlyObject14729<T>
  : T;

interface DeepReadonlyArray14729<T> extends ReadonlyArray<DeepReadonly14729<T>> {}

type DeepReadonlyObject14729<T> = {
  readonly [P in keyof T]: DeepReadonly14729<T[P]>;
};

type UnionToIntersection14729<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14729<T> = UnionToIntersection14729<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14729<T extends unknown[], V> = [...T, V];

type TuplifyUnion14729<T, L = LastOf14729<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14729<TuplifyUnion14729<Exclude<T, L>>, L>;

type DeepPartial14729<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14729<T[P]> }
  : T;

type Paths14729<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14729<K, Paths14729<T[K], Prev14729[D]>> : never }[keyof T]
  : never;

type Prev14729 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14729<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14729 {
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

type ConfigPaths14729 = Paths14729<NestedConfig14729>;

interface HeavyProps14729 {
  config: DeepPartial14729<NestedConfig14729>;
  path?: ConfigPaths14729;
}

const HeavyComponent14729 = memo(function HeavyComponent14729({ config }: HeavyProps14729) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14729) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14729 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14729: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14729.displayName = 'HeavyComponent14729';
export default HeavyComponent14729;
