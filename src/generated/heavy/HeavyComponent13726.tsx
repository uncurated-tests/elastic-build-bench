'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13726<T> = T extends (infer U)[]
  ? DeepReadonlyArray13726<U>
  : T extends object
  ? DeepReadonlyObject13726<T>
  : T;

interface DeepReadonlyArray13726<T> extends ReadonlyArray<DeepReadonly13726<T>> {}

type DeepReadonlyObject13726<T> = {
  readonly [P in keyof T]: DeepReadonly13726<T[P]>;
};

type UnionToIntersection13726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13726<T> = UnionToIntersection13726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13726<T extends unknown[], V> = [...T, V];

type TuplifyUnion13726<T, L = LastOf13726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13726<TuplifyUnion13726<Exclude<T, L>>, L>;

type DeepPartial13726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13726<T[P]> }
  : T;

type Paths13726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13726<K, Paths13726<T[K], Prev13726[D]>> : never }[keyof T]
  : never;

type Prev13726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13726 {
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

type ConfigPaths13726 = Paths13726<NestedConfig13726>;

interface HeavyProps13726 {
  config: DeepPartial13726<NestedConfig13726>;
  path?: ConfigPaths13726;
}

const HeavyComponent13726 = memo(function HeavyComponent13726({ config }: HeavyProps13726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13726.displayName = 'HeavyComponent13726';
export default HeavyComponent13726;
