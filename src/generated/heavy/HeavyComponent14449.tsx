'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14449<T> = T extends (infer U)[]
  ? DeepReadonlyArray14449<U>
  : T extends object
  ? DeepReadonlyObject14449<T>
  : T;

interface DeepReadonlyArray14449<T> extends ReadonlyArray<DeepReadonly14449<T>> {}

type DeepReadonlyObject14449<T> = {
  readonly [P in keyof T]: DeepReadonly14449<T[P]>;
};

type UnionToIntersection14449<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14449<T> = UnionToIntersection14449<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14449<T extends unknown[], V> = [...T, V];

type TuplifyUnion14449<T, L = LastOf14449<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14449<TuplifyUnion14449<Exclude<T, L>>, L>;

type DeepPartial14449<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14449<T[P]> }
  : T;

type Paths14449<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14449<K, Paths14449<T[K], Prev14449[D]>> : never }[keyof T]
  : never;

type Prev14449 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14449<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14449 {
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

type ConfigPaths14449 = Paths14449<NestedConfig14449>;

interface HeavyProps14449 {
  config: DeepPartial14449<NestedConfig14449>;
  path?: ConfigPaths14449;
}

const HeavyComponent14449 = memo(function HeavyComponent14449({ config }: HeavyProps14449) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14449) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14449 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14449: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14449.displayName = 'HeavyComponent14449';
export default HeavyComponent14449;
