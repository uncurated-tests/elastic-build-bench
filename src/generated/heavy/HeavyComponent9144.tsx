'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9144<T> = T extends (infer U)[]
  ? DeepReadonlyArray9144<U>
  : T extends object
  ? DeepReadonlyObject9144<T>
  : T;

interface DeepReadonlyArray9144<T> extends ReadonlyArray<DeepReadonly9144<T>> {}

type DeepReadonlyObject9144<T> = {
  readonly [P in keyof T]: DeepReadonly9144<T[P]>;
};

type UnionToIntersection9144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9144<T> = UnionToIntersection9144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9144<T extends unknown[], V> = [...T, V];

type TuplifyUnion9144<T, L = LastOf9144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9144<TuplifyUnion9144<Exclude<T, L>>, L>;

type DeepPartial9144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9144<T[P]> }
  : T;

type Paths9144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9144<K, Paths9144<T[K], Prev9144[D]>> : never }[keyof T]
  : never;

type Prev9144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9144 {
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

type ConfigPaths9144 = Paths9144<NestedConfig9144>;

interface HeavyProps9144 {
  config: DeepPartial9144<NestedConfig9144>;
  path?: ConfigPaths9144;
}

const HeavyComponent9144 = memo(function HeavyComponent9144({ config }: HeavyProps9144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9144.displayName = 'HeavyComponent9144';
export default HeavyComponent9144;
