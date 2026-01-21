'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9657<T> = T extends (infer U)[]
  ? DeepReadonlyArray9657<U>
  : T extends object
  ? DeepReadonlyObject9657<T>
  : T;

interface DeepReadonlyArray9657<T> extends ReadonlyArray<DeepReadonly9657<T>> {}

type DeepReadonlyObject9657<T> = {
  readonly [P in keyof T]: DeepReadonly9657<T[P]>;
};

type UnionToIntersection9657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9657<T> = UnionToIntersection9657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9657<T extends unknown[], V> = [...T, V];

type TuplifyUnion9657<T, L = LastOf9657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9657<TuplifyUnion9657<Exclude<T, L>>, L>;

type DeepPartial9657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9657<T[P]> }
  : T;

type Paths9657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9657<K, Paths9657<T[K], Prev9657[D]>> : never }[keyof T]
  : never;

type Prev9657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9657 {
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

type ConfigPaths9657 = Paths9657<NestedConfig9657>;

interface HeavyProps9657 {
  config: DeepPartial9657<NestedConfig9657>;
  path?: ConfigPaths9657;
}

const HeavyComponent9657 = memo(function HeavyComponent9657({ config }: HeavyProps9657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9657.displayName = 'HeavyComponent9657';
export default HeavyComponent9657;
