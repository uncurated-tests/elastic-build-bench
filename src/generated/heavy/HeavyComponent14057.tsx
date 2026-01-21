'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14057<T> = T extends (infer U)[]
  ? DeepReadonlyArray14057<U>
  : T extends object
  ? DeepReadonlyObject14057<T>
  : T;

interface DeepReadonlyArray14057<T> extends ReadonlyArray<DeepReadonly14057<T>> {}

type DeepReadonlyObject14057<T> = {
  readonly [P in keyof T]: DeepReadonly14057<T[P]>;
};

type UnionToIntersection14057<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14057<T> = UnionToIntersection14057<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14057<T extends unknown[], V> = [...T, V];

type TuplifyUnion14057<T, L = LastOf14057<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14057<TuplifyUnion14057<Exclude<T, L>>, L>;

type DeepPartial14057<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14057<T[P]> }
  : T;

type Paths14057<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14057<K, Paths14057<T[K], Prev14057[D]>> : never }[keyof T]
  : never;

type Prev14057 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14057<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14057 {
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

type ConfigPaths14057 = Paths14057<NestedConfig14057>;

interface HeavyProps14057 {
  config: DeepPartial14057<NestedConfig14057>;
  path?: ConfigPaths14057;
}

const HeavyComponent14057 = memo(function HeavyComponent14057({ config }: HeavyProps14057) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14057) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14057 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14057: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14057.displayName = 'HeavyComponent14057';
export default HeavyComponent14057;
