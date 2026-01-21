'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14969<T> = T extends (infer U)[]
  ? DeepReadonlyArray14969<U>
  : T extends object
  ? DeepReadonlyObject14969<T>
  : T;

interface DeepReadonlyArray14969<T> extends ReadonlyArray<DeepReadonly14969<T>> {}

type DeepReadonlyObject14969<T> = {
  readonly [P in keyof T]: DeepReadonly14969<T[P]>;
};

type UnionToIntersection14969<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14969<T> = UnionToIntersection14969<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14969<T extends unknown[], V> = [...T, V];

type TuplifyUnion14969<T, L = LastOf14969<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14969<TuplifyUnion14969<Exclude<T, L>>, L>;

type DeepPartial14969<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14969<T[P]> }
  : T;

type Paths14969<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14969<K, Paths14969<T[K], Prev14969[D]>> : never }[keyof T]
  : never;

type Prev14969 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14969<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14969 {
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

type ConfigPaths14969 = Paths14969<NestedConfig14969>;

interface HeavyProps14969 {
  config: DeepPartial14969<NestedConfig14969>;
  path?: ConfigPaths14969;
}

const HeavyComponent14969 = memo(function HeavyComponent14969({ config }: HeavyProps14969) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14969) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14969 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14969: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14969.displayName = 'HeavyComponent14969';
export default HeavyComponent14969;
