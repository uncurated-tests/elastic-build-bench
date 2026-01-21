'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14459<T> = T extends (infer U)[]
  ? DeepReadonlyArray14459<U>
  : T extends object
  ? DeepReadonlyObject14459<T>
  : T;

interface DeepReadonlyArray14459<T> extends ReadonlyArray<DeepReadonly14459<T>> {}

type DeepReadonlyObject14459<T> = {
  readonly [P in keyof T]: DeepReadonly14459<T[P]>;
};

type UnionToIntersection14459<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14459<T> = UnionToIntersection14459<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14459<T extends unknown[], V> = [...T, V];

type TuplifyUnion14459<T, L = LastOf14459<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14459<TuplifyUnion14459<Exclude<T, L>>, L>;

type DeepPartial14459<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14459<T[P]> }
  : T;

type Paths14459<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14459<K, Paths14459<T[K], Prev14459[D]>> : never }[keyof T]
  : never;

type Prev14459 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14459<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14459 {
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

type ConfigPaths14459 = Paths14459<NestedConfig14459>;

interface HeavyProps14459 {
  config: DeepPartial14459<NestedConfig14459>;
  path?: ConfigPaths14459;
}

const HeavyComponent14459 = memo(function HeavyComponent14459({ config }: HeavyProps14459) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14459) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14459 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14459: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14459.displayName = 'HeavyComponent14459';
export default HeavyComponent14459;
