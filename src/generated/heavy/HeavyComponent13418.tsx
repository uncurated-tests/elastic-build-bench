'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13418<T> = T extends (infer U)[]
  ? DeepReadonlyArray13418<U>
  : T extends object
  ? DeepReadonlyObject13418<T>
  : T;

interface DeepReadonlyArray13418<T> extends ReadonlyArray<DeepReadonly13418<T>> {}

type DeepReadonlyObject13418<T> = {
  readonly [P in keyof T]: DeepReadonly13418<T[P]>;
};

type UnionToIntersection13418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13418<T> = UnionToIntersection13418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13418<T extends unknown[], V> = [...T, V];

type TuplifyUnion13418<T, L = LastOf13418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13418<TuplifyUnion13418<Exclude<T, L>>, L>;

type DeepPartial13418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13418<T[P]> }
  : T;

type Paths13418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13418<K, Paths13418<T[K], Prev13418[D]>> : never }[keyof T]
  : never;

type Prev13418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13418 {
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

type ConfigPaths13418 = Paths13418<NestedConfig13418>;

interface HeavyProps13418 {
  config: DeepPartial13418<NestedConfig13418>;
  path?: ConfigPaths13418;
}

const HeavyComponent13418 = memo(function HeavyComponent13418({ config }: HeavyProps13418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13418.displayName = 'HeavyComponent13418';
export default HeavyComponent13418;
