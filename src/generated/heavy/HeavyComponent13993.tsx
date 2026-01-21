'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13993<T> = T extends (infer U)[]
  ? DeepReadonlyArray13993<U>
  : T extends object
  ? DeepReadonlyObject13993<T>
  : T;

interface DeepReadonlyArray13993<T> extends ReadonlyArray<DeepReadonly13993<T>> {}

type DeepReadonlyObject13993<T> = {
  readonly [P in keyof T]: DeepReadonly13993<T[P]>;
};

type UnionToIntersection13993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13993<T> = UnionToIntersection13993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13993<T extends unknown[], V> = [...T, V];

type TuplifyUnion13993<T, L = LastOf13993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13993<TuplifyUnion13993<Exclude<T, L>>, L>;

type DeepPartial13993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13993<T[P]> }
  : T;

type Paths13993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13993<K, Paths13993<T[K], Prev13993[D]>> : never }[keyof T]
  : never;

type Prev13993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13993 {
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

type ConfigPaths13993 = Paths13993<NestedConfig13993>;

interface HeavyProps13993 {
  config: DeepPartial13993<NestedConfig13993>;
  path?: ConfigPaths13993;
}

const HeavyComponent13993 = memo(function HeavyComponent13993({ config }: HeavyProps13993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13993.displayName = 'HeavyComponent13993';
export default HeavyComponent13993;
