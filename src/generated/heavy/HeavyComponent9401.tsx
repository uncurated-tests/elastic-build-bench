'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9401<T> = T extends (infer U)[]
  ? DeepReadonlyArray9401<U>
  : T extends object
  ? DeepReadonlyObject9401<T>
  : T;

interface DeepReadonlyArray9401<T> extends ReadonlyArray<DeepReadonly9401<T>> {}

type DeepReadonlyObject9401<T> = {
  readonly [P in keyof T]: DeepReadonly9401<T[P]>;
};

type UnionToIntersection9401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9401<T> = UnionToIntersection9401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9401<T extends unknown[], V> = [...T, V];

type TuplifyUnion9401<T, L = LastOf9401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9401<TuplifyUnion9401<Exclude<T, L>>, L>;

type DeepPartial9401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9401<T[P]> }
  : T;

type Paths9401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9401<K, Paths9401<T[K], Prev9401[D]>> : never }[keyof T]
  : never;

type Prev9401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9401 {
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

type ConfigPaths9401 = Paths9401<NestedConfig9401>;

interface HeavyProps9401 {
  config: DeepPartial9401<NestedConfig9401>;
  path?: ConfigPaths9401;
}

const HeavyComponent9401 = memo(function HeavyComponent9401({ config }: HeavyProps9401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9401.displayName = 'HeavyComponent9401';
export default HeavyComponent9401;
