'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14564<T> = T extends (infer U)[]
  ? DeepReadonlyArray14564<U>
  : T extends object
  ? DeepReadonlyObject14564<T>
  : T;

interface DeepReadonlyArray14564<T> extends ReadonlyArray<DeepReadonly14564<T>> {}

type DeepReadonlyObject14564<T> = {
  readonly [P in keyof T]: DeepReadonly14564<T[P]>;
};

type UnionToIntersection14564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14564<T> = UnionToIntersection14564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14564<T extends unknown[], V> = [...T, V];

type TuplifyUnion14564<T, L = LastOf14564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14564<TuplifyUnion14564<Exclude<T, L>>, L>;

type DeepPartial14564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14564<T[P]> }
  : T;

type Paths14564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14564<K, Paths14564<T[K], Prev14564[D]>> : never }[keyof T]
  : never;

type Prev14564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14564 {
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

type ConfigPaths14564 = Paths14564<NestedConfig14564>;

interface HeavyProps14564 {
  config: DeepPartial14564<NestedConfig14564>;
  path?: ConfigPaths14564;
}

const HeavyComponent14564 = memo(function HeavyComponent14564({ config }: HeavyProps14564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14564.displayName = 'HeavyComponent14564';
export default HeavyComponent14564;
