'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9758<T> = T extends (infer U)[]
  ? DeepReadonlyArray9758<U>
  : T extends object
  ? DeepReadonlyObject9758<T>
  : T;

interface DeepReadonlyArray9758<T> extends ReadonlyArray<DeepReadonly9758<T>> {}

type DeepReadonlyObject9758<T> = {
  readonly [P in keyof T]: DeepReadonly9758<T[P]>;
};

type UnionToIntersection9758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9758<T> = UnionToIntersection9758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9758<T extends unknown[], V> = [...T, V];

type TuplifyUnion9758<T, L = LastOf9758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9758<TuplifyUnion9758<Exclude<T, L>>, L>;

type DeepPartial9758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9758<T[P]> }
  : T;

type Paths9758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9758<K, Paths9758<T[K], Prev9758[D]>> : never }[keyof T]
  : never;

type Prev9758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9758 {
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

type ConfigPaths9758 = Paths9758<NestedConfig9758>;

interface HeavyProps9758 {
  config: DeepPartial9758<NestedConfig9758>;
  path?: ConfigPaths9758;
}

const HeavyComponent9758 = memo(function HeavyComponent9758({ config }: HeavyProps9758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9758.displayName = 'HeavyComponent9758';
export default HeavyComponent9758;
