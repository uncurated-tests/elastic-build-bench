'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14179<T> = T extends (infer U)[]
  ? DeepReadonlyArray14179<U>
  : T extends object
  ? DeepReadonlyObject14179<T>
  : T;

interface DeepReadonlyArray14179<T> extends ReadonlyArray<DeepReadonly14179<T>> {}

type DeepReadonlyObject14179<T> = {
  readonly [P in keyof T]: DeepReadonly14179<T[P]>;
};

type UnionToIntersection14179<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14179<T> = UnionToIntersection14179<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14179<T extends unknown[], V> = [...T, V];

type TuplifyUnion14179<T, L = LastOf14179<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14179<TuplifyUnion14179<Exclude<T, L>>, L>;

type DeepPartial14179<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14179<T[P]> }
  : T;

type Paths14179<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14179<K, Paths14179<T[K], Prev14179[D]>> : never }[keyof T]
  : never;

type Prev14179 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14179<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14179 {
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

type ConfigPaths14179 = Paths14179<NestedConfig14179>;

interface HeavyProps14179 {
  config: DeepPartial14179<NestedConfig14179>;
  path?: ConfigPaths14179;
}

const HeavyComponent14179 = memo(function HeavyComponent14179({ config }: HeavyProps14179) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14179) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14179 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14179: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14179.displayName = 'HeavyComponent14179';
export default HeavyComponent14179;
