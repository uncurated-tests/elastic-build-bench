'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly108<T> = T extends (infer U)[]
  ? DeepReadonlyArray108<U>
  : T extends object
  ? DeepReadonlyObject108<T>
  : T;

interface DeepReadonlyArray108<T> extends ReadonlyArray<DeepReadonly108<T>> {}

type DeepReadonlyObject108<T> = {
  readonly [P in keyof T]: DeepReadonly108<T[P]>;
};

type UnionToIntersection108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf108<T> = UnionToIntersection108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push108<T extends unknown[], V> = [...T, V];

type TuplifyUnion108<T, L = LastOf108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push108<TuplifyUnion108<Exclude<T, L>>, L>;

type DeepPartial108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial108<T[P]> }
  : T;

type Paths108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join108<K, Paths108<T[K], Prev108[D]>> : never }[keyof T]
  : never;

type Prev108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig108 {
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

type ConfigPaths108 = Paths108<NestedConfig108>;

interface HeavyProps108 {
  config: DeepPartial108<NestedConfig108>;
  path?: ConfigPaths108;
}

const HeavyComponent108 = memo(function HeavyComponent108({ config }: HeavyProps108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent108.displayName = 'HeavyComponent108';
export default HeavyComponent108;
