'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14366<T> = T extends (infer U)[]
  ? DeepReadonlyArray14366<U>
  : T extends object
  ? DeepReadonlyObject14366<T>
  : T;

interface DeepReadonlyArray14366<T> extends ReadonlyArray<DeepReadonly14366<T>> {}

type DeepReadonlyObject14366<T> = {
  readonly [P in keyof T]: DeepReadonly14366<T[P]>;
};

type UnionToIntersection14366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14366<T> = UnionToIntersection14366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14366<T extends unknown[], V> = [...T, V];

type TuplifyUnion14366<T, L = LastOf14366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14366<TuplifyUnion14366<Exclude<T, L>>, L>;

type DeepPartial14366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14366<T[P]> }
  : T;

type Paths14366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14366<K, Paths14366<T[K], Prev14366[D]>> : never }[keyof T]
  : never;

type Prev14366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14366 {
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

type ConfigPaths14366 = Paths14366<NestedConfig14366>;

interface HeavyProps14366 {
  config: DeepPartial14366<NestedConfig14366>;
  path?: ConfigPaths14366;
}

const HeavyComponent14366 = memo(function HeavyComponent14366({ config }: HeavyProps14366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14366.displayName = 'HeavyComponent14366';
export default HeavyComponent14366;
