'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13990<T> = T extends (infer U)[]
  ? DeepReadonlyArray13990<U>
  : T extends object
  ? DeepReadonlyObject13990<T>
  : T;

interface DeepReadonlyArray13990<T> extends ReadonlyArray<DeepReadonly13990<T>> {}

type DeepReadonlyObject13990<T> = {
  readonly [P in keyof T]: DeepReadonly13990<T[P]>;
};

type UnionToIntersection13990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13990<T> = UnionToIntersection13990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13990<T extends unknown[], V> = [...T, V];

type TuplifyUnion13990<T, L = LastOf13990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13990<TuplifyUnion13990<Exclude<T, L>>, L>;

type DeepPartial13990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13990<T[P]> }
  : T;

type Paths13990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13990<K, Paths13990<T[K], Prev13990[D]>> : never }[keyof T]
  : never;

type Prev13990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13990 {
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

type ConfigPaths13990 = Paths13990<NestedConfig13990>;

interface HeavyProps13990 {
  config: DeepPartial13990<NestedConfig13990>;
  path?: ConfigPaths13990;
}

const HeavyComponent13990 = memo(function HeavyComponent13990({ config }: HeavyProps13990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13990.displayName = 'HeavyComponent13990';
export default HeavyComponent13990;
