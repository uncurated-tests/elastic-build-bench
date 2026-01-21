'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9961<T> = T extends (infer U)[]
  ? DeepReadonlyArray9961<U>
  : T extends object
  ? DeepReadonlyObject9961<T>
  : T;

interface DeepReadonlyArray9961<T> extends ReadonlyArray<DeepReadonly9961<T>> {}

type DeepReadonlyObject9961<T> = {
  readonly [P in keyof T]: DeepReadonly9961<T[P]>;
};

type UnionToIntersection9961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9961<T> = UnionToIntersection9961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9961<T extends unknown[], V> = [...T, V];

type TuplifyUnion9961<T, L = LastOf9961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9961<TuplifyUnion9961<Exclude<T, L>>, L>;

type DeepPartial9961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9961<T[P]> }
  : T;

type Paths9961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9961<K, Paths9961<T[K], Prev9961[D]>> : never }[keyof T]
  : never;

type Prev9961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9961 {
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

type ConfigPaths9961 = Paths9961<NestedConfig9961>;

interface HeavyProps9961 {
  config: DeepPartial9961<NestedConfig9961>;
  path?: ConfigPaths9961;
}

const HeavyComponent9961 = memo(function HeavyComponent9961({ config }: HeavyProps9961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9961.displayName = 'HeavyComponent9961';
export default HeavyComponent9961;
