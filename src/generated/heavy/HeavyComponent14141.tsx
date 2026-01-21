'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14141<T> = T extends (infer U)[]
  ? DeepReadonlyArray14141<U>
  : T extends object
  ? DeepReadonlyObject14141<T>
  : T;

interface DeepReadonlyArray14141<T> extends ReadonlyArray<DeepReadonly14141<T>> {}

type DeepReadonlyObject14141<T> = {
  readonly [P in keyof T]: DeepReadonly14141<T[P]>;
};

type UnionToIntersection14141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14141<T> = UnionToIntersection14141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14141<T extends unknown[], V> = [...T, V];

type TuplifyUnion14141<T, L = LastOf14141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14141<TuplifyUnion14141<Exclude<T, L>>, L>;

type DeepPartial14141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14141<T[P]> }
  : T;

type Paths14141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14141<K, Paths14141<T[K], Prev14141[D]>> : never }[keyof T]
  : never;

type Prev14141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14141 {
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

type ConfigPaths14141 = Paths14141<NestedConfig14141>;

interface HeavyProps14141 {
  config: DeepPartial14141<NestedConfig14141>;
  path?: ConfigPaths14141;
}

const HeavyComponent14141 = memo(function HeavyComponent14141({ config }: HeavyProps14141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14141.displayName = 'HeavyComponent14141';
export default HeavyComponent14141;
