'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9952<T> = T extends (infer U)[]
  ? DeepReadonlyArray9952<U>
  : T extends object
  ? DeepReadonlyObject9952<T>
  : T;

interface DeepReadonlyArray9952<T> extends ReadonlyArray<DeepReadonly9952<T>> {}

type DeepReadonlyObject9952<T> = {
  readonly [P in keyof T]: DeepReadonly9952<T[P]>;
};

type UnionToIntersection9952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9952<T> = UnionToIntersection9952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9952<T extends unknown[], V> = [...T, V];

type TuplifyUnion9952<T, L = LastOf9952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9952<TuplifyUnion9952<Exclude<T, L>>, L>;

type DeepPartial9952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9952<T[P]> }
  : T;

type Paths9952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9952<K, Paths9952<T[K], Prev9952[D]>> : never }[keyof T]
  : never;

type Prev9952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9952 {
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

type ConfigPaths9952 = Paths9952<NestedConfig9952>;

interface HeavyProps9952 {
  config: DeepPartial9952<NestedConfig9952>;
  path?: ConfigPaths9952;
}

const HeavyComponent9952 = memo(function HeavyComponent9952({ config }: HeavyProps9952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9952.displayName = 'HeavyComponent9952';
export default HeavyComponent9952;
