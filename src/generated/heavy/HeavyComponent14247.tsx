'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14247<T> = T extends (infer U)[]
  ? DeepReadonlyArray14247<U>
  : T extends object
  ? DeepReadonlyObject14247<T>
  : T;

interface DeepReadonlyArray14247<T> extends ReadonlyArray<DeepReadonly14247<T>> {}

type DeepReadonlyObject14247<T> = {
  readonly [P in keyof T]: DeepReadonly14247<T[P]>;
};

type UnionToIntersection14247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14247<T> = UnionToIntersection14247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14247<T extends unknown[], V> = [...T, V];

type TuplifyUnion14247<T, L = LastOf14247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14247<TuplifyUnion14247<Exclude<T, L>>, L>;

type DeepPartial14247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14247<T[P]> }
  : T;

type Paths14247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14247<K, Paths14247<T[K], Prev14247[D]>> : never }[keyof T]
  : never;

type Prev14247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14247 {
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

type ConfigPaths14247 = Paths14247<NestedConfig14247>;

interface HeavyProps14247 {
  config: DeepPartial14247<NestedConfig14247>;
  path?: ConfigPaths14247;
}

const HeavyComponent14247 = memo(function HeavyComponent14247({ config }: HeavyProps14247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14247.displayName = 'HeavyComponent14247';
export default HeavyComponent14247;
