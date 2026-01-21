'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14468<T> = T extends (infer U)[]
  ? DeepReadonlyArray14468<U>
  : T extends object
  ? DeepReadonlyObject14468<T>
  : T;

interface DeepReadonlyArray14468<T> extends ReadonlyArray<DeepReadonly14468<T>> {}

type DeepReadonlyObject14468<T> = {
  readonly [P in keyof T]: DeepReadonly14468<T[P]>;
};

type UnionToIntersection14468<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14468<T> = UnionToIntersection14468<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14468<T extends unknown[], V> = [...T, V];

type TuplifyUnion14468<T, L = LastOf14468<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14468<TuplifyUnion14468<Exclude<T, L>>, L>;

type DeepPartial14468<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14468<T[P]> }
  : T;

type Paths14468<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14468<K, Paths14468<T[K], Prev14468[D]>> : never }[keyof T]
  : never;

type Prev14468 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14468<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14468 {
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

type ConfigPaths14468 = Paths14468<NestedConfig14468>;

interface HeavyProps14468 {
  config: DeepPartial14468<NestedConfig14468>;
  path?: ConfigPaths14468;
}

const HeavyComponent14468 = memo(function HeavyComponent14468({ config }: HeavyProps14468) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14468) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14468 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14468: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14468.displayName = 'HeavyComponent14468';
export default HeavyComponent14468;
