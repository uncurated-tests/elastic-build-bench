'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14481<T> = T extends (infer U)[]
  ? DeepReadonlyArray14481<U>
  : T extends object
  ? DeepReadonlyObject14481<T>
  : T;

interface DeepReadonlyArray14481<T> extends ReadonlyArray<DeepReadonly14481<T>> {}

type DeepReadonlyObject14481<T> = {
  readonly [P in keyof T]: DeepReadonly14481<T[P]>;
};

type UnionToIntersection14481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14481<T> = UnionToIntersection14481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14481<T extends unknown[], V> = [...T, V];

type TuplifyUnion14481<T, L = LastOf14481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14481<TuplifyUnion14481<Exclude<T, L>>, L>;

type DeepPartial14481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14481<T[P]> }
  : T;

type Paths14481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14481<K, Paths14481<T[K], Prev14481[D]>> : never }[keyof T]
  : never;

type Prev14481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14481 {
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

type ConfigPaths14481 = Paths14481<NestedConfig14481>;

interface HeavyProps14481 {
  config: DeepPartial14481<NestedConfig14481>;
  path?: ConfigPaths14481;
}

const HeavyComponent14481 = memo(function HeavyComponent14481({ config }: HeavyProps14481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14481.displayName = 'HeavyComponent14481';
export default HeavyComponent14481;
