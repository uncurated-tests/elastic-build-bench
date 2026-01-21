'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14533<T> = T extends (infer U)[]
  ? DeepReadonlyArray14533<U>
  : T extends object
  ? DeepReadonlyObject14533<T>
  : T;

interface DeepReadonlyArray14533<T> extends ReadonlyArray<DeepReadonly14533<T>> {}

type DeepReadonlyObject14533<T> = {
  readonly [P in keyof T]: DeepReadonly14533<T[P]>;
};

type UnionToIntersection14533<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14533<T> = UnionToIntersection14533<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14533<T extends unknown[], V> = [...T, V];

type TuplifyUnion14533<T, L = LastOf14533<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14533<TuplifyUnion14533<Exclude<T, L>>, L>;

type DeepPartial14533<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14533<T[P]> }
  : T;

type Paths14533<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14533<K, Paths14533<T[K], Prev14533[D]>> : never }[keyof T]
  : never;

type Prev14533 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14533<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14533 {
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

type ConfigPaths14533 = Paths14533<NestedConfig14533>;

interface HeavyProps14533 {
  config: DeepPartial14533<NestedConfig14533>;
  path?: ConfigPaths14533;
}

const HeavyComponent14533 = memo(function HeavyComponent14533({ config }: HeavyProps14533) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14533) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14533 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14533: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14533.displayName = 'HeavyComponent14533';
export default HeavyComponent14533;
