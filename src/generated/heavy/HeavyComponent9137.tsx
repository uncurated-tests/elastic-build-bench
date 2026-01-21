'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9137<T> = T extends (infer U)[]
  ? DeepReadonlyArray9137<U>
  : T extends object
  ? DeepReadonlyObject9137<T>
  : T;

interface DeepReadonlyArray9137<T> extends ReadonlyArray<DeepReadonly9137<T>> {}

type DeepReadonlyObject9137<T> = {
  readonly [P in keyof T]: DeepReadonly9137<T[P]>;
};

type UnionToIntersection9137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9137<T> = UnionToIntersection9137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9137<T extends unknown[], V> = [...T, V];

type TuplifyUnion9137<T, L = LastOf9137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9137<TuplifyUnion9137<Exclude<T, L>>, L>;

type DeepPartial9137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9137<T[P]> }
  : T;

type Paths9137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9137<K, Paths9137<T[K], Prev9137[D]>> : never }[keyof T]
  : never;

type Prev9137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9137 {
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

type ConfigPaths9137 = Paths9137<NestedConfig9137>;

interface HeavyProps9137 {
  config: DeepPartial9137<NestedConfig9137>;
  path?: ConfigPaths9137;
}

const HeavyComponent9137 = memo(function HeavyComponent9137({ config }: HeavyProps9137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9137.displayName = 'HeavyComponent9137';
export default HeavyComponent9137;
