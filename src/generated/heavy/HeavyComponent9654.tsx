'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9654<T> = T extends (infer U)[]
  ? DeepReadonlyArray9654<U>
  : T extends object
  ? DeepReadonlyObject9654<T>
  : T;

interface DeepReadonlyArray9654<T> extends ReadonlyArray<DeepReadonly9654<T>> {}

type DeepReadonlyObject9654<T> = {
  readonly [P in keyof T]: DeepReadonly9654<T[P]>;
};

type UnionToIntersection9654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9654<T> = UnionToIntersection9654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9654<T extends unknown[], V> = [...T, V];

type TuplifyUnion9654<T, L = LastOf9654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9654<TuplifyUnion9654<Exclude<T, L>>, L>;

type DeepPartial9654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9654<T[P]> }
  : T;

type Paths9654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9654<K, Paths9654<T[K], Prev9654[D]>> : never }[keyof T]
  : never;

type Prev9654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9654 {
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

type ConfigPaths9654 = Paths9654<NestedConfig9654>;

interface HeavyProps9654 {
  config: DeepPartial9654<NestedConfig9654>;
  path?: ConfigPaths9654;
}

const HeavyComponent9654 = memo(function HeavyComponent9654({ config }: HeavyProps9654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9654.displayName = 'HeavyComponent9654';
export default HeavyComponent9654;
