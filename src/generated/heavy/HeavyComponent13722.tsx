'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13722<T> = T extends (infer U)[]
  ? DeepReadonlyArray13722<U>
  : T extends object
  ? DeepReadonlyObject13722<T>
  : T;

interface DeepReadonlyArray13722<T> extends ReadonlyArray<DeepReadonly13722<T>> {}

type DeepReadonlyObject13722<T> = {
  readonly [P in keyof T]: DeepReadonly13722<T[P]>;
};

type UnionToIntersection13722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13722<T> = UnionToIntersection13722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13722<T extends unknown[], V> = [...T, V];

type TuplifyUnion13722<T, L = LastOf13722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13722<TuplifyUnion13722<Exclude<T, L>>, L>;

type DeepPartial13722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13722<T[P]> }
  : T;

type Paths13722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13722<K, Paths13722<T[K], Prev13722[D]>> : never }[keyof T]
  : never;

type Prev13722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13722 {
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

type ConfigPaths13722 = Paths13722<NestedConfig13722>;

interface HeavyProps13722 {
  config: DeepPartial13722<NestedConfig13722>;
  path?: ConfigPaths13722;
}

const HeavyComponent13722 = memo(function HeavyComponent13722({ config }: HeavyProps13722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13722.displayName = 'HeavyComponent13722';
export default HeavyComponent13722;
