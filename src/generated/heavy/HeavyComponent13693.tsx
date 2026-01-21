'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13693<T> = T extends (infer U)[]
  ? DeepReadonlyArray13693<U>
  : T extends object
  ? DeepReadonlyObject13693<T>
  : T;

interface DeepReadonlyArray13693<T> extends ReadonlyArray<DeepReadonly13693<T>> {}

type DeepReadonlyObject13693<T> = {
  readonly [P in keyof T]: DeepReadonly13693<T[P]>;
};

type UnionToIntersection13693<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13693<T> = UnionToIntersection13693<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13693<T extends unknown[], V> = [...T, V];

type TuplifyUnion13693<T, L = LastOf13693<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13693<TuplifyUnion13693<Exclude<T, L>>, L>;

type DeepPartial13693<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13693<T[P]> }
  : T;

type Paths13693<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13693<K, Paths13693<T[K], Prev13693[D]>> : never }[keyof T]
  : never;

type Prev13693 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13693<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13693 {
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

type ConfigPaths13693 = Paths13693<NestedConfig13693>;

interface HeavyProps13693 {
  config: DeepPartial13693<NestedConfig13693>;
  path?: ConfigPaths13693;
}

const HeavyComponent13693 = memo(function HeavyComponent13693({ config }: HeavyProps13693) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13693) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13693 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13693: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13693.displayName = 'HeavyComponent13693';
export default HeavyComponent13693;
