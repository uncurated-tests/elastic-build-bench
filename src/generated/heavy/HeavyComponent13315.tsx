'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13315<T> = T extends (infer U)[]
  ? DeepReadonlyArray13315<U>
  : T extends object
  ? DeepReadonlyObject13315<T>
  : T;

interface DeepReadonlyArray13315<T> extends ReadonlyArray<DeepReadonly13315<T>> {}

type DeepReadonlyObject13315<T> = {
  readonly [P in keyof T]: DeepReadonly13315<T[P]>;
};

type UnionToIntersection13315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13315<T> = UnionToIntersection13315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13315<T extends unknown[], V> = [...T, V];

type TuplifyUnion13315<T, L = LastOf13315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13315<TuplifyUnion13315<Exclude<T, L>>, L>;

type DeepPartial13315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13315<T[P]> }
  : T;

type Paths13315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13315<K, Paths13315<T[K], Prev13315[D]>> : never }[keyof T]
  : never;

type Prev13315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13315 {
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

type ConfigPaths13315 = Paths13315<NestedConfig13315>;

interface HeavyProps13315 {
  config: DeepPartial13315<NestedConfig13315>;
  path?: ConfigPaths13315;
}

const HeavyComponent13315 = memo(function HeavyComponent13315({ config }: HeavyProps13315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13315.displayName = 'HeavyComponent13315';
export default HeavyComponent13315;
