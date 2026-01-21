'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9801<T> = T extends (infer U)[]
  ? DeepReadonlyArray9801<U>
  : T extends object
  ? DeepReadonlyObject9801<T>
  : T;

interface DeepReadonlyArray9801<T> extends ReadonlyArray<DeepReadonly9801<T>> {}

type DeepReadonlyObject9801<T> = {
  readonly [P in keyof T]: DeepReadonly9801<T[P]>;
};

type UnionToIntersection9801<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9801<T> = UnionToIntersection9801<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9801<T extends unknown[], V> = [...T, V];

type TuplifyUnion9801<T, L = LastOf9801<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9801<TuplifyUnion9801<Exclude<T, L>>, L>;

type DeepPartial9801<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9801<T[P]> }
  : T;

type Paths9801<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9801<K, Paths9801<T[K], Prev9801[D]>> : never }[keyof T]
  : never;

type Prev9801 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9801<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9801 {
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

type ConfigPaths9801 = Paths9801<NestedConfig9801>;

interface HeavyProps9801 {
  config: DeepPartial9801<NestedConfig9801>;
  path?: ConfigPaths9801;
}

const HeavyComponent9801 = memo(function HeavyComponent9801({ config }: HeavyProps9801) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9801) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9801 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9801: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9801.displayName = 'HeavyComponent9801';
export default HeavyComponent9801;
