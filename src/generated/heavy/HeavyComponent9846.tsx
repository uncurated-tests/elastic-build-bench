'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9846<T> = T extends (infer U)[]
  ? DeepReadonlyArray9846<U>
  : T extends object
  ? DeepReadonlyObject9846<T>
  : T;

interface DeepReadonlyArray9846<T> extends ReadonlyArray<DeepReadonly9846<T>> {}

type DeepReadonlyObject9846<T> = {
  readonly [P in keyof T]: DeepReadonly9846<T[P]>;
};

type UnionToIntersection9846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9846<T> = UnionToIntersection9846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9846<T extends unknown[], V> = [...T, V];

type TuplifyUnion9846<T, L = LastOf9846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9846<TuplifyUnion9846<Exclude<T, L>>, L>;

type DeepPartial9846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9846<T[P]> }
  : T;

type Paths9846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9846<K, Paths9846<T[K], Prev9846[D]>> : never }[keyof T]
  : never;

type Prev9846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9846 {
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

type ConfigPaths9846 = Paths9846<NestedConfig9846>;

interface HeavyProps9846 {
  config: DeepPartial9846<NestedConfig9846>;
  path?: ConfigPaths9846;
}

const HeavyComponent9846 = memo(function HeavyComponent9846({ config }: HeavyProps9846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9846.displayName = 'HeavyComponent9846';
export default HeavyComponent9846;
