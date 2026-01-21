'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13393<T> = T extends (infer U)[]
  ? DeepReadonlyArray13393<U>
  : T extends object
  ? DeepReadonlyObject13393<T>
  : T;

interface DeepReadonlyArray13393<T> extends ReadonlyArray<DeepReadonly13393<T>> {}

type DeepReadonlyObject13393<T> = {
  readonly [P in keyof T]: DeepReadonly13393<T[P]>;
};

type UnionToIntersection13393<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13393<T> = UnionToIntersection13393<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13393<T extends unknown[], V> = [...T, V];

type TuplifyUnion13393<T, L = LastOf13393<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13393<TuplifyUnion13393<Exclude<T, L>>, L>;

type DeepPartial13393<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13393<T[P]> }
  : T;

type Paths13393<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13393<K, Paths13393<T[K], Prev13393[D]>> : never }[keyof T]
  : never;

type Prev13393 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13393<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13393 {
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

type ConfigPaths13393 = Paths13393<NestedConfig13393>;

interface HeavyProps13393 {
  config: DeepPartial13393<NestedConfig13393>;
  path?: ConfigPaths13393;
}

const HeavyComponent13393 = memo(function HeavyComponent13393({ config }: HeavyProps13393) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13393) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13393 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13393: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13393.displayName = 'HeavyComponent13393';
export default HeavyComponent13393;
