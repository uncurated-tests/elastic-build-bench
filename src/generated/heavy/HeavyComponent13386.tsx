'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13386<T> = T extends (infer U)[]
  ? DeepReadonlyArray13386<U>
  : T extends object
  ? DeepReadonlyObject13386<T>
  : T;

interface DeepReadonlyArray13386<T> extends ReadonlyArray<DeepReadonly13386<T>> {}

type DeepReadonlyObject13386<T> = {
  readonly [P in keyof T]: DeepReadonly13386<T[P]>;
};

type UnionToIntersection13386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13386<T> = UnionToIntersection13386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13386<T extends unknown[], V> = [...T, V];

type TuplifyUnion13386<T, L = LastOf13386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13386<TuplifyUnion13386<Exclude<T, L>>, L>;

type DeepPartial13386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13386<T[P]> }
  : T;

type Paths13386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13386<K, Paths13386<T[K], Prev13386[D]>> : never }[keyof T]
  : never;

type Prev13386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13386 {
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

type ConfigPaths13386 = Paths13386<NestedConfig13386>;

interface HeavyProps13386 {
  config: DeepPartial13386<NestedConfig13386>;
  path?: ConfigPaths13386;
}

const HeavyComponent13386 = memo(function HeavyComponent13386({ config }: HeavyProps13386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13386.displayName = 'HeavyComponent13386';
export default HeavyComponent13386;
