'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9113<T> = T extends (infer U)[]
  ? DeepReadonlyArray9113<U>
  : T extends object
  ? DeepReadonlyObject9113<T>
  : T;

interface DeepReadonlyArray9113<T> extends ReadonlyArray<DeepReadonly9113<T>> {}

type DeepReadonlyObject9113<T> = {
  readonly [P in keyof T]: DeepReadonly9113<T[P]>;
};

type UnionToIntersection9113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9113<T> = UnionToIntersection9113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9113<T extends unknown[], V> = [...T, V];

type TuplifyUnion9113<T, L = LastOf9113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9113<TuplifyUnion9113<Exclude<T, L>>, L>;

type DeepPartial9113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9113<T[P]> }
  : T;

type Paths9113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9113<K, Paths9113<T[K], Prev9113[D]>> : never }[keyof T]
  : never;

type Prev9113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9113 {
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

type ConfigPaths9113 = Paths9113<NestedConfig9113>;

interface HeavyProps9113 {
  config: DeepPartial9113<NestedConfig9113>;
  path?: ConfigPaths9113;
}

const HeavyComponent9113 = memo(function HeavyComponent9113({ config }: HeavyProps9113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9113.displayName = 'HeavyComponent9113';
export default HeavyComponent9113;
