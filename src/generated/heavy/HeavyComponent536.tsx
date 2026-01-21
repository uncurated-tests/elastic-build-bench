'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly536<T> = T extends (infer U)[]
  ? DeepReadonlyArray536<U>
  : T extends object
  ? DeepReadonlyObject536<T>
  : T;

interface DeepReadonlyArray536<T> extends ReadonlyArray<DeepReadonly536<T>> {}

type DeepReadonlyObject536<T> = {
  readonly [P in keyof T]: DeepReadonly536<T[P]>;
};

type UnionToIntersection536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf536<T> = UnionToIntersection536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push536<T extends unknown[], V> = [...T, V];

type TuplifyUnion536<T, L = LastOf536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push536<TuplifyUnion536<Exclude<T, L>>, L>;

type DeepPartial536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial536<T[P]> }
  : T;

type Paths536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join536<K, Paths536<T[K], Prev536[D]>> : never }[keyof T]
  : never;

type Prev536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig536 {
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

type ConfigPaths536 = Paths536<NestedConfig536>;

interface HeavyProps536 {
  config: DeepPartial536<NestedConfig536>;
  path?: ConfigPaths536;
}

const HeavyComponent536 = memo(function HeavyComponent536({ config }: HeavyProps536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent536.displayName = 'HeavyComponent536';
export default HeavyComponent536;
