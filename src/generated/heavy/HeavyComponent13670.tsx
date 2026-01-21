'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13670<T> = T extends (infer U)[]
  ? DeepReadonlyArray13670<U>
  : T extends object
  ? DeepReadonlyObject13670<T>
  : T;

interface DeepReadonlyArray13670<T> extends ReadonlyArray<DeepReadonly13670<T>> {}

type DeepReadonlyObject13670<T> = {
  readonly [P in keyof T]: DeepReadonly13670<T[P]>;
};

type UnionToIntersection13670<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13670<T> = UnionToIntersection13670<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13670<T extends unknown[], V> = [...T, V];

type TuplifyUnion13670<T, L = LastOf13670<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13670<TuplifyUnion13670<Exclude<T, L>>, L>;

type DeepPartial13670<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13670<T[P]> }
  : T;

type Paths13670<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13670<K, Paths13670<T[K], Prev13670[D]>> : never }[keyof T]
  : never;

type Prev13670 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13670<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13670 {
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

type ConfigPaths13670 = Paths13670<NestedConfig13670>;

interface HeavyProps13670 {
  config: DeepPartial13670<NestedConfig13670>;
  path?: ConfigPaths13670;
}

const HeavyComponent13670 = memo(function HeavyComponent13670({ config }: HeavyProps13670) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13670) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13670 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13670: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13670.displayName = 'HeavyComponent13670';
export default HeavyComponent13670;
