'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9578<T> = T extends (infer U)[]
  ? DeepReadonlyArray9578<U>
  : T extends object
  ? DeepReadonlyObject9578<T>
  : T;

interface DeepReadonlyArray9578<T> extends ReadonlyArray<DeepReadonly9578<T>> {}

type DeepReadonlyObject9578<T> = {
  readonly [P in keyof T]: DeepReadonly9578<T[P]>;
};

type UnionToIntersection9578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9578<T> = UnionToIntersection9578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9578<T extends unknown[], V> = [...T, V];

type TuplifyUnion9578<T, L = LastOf9578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9578<TuplifyUnion9578<Exclude<T, L>>, L>;

type DeepPartial9578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9578<T[P]> }
  : T;

type Paths9578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9578<K, Paths9578<T[K], Prev9578[D]>> : never }[keyof T]
  : never;

type Prev9578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9578 {
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

type ConfigPaths9578 = Paths9578<NestedConfig9578>;

interface HeavyProps9578 {
  config: DeepPartial9578<NestedConfig9578>;
  path?: ConfigPaths9578;
}

const HeavyComponent9578 = memo(function HeavyComponent9578({ config }: HeavyProps9578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9578.displayName = 'HeavyComponent9578';
export default HeavyComponent9578;
