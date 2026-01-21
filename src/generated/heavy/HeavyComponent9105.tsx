'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9105<T> = T extends (infer U)[]
  ? DeepReadonlyArray9105<U>
  : T extends object
  ? DeepReadonlyObject9105<T>
  : T;

interface DeepReadonlyArray9105<T> extends ReadonlyArray<DeepReadonly9105<T>> {}

type DeepReadonlyObject9105<T> = {
  readonly [P in keyof T]: DeepReadonly9105<T[P]>;
};

type UnionToIntersection9105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9105<T> = UnionToIntersection9105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9105<T extends unknown[], V> = [...T, V];

type TuplifyUnion9105<T, L = LastOf9105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9105<TuplifyUnion9105<Exclude<T, L>>, L>;

type DeepPartial9105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9105<T[P]> }
  : T;

type Paths9105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9105<K, Paths9105<T[K], Prev9105[D]>> : never }[keyof T]
  : never;

type Prev9105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9105 {
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

type ConfigPaths9105 = Paths9105<NestedConfig9105>;

interface HeavyProps9105 {
  config: DeepPartial9105<NestedConfig9105>;
  path?: ConfigPaths9105;
}

const HeavyComponent9105 = memo(function HeavyComponent9105({ config }: HeavyProps9105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9105.displayName = 'HeavyComponent9105';
export default HeavyComponent9105;
