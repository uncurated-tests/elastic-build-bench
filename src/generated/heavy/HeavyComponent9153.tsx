'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9153<T> = T extends (infer U)[]
  ? DeepReadonlyArray9153<U>
  : T extends object
  ? DeepReadonlyObject9153<T>
  : T;

interface DeepReadonlyArray9153<T> extends ReadonlyArray<DeepReadonly9153<T>> {}

type DeepReadonlyObject9153<T> = {
  readonly [P in keyof T]: DeepReadonly9153<T[P]>;
};

type UnionToIntersection9153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9153<T> = UnionToIntersection9153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9153<T extends unknown[], V> = [...T, V];

type TuplifyUnion9153<T, L = LastOf9153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9153<TuplifyUnion9153<Exclude<T, L>>, L>;

type DeepPartial9153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9153<T[P]> }
  : T;

type Paths9153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9153<K, Paths9153<T[K], Prev9153[D]>> : never }[keyof T]
  : never;

type Prev9153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9153 {
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

type ConfigPaths9153 = Paths9153<NestedConfig9153>;

interface HeavyProps9153 {
  config: DeepPartial9153<NestedConfig9153>;
  path?: ConfigPaths9153;
}

const HeavyComponent9153 = memo(function HeavyComponent9153({ config }: HeavyProps9153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9153.displayName = 'HeavyComponent9153';
export default HeavyComponent9153;
