'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9094<T> = T extends (infer U)[]
  ? DeepReadonlyArray9094<U>
  : T extends object
  ? DeepReadonlyObject9094<T>
  : T;

interface DeepReadonlyArray9094<T> extends ReadonlyArray<DeepReadonly9094<T>> {}

type DeepReadonlyObject9094<T> = {
  readonly [P in keyof T]: DeepReadonly9094<T[P]>;
};

type UnionToIntersection9094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9094<T> = UnionToIntersection9094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9094<T extends unknown[], V> = [...T, V];

type TuplifyUnion9094<T, L = LastOf9094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9094<TuplifyUnion9094<Exclude<T, L>>, L>;

type DeepPartial9094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9094<T[P]> }
  : T;

type Paths9094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9094<K, Paths9094<T[K], Prev9094[D]>> : never }[keyof T]
  : never;

type Prev9094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9094 {
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

type ConfigPaths9094 = Paths9094<NestedConfig9094>;

interface HeavyProps9094 {
  config: DeepPartial9094<NestedConfig9094>;
  path?: ConfigPaths9094;
}

const HeavyComponent9094 = memo(function HeavyComponent9094({ config }: HeavyProps9094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9094.displayName = 'HeavyComponent9094';
export default HeavyComponent9094;
