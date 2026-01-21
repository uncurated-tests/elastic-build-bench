'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9140<T> = T extends (infer U)[]
  ? DeepReadonlyArray9140<U>
  : T extends object
  ? DeepReadonlyObject9140<T>
  : T;

interface DeepReadonlyArray9140<T> extends ReadonlyArray<DeepReadonly9140<T>> {}

type DeepReadonlyObject9140<T> = {
  readonly [P in keyof T]: DeepReadonly9140<T[P]>;
};

type UnionToIntersection9140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9140<T> = UnionToIntersection9140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9140<T extends unknown[], V> = [...T, V];

type TuplifyUnion9140<T, L = LastOf9140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9140<TuplifyUnion9140<Exclude<T, L>>, L>;

type DeepPartial9140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9140<T[P]> }
  : T;

type Paths9140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9140<K, Paths9140<T[K], Prev9140[D]>> : never }[keyof T]
  : never;

type Prev9140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9140 {
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

type ConfigPaths9140 = Paths9140<NestedConfig9140>;

interface HeavyProps9140 {
  config: DeepPartial9140<NestedConfig9140>;
  path?: ConfigPaths9140;
}

const HeavyComponent9140 = memo(function HeavyComponent9140({ config }: HeavyProps9140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9140.displayName = 'HeavyComponent9140';
export default HeavyComponent9140;
