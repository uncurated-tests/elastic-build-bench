'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9596<T> = T extends (infer U)[]
  ? DeepReadonlyArray9596<U>
  : T extends object
  ? DeepReadonlyObject9596<T>
  : T;

interface DeepReadonlyArray9596<T> extends ReadonlyArray<DeepReadonly9596<T>> {}

type DeepReadonlyObject9596<T> = {
  readonly [P in keyof T]: DeepReadonly9596<T[P]>;
};

type UnionToIntersection9596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9596<T> = UnionToIntersection9596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9596<T extends unknown[], V> = [...T, V];

type TuplifyUnion9596<T, L = LastOf9596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9596<TuplifyUnion9596<Exclude<T, L>>, L>;

type DeepPartial9596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9596<T[P]> }
  : T;

type Paths9596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9596<K, Paths9596<T[K], Prev9596[D]>> : never }[keyof T]
  : never;

type Prev9596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9596 {
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

type ConfigPaths9596 = Paths9596<NestedConfig9596>;

interface HeavyProps9596 {
  config: DeepPartial9596<NestedConfig9596>;
  path?: ConfigPaths9596;
}

const HeavyComponent9596 = memo(function HeavyComponent9596({ config }: HeavyProps9596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9596.displayName = 'HeavyComponent9596';
export default HeavyComponent9596;
