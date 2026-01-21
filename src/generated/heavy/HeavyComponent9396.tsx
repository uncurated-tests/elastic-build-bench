'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9396<T> = T extends (infer U)[]
  ? DeepReadonlyArray9396<U>
  : T extends object
  ? DeepReadonlyObject9396<T>
  : T;

interface DeepReadonlyArray9396<T> extends ReadonlyArray<DeepReadonly9396<T>> {}

type DeepReadonlyObject9396<T> = {
  readonly [P in keyof T]: DeepReadonly9396<T[P]>;
};

type UnionToIntersection9396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9396<T> = UnionToIntersection9396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9396<T extends unknown[], V> = [...T, V];

type TuplifyUnion9396<T, L = LastOf9396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9396<TuplifyUnion9396<Exclude<T, L>>, L>;

type DeepPartial9396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9396<T[P]> }
  : T;

type Paths9396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9396<K, Paths9396<T[K], Prev9396[D]>> : never }[keyof T]
  : never;

type Prev9396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9396 {
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

type ConfigPaths9396 = Paths9396<NestedConfig9396>;

interface HeavyProps9396 {
  config: DeepPartial9396<NestedConfig9396>;
  path?: ConfigPaths9396;
}

const HeavyComponent9396 = memo(function HeavyComponent9396({ config }: HeavyProps9396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9396.displayName = 'HeavyComponent9396';
export default HeavyComponent9396;
