'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly172<T> = T extends (infer U)[]
  ? DeepReadonlyArray172<U>
  : T extends object
  ? DeepReadonlyObject172<T>
  : T;

interface DeepReadonlyArray172<T> extends ReadonlyArray<DeepReadonly172<T>> {}

type DeepReadonlyObject172<T> = {
  readonly [P in keyof T]: DeepReadonly172<T[P]>;
};

type UnionToIntersection172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf172<T> = UnionToIntersection172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push172<T extends unknown[], V> = [...T, V];

type TuplifyUnion172<T, L = LastOf172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push172<TuplifyUnion172<Exclude<T, L>>, L>;

type DeepPartial172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial172<T[P]> }
  : T;

type Paths172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join172<K, Paths172<T[K], Prev172[D]>> : never }[keyof T]
  : never;

type Prev172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig172 {
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

type ConfigPaths172 = Paths172<NestedConfig172>;

interface HeavyProps172 {
  config: DeepPartial172<NestedConfig172>;
  path?: ConfigPaths172;
}

const HeavyComponent172 = memo(function HeavyComponent172({ config }: HeavyProps172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent172.displayName = 'HeavyComponent172';
export default HeavyComponent172;
