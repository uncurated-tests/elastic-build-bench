'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14482<T> = T extends (infer U)[]
  ? DeepReadonlyArray14482<U>
  : T extends object
  ? DeepReadonlyObject14482<T>
  : T;

interface DeepReadonlyArray14482<T> extends ReadonlyArray<DeepReadonly14482<T>> {}

type DeepReadonlyObject14482<T> = {
  readonly [P in keyof T]: DeepReadonly14482<T[P]>;
};

type UnionToIntersection14482<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14482<T> = UnionToIntersection14482<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14482<T extends unknown[], V> = [...T, V];

type TuplifyUnion14482<T, L = LastOf14482<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14482<TuplifyUnion14482<Exclude<T, L>>, L>;

type DeepPartial14482<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14482<T[P]> }
  : T;

type Paths14482<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14482<K, Paths14482<T[K], Prev14482[D]>> : never }[keyof T]
  : never;

type Prev14482 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14482<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14482 {
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

type ConfigPaths14482 = Paths14482<NestedConfig14482>;

interface HeavyProps14482 {
  config: DeepPartial14482<NestedConfig14482>;
  path?: ConfigPaths14482;
}

const HeavyComponent14482 = memo(function HeavyComponent14482({ config }: HeavyProps14482) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14482) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14482 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14482: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14482.displayName = 'HeavyComponent14482';
export default HeavyComponent14482;
