'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13810<T> = T extends (infer U)[]
  ? DeepReadonlyArray13810<U>
  : T extends object
  ? DeepReadonlyObject13810<T>
  : T;

interface DeepReadonlyArray13810<T> extends ReadonlyArray<DeepReadonly13810<T>> {}

type DeepReadonlyObject13810<T> = {
  readonly [P in keyof T]: DeepReadonly13810<T[P]>;
};

type UnionToIntersection13810<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13810<T> = UnionToIntersection13810<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13810<T extends unknown[], V> = [...T, V];

type TuplifyUnion13810<T, L = LastOf13810<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13810<TuplifyUnion13810<Exclude<T, L>>, L>;

type DeepPartial13810<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13810<T[P]> }
  : T;

type Paths13810<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13810<K, Paths13810<T[K], Prev13810[D]>> : never }[keyof T]
  : never;

type Prev13810 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13810<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13810 {
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

type ConfigPaths13810 = Paths13810<NestedConfig13810>;

interface HeavyProps13810 {
  config: DeepPartial13810<NestedConfig13810>;
  path?: ConfigPaths13810;
}

const HeavyComponent13810 = memo(function HeavyComponent13810({ config }: HeavyProps13810) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13810) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13810 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13810: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13810.displayName = 'HeavyComponent13810';
export default HeavyComponent13810;
