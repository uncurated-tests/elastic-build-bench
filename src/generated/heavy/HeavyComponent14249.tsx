'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14249<T> = T extends (infer U)[]
  ? DeepReadonlyArray14249<U>
  : T extends object
  ? DeepReadonlyObject14249<T>
  : T;

interface DeepReadonlyArray14249<T> extends ReadonlyArray<DeepReadonly14249<T>> {}

type DeepReadonlyObject14249<T> = {
  readonly [P in keyof T]: DeepReadonly14249<T[P]>;
};

type UnionToIntersection14249<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14249<T> = UnionToIntersection14249<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14249<T extends unknown[], V> = [...T, V];

type TuplifyUnion14249<T, L = LastOf14249<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14249<TuplifyUnion14249<Exclude<T, L>>, L>;

type DeepPartial14249<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14249<T[P]> }
  : T;

type Paths14249<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14249<K, Paths14249<T[K], Prev14249[D]>> : never }[keyof T]
  : never;

type Prev14249 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14249<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14249 {
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

type ConfigPaths14249 = Paths14249<NestedConfig14249>;

interface HeavyProps14249 {
  config: DeepPartial14249<NestedConfig14249>;
  path?: ConfigPaths14249;
}

const HeavyComponent14249 = memo(function HeavyComponent14249({ config }: HeavyProps14249) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14249) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14249 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14249: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14249.displayName = 'HeavyComponent14249';
export default HeavyComponent14249;
