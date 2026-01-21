'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14446<T> = T extends (infer U)[]
  ? DeepReadonlyArray14446<U>
  : T extends object
  ? DeepReadonlyObject14446<T>
  : T;

interface DeepReadonlyArray14446<T> extends ReadonlyArray<DeepReadonly14446<T>> {}

type DeepReadonlyObject14446<T> = {
  readonly [P in keyof T]: DeepReadonly14446<T[P]>;
};

type UnionToIntersection14446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14446<T> = UnionToIntersection14446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14446<T extends unknown[], V> = [...T, V];

type TuplifyUnion14446<T, L = LastOf14446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14446<TuplifyUnion14446<Exclude<T, L>>, L>;

type DeepPartial14446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14446<T[P]> }
  : T;

type Paths14446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14446<K, Paths14446<T[K], Prev14446[D]>> : never }[keyof T]
  : never;

type Prev14446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14446 {
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

type ConfigPaths14446 = Paths14446<NestedConfig14446>;

interface HeavyProps14446 {
  config: DeepPartial14446<NestedConfig14446>;
  path?: ConfigPaths14446;
}

const HeavyComponent14446 = memo(function HeavyComponent14446({ config }: HeavyProps14446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14446.displayName = 'HeavyComponent14446';
export default HeavyComponent14446;
