'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9867<T> = T extends (infer U)[]
  ? DeepReadonlyArray9867<U>
  : T extends object
  ? DeepReadonlyObject9867<T>
  : T;

interface DeepReadonlyArray9867<T> extends ReadonlyArray<DeepReadonly9867<T>> {}

type DeepReadonlyObject9867<T> = {
  readonly [P in keyof T]: DeepReadonly9867<T[P]>;
};

type UnionToIntersection9867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9867<T> = UnionToIntersection9867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9867<T extends unknown[], V> = [...T, V];

type TuplifyUnion9867<T, L = LastOf9867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9867<TuplifyUnion9867<Exclude<T, L>>, L>;

type DeepPartial9867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9867<T[P]> }
  : T;

type Paths9867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9867<K, Paths9867<T[K], Prev9867[D]>> : never }[keyof T]
  : never;

type Prev9867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9867 {
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

type ConfigPaths9867 = Paths9867<NestedConfig9867>;

interface HeavyProps9867 {
  config: DeepPartial9867<NestedConfig9867>;
  path?: ConfigPaths9867;
}

const HeavyComponent9867 = memo(function HeavyComponent9867({ config }: HeavyProps9867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9867.displayName = 'HeavyComponent9867';
export default HeavyComponent9867;
