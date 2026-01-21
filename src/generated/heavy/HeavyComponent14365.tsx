'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14365<T> = T extends (infer U)[]
  ? DeepReadonlyArray14365<U>
  : T extends object
  ? DeepReadonlyObject14365<T>
  : T;

interface DeepReadonlyArray14365<T> extends ReadonlyArray<DeepReadonly14365<T>> {}

type DeepReadonlyObject14365<T> = {
  readonly [P in keyof T]: DeepReadonly14365<T[P]>;
};

type UnionToIntersection14365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14365<T> = UnionToIntersection14365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14365<T extends unknown[], V> = [...T, V];

type TuplifyUnion14365<T, L = LastOf14365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14365<TuplifyUnion14365<Exclude<T, L>>, L>;

type DeepPartial14365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14365<T[P]> }
  : T;

type Paths14365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14365<K, Paths14365<T[K], Prev14365[D]>> : never }[keyof T]
  : never;

type Prev14365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14365 {
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

type ConfigPaths14365 = Paths14365<NestedConfig14365>;

interface HeavyProps14365 {
  config: DeepPartial14365<NestedConfig14365>;
  path?: ConfigPaths14365;
}

const HeavyComponent14365 = memo(function HeavyComponent14365({ config }: HeavyProps14365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14365.displayName = 'HeavyComponent14365';
export default HeavyComponent14365;
