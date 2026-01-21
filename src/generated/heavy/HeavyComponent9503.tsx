'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9503<T> = T extends (infer U)[]
  ? DeepReadonlyArray9503<U>
  : T extends object
  ? DeepReadonlyObject9503<T>
  : T;

interface DeepReadonlyArray9503<T> extends ReadonlyArray<DeepReadonly9503<T>> {}

type DeepReadonlyObject9503<T> = {
  readonly [P in keyof T]: DeepReadonly9503<T[P]>;
};

type UnionToIntersection9503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9503<T> = UnionToIntersection9503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9503<T extends unknown[], V> = [...T, V];

type TuplifyUnion9503<T, L = LastOf9503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9503<TuplifyUnion9503<Exclude<T, L>>, L>;

type DeepPartial9503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9503<T[P]> }
  : T;

type Paths9503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9503<K, Paths9503<T[K], Prev9503[D]>> : never }[keyof T]
  : never;

type Prev9503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9503 {
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

type ConfigPaths9503 = Paths9503<NestedConfig9503>;

interface HeavyProps9503 {
  config: DeepPartial9503<NestedConfig9503>;
  path?: ConfigPaths9503;
}

const HeavyComponent9503 = memo(function HeavyComponent9503({ config }: HeavyProps9503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9503.displayName = 'HeavyComponent9503';
export default HeavyComponent9503;
