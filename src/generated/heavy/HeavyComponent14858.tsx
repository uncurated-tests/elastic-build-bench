'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14858<T> = T extends (infer U)[]
  ? DeepReadonlyArray14858<U>
  : T extends object
  ? DeepReadonlyObject14858<T>
  : T;

interface DeepReadonlyArray14858<T> extends ReadonlyArray<DeepReadonly14858<T>> {}

type DeepReadonlyObject14858<T> = {
  readonly [P in keyof T]: DeepReadonly14858<T[P]>;
};

type UnionToIntersection14858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14858<T> = UnionToIntersection14858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14858<T extends unknown[], V> = [...T, V];

type TuplifyUnion14858<T, L = LastOf14858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14858<TuplifyUnion14858<Exclude<T, L>>, L>;

type DeepPartial14858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14858<T[P]> }
  : T;

type Paths14858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14858<K, Paths14858<T[K], Prev14858[D]>> : never }[keyof T]
  : never;

type Prev14858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14858 {
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

type ConfigPaths14858 = Paths14858<NestedConfig14858>;

interface HeavyProps14858 {
  config: DeepPartial14858<NestedConfig14858>;
  path?: ConfigPaths14858;
}

const HeavyComponent14858 = memo(function HeavyComponent14858({ config }: HeavyProps14858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14858.displayName = 'HeavyComponent14858';
export default HeavyComponent14858;
