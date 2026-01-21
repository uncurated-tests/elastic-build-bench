'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13228<T> = T extends (infer U)[]
  ? DeepReadonlyArray13228<U>
  : T extends object
  ? DeepReadonlyObject13228<T>
  : T;

interface DeepReadonlyArray13228<T> extends ReadonlyArray<DeepReadonly13228<T>> {}

type DeepReadonlyObject13228<T> = {
  readonly [P in keyof T]: DeepReadonly13228<T[P]>;
};

type UnionToIntersection13228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13228<T> = UnionToIntersection13228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13228<T extends unknown[], V> = [...T, V];

type TuplifyUnion13228<T, L = LastOf13228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13228<TuplifyUnion13228<Exclude<T, L>>, L>;

type DeepPartial13228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13228<T[P]> }
  : T;

type Paths13228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13228<K, Paths13228<T[K], Prev13228[D]>> : never }[keyof T]
  : never;

type Prev13228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13228 {
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

type ConfigPaths13228 = Paths13228<NestedConfig13228>;

interface HeavyProps13228 {
  config: DeepPartial13228<NestedConfig13228>;
  path?: ConfigPaths13228;
}

const HeavyComponent13228 = memo(function HeavyComponent13228({ config }: HeavyProps13228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13228.displayName = 'HeavyComponent13228';
export default HeavyComponent13228;
