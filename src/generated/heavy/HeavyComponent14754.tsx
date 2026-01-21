'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14754<T> = T extends (infer U)[]
  ? DeepReadonlyArray14754<U>
  : T extends object
  ? DeepReadonlyObject14754<T>
  : T;

interface DeepReadonlyArray14754<T> extends ReadonlyArray<DeepReadonly14754<T>> {}

type DeepReadonlyObject14754<T> = {
  readonly [P in keyof T]: DeepReadonly14754<T[P]>;
};

type UnionToIntersection14754<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14754<T> = UnionToIntersection14754<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14754<T extends unknown[], V> = [...T, V];

type TuplifyUnion14754<T, L = LastOf14754<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14754<TuplifyUnion14754<Exclude<T, L>>, L>;

type DeepPartial14754<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14754<T[P]> }
  : T;

type Paths14754<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14754<K, Paths14754<T[K], Prev14754[D]>> : never }[keyof T]
  : never;

type Prev14754 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14754<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14754 {
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

type ConfigPaths14754 = Paths14754<NestedConfig14754>;

interface HeavyProps14754 {
  config: DeepPartial14754<NestedConfig14754>;
  path?: ConfigPaths14754;
}

const HeavyComponent14754 = memo(function HeavyComponent14754({ config }: HeavyProps14754) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14754) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14754 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14754: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14754.displayName = 'HeavyComponent14754';
export default HeavyComponent14754;
