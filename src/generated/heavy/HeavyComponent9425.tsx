'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9425<T> = T extends (infer U)[]
  ? DeepReadonlyArray9425<U>
  : T extends object
  ? DeepReadonlyObject9425<T>
  : T;

interface DeepReadonlyArray9425<T> extends ReadonlyArray<DeepReadonly9425<T>> {}

type DeepReadonlyObject9425<T> = {
  readonly [P in keyof T]: DeepReadonly9425<T[P]>;
};

type UnionToIntersection9425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9425<T> = UnionToIntersection9425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9425<T extends unknown[], V> = [...T, V];

type TuplifyUnion9425<T, L = LastOf9425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9425<TuplifyUnion9425<Exclude<T, L>>, L>;

type DeepPartial9425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9425<T[P]> }
  : T;

type Paths9425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9425<K, Paths9425<T[K], Prev9425[D]>> : never }[keyof T]
  : never;

type Prev9425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9425 {
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

type ConfigPaths9425 = Paths9425<NestedConfig9425>;

interface HeavyProps9425 {
  config: DeepPartial9425<NestedConfig9425>;
  path?: ConfigPaths9425;
}

const HeavyComponent9425 = memo(function HeavyComponent9425({ config }: HeavyProps9425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9425.displayName = 'HeavyComponent9425';
export default HeavyComponent9425;
