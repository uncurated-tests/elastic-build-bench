'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14441<T> = T extends (infer U)[]
  ? DeepReadonlyArray14441<U>
  : T extends object
  ? DeepReadonlyObject14441<T>
  : T;

interface DeepReadonlyArray14441<T> extends ReadonlyArray<DeepReadonly14441<T>> {}

type DeepReadonlyObject14441<T> = {
  readonly [P in keyof T]: DeepReadonly14441<T[P]>;
};

type UnionToIntersection14441<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14441<T> = UnionToIntersection14441<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14441<T extends unknown[], V> = [...T, V];

type TuplifyUnion14441<T, L = LastOf14441<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14441<TuplifyUnion14441<Exclude<T, L>>, L>;

type DeepPartial14441<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14441<T[P]> }
  : T;

type Paths14441<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14441<K, Paths14441<T[K], Prev14441[D]>> : never }[keyof T]
  : never;

type Prev14441 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14441<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14441 {
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

type ConfigPaths14441 = Paths14441<NestedConfig14441>;

interface HeavyProps14441 {
  config: DeepPartial14441<NestedConfig14441>;
  path?: ConfigPaths14441;
}

const HeavyComponent14441 = memo(function HeavyComponent14441({ config }: HeavyProps14441) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14441) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14441 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14441: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14441.displayName = 'HeavyComponent14441';
export default HeavyComponent14441;
