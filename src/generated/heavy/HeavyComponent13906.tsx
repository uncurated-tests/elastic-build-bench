'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13906<T> = T extends (infer U)[]
  ? DeepReadonlyArray13906<U>
  : T extends object
  ? DeepReadonlyObject13906<T>
  : T;

interface DeepReadonlyArray13906<T> extends ReadonlyArray<DeepReadonly13906<T>> {}

type DeepReadonlyObject13906<T> = {
  readonly [P in keyof T]: DeepReadonly13906<T[P]>;
};

type UnionToIntersection13906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13906<T> = UnionToIntersection13906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13906<T extends unknown[], V> = [...T, V];

type TuplifyUnion13906<T, L = LastOf13906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13906<TuplifyUnion13906<Exclude<T, L>>, L>;

type DeepPartial13906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13906<T[P]> }
  : T;

type Paths13906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13906<K, Paths13906<T[K], Prev13906[D]>> : never }[keyof T]
  : never;

type Prev13906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13906 {
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

type ConfigPaths13906 = Paths13906<NestedConfig13906>;

interface HeavyProps13906 {
  config: DeepPartial13906<NestedConfig13906>;
  path?: ConfigPaths13906;
}

const HeavyComponent13906 = memo(function HeavyComponent13906({ config }: HeavyProps13906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13906.displayName = 'HeavyComponent13906';
export default HeavyComponent13906;
