'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly446<T> = T extends (infer U)[]
  ? DeepReadonlyArray446<U>
  : T extends object
  ? DeepReadonlyObject446<T>
  : T;

interface DeepReadonlyArray446<T> extends ReadonlyArray<DeepReadonly446<T>> {}

type DeepReadonlyObject446<T> = {
  readonly [P in keyof T]: DeepReadonly446<T[P]>;
};

type UnionToIntersection446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf446<T> = UnionToIntersection446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push446<T extends unknown[], V> = [...T, V];

type TuplifyUnion446<T, L = LastOf446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push446<TuplifyUnion446<Exclude<T, L>>, L>;

type DeepPartial446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial446<T[P]> }
  : T;

type Paths446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join446<K, Paths446<T[K], Prev446[D]>> : never }[keyof T]
  : never;

type Prev446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig446 {
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

type ConfigPaths446 = Paths446<NestedConfig446>;

interface HeavyProps446 {
  config: DeepPartial446<NestedConfig446>;
  path?: ConfigPaths446;
}

const HeavyComponent446 = memo(function HeavyComponent446({ config }: HeavyProps446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent446.displayName = 'HeavyComponent446';
export default HeavyComponent446;
