'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9772<T> = T extends (infer U)[]
  ? DeepReadonlyArray9772<U>
  : T extends object
  ? DeepReadonlyObject9772<T>
  : T;

interface DeepReadonlyArray9772<T> extends ReadonlyArray<DeepReadonly9772<T>> {}

type DeepReadonlyObject9772<T> = {
  readonly [P in keyof T]: DeepReadonly9772<T[P]>;
};

type UnionToIntersection9772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9772<T> = UnionToIntersection9772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9772<T extends unknown[], V> = [...T, V];

type TuplifyUnion9772<T, L = LastOf9772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9772<TuplifyUnion9772<Exclude<T, L>>, L>;

type DeepPartial9772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9772<T[P]> }
  : T;

type Paths9772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9772<K, Paths9772<T[K], Prev9772[D]>> : never }[keyof T]
  : never;

type Prev9772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9772 {
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

type ConfigPaths9772 = Paths9772<NestedConfig9772>;

interface HeavyProps9772 {
  config: DeepPartial9772<NestedConfig9772>;
  path?: ConfigPaths9772;
}

const HeavyComponent9772 = memo(function HeavyComponent9772({ config }: HeavyProps9772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9772.displayName = 'HeavyComponent9772';
export default HeavyComponent9772;
