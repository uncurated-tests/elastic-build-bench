'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14378<T> = T extends (infer U)[]
  ? DeepReadonlyArray14378<U>
  : T extends object
  ? DeepReadonlyObject14378<T>
  : T;

interface DeepReadonlyArray14378<T> extends ReadonlyArray<DeepReadonly14378<T>> {}

type DeepReadonlyObject14378<T> = {
  readonly [P in keyof T]: DeepReadonly14378<T[P]>;
};

type UnionToIntersection14378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14378<T> = UnionToIntersection14378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14378<T extends unknown[], V> = [...T, V];

type TuplifyUnion14378<T, L = LastOf14378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14378<TuplifyUnion14378<Exclude<T, L>>, L>;

type DeepPartial14378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14378<T[P]> }
  : T;

type Paths14378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14378<K, Paths14378<T[K], Prev14378[D]>> : never }[keyof T]
  : never;

type Prev14378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14378 {
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

type ConfigPaths14378 = Paths14378<NestedConfig14378>;

interface HeavyProps14378 {
  config: DeepPartial14378<NestedConfig14378>;
  path?: ConfigPaths14378;
}

const HeavyComponent14378 = memo(function HeavyComponent14378({ config }: HeavyProps14378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14378.displayName = 'HeavyComponent14378';
export default HeavyComponent14378;
