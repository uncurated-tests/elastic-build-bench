'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13550<T> = T extends (infer U)[]
  ? DeepReadonlyArray13550<U>
  : T extends object
  ? DeepReadonlyObject13550<T>
  : T;

interface DeepReadonlyArray13550<T> extends ReadonlyArray<DeepReadonly13550<T>> {}

type DeepReadonlyObject13550<T> = {
  readonly [P in keyof T]: DeepReadonly13550<T[P]>;
};

type UnionToIntersection13550<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13550<T> = UnionToIntersection13550<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13550<T extends unknown[], V> = [...T, V];

type TuplifyUnion13550<T, L = LastOf13550<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13550<TuplifyUnion13550<Exclude<T, L>>, L>;

type DeepPartial13550<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13550<T[P]> }
  : T;

type Paths13550<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13550<K, Paths13550<T[K], Prev13550[D]>> : never }[keyof T]
  : never;

type Prev13550 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13550<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13550 {
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

type ConfigPaths13550 = Paths13550<NestedConfig13550>;

interface HeavyProps13550 {
  config: DeepPartial13550<NestedConfig13550>;
  path?: ConfigPaths13550;
}

const HeavyComponent13550 = memo(function HeavyComponent13550({ config }: HeavyProps13550) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13550) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13550 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13550: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13550.displayName = 'HeavyComponent13550';
export default HeavyComponent13550;
