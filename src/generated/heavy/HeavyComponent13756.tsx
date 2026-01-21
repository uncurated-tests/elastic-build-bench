'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13756<T> = T extends (infer U)[]
  ? DeepReadonlyArray13756<U>
  : T extends object
  ? DeepReadonlyObject13756<T>
  : T;

interface DeepReadonlyArray13756<T> extends ReadonlyArray<DeepReadonly13756<T>> {}

type DeepReadonlyObject13756<T> = {
  readonly [P in keyof T]: DeepReadonly13756<T[P]>;
};

type UnionToIntersection13756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13756<T> = UnionToIntersection13756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13756<T extends unknown[], V> = [...T, V];

type TuplifyUnion13756<T, L = LastOf13756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13756<TuplifyUnion13756<Exclude<T, L>>, L>;

type DeepPartial13756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13756<T[P]> }
  : T;

type Paths13756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13756<K, Paths13756<T[K], Prev13756[D]>> : never }[keyof T]
  : never;

type Prev13756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13756 {
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

type ConfigPaths13756 = Paths13756<NestedConfig13756>;

interface HeavyProps13756 {
  config: DeepPartial13756<NestedConfig13756>;
  path?: ConfigPaths13756;
}

const HeavyComponent13756 = memo(function HeavyComponent13756({ config }: HeavyProps13756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13756.displayName = 'HeavyComponent13756';
export default HeavyComponent13756;
