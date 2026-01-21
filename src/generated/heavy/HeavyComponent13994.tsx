'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13994<T> = T extends (infer U)[]
  ? DeepReadonlyArray13994<U>
  : T extends object
  ? DeepReadonlyObject13994<T>
  : T;

interface DeepReadonlyArray13994<T> extends ReadonlyArray<DeepReadonly13994<T>> {}

type DeepReadonlyObject13994<T> = {
  readonly [P in keyof T]: DeepReadonly13994<T[P]>;
};

type UnionToIntersection13994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13994<T> = UnionToIntersection13994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13994<T extends unknown[], V> = [...T, V];

type TuplifyUnion13994<T, L = LastOf13994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13994<TuplifyUnion13994<Exclude<T, L>>, L>;

type DeepPartial13994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13994<T[P]> }
  : T;

type Paths13994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13994<K, Paths13994<T[K], Prev13994[D]>> : never }[keyof T]
  : never;

type Prev13994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13994 {
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

type ConfigPaths13994 = Paths13994<NestedConfig13994>;

interface HeavyProps13994 {
  config: DeepPartial13994<NestedConfig13994>;
  path?: ConfigPaths13994;
}

const HeavyComponent13994 = memo(function HeavyComponent13994({ config }: HeavyProps13994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13994.displayName = 'HeavyComponent13994';
export default HeavyComponent13994;
