'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9806<T> = T extends (infer U)[]
  ? DeepReadonlyArray9806<U>
  : T extends object
  ? DeepReadonlyObject9806<T>
  : T;

interface DeepReadonlyArray9806<T> extends ReadonlyArray<DeepReadonly9806<T>> {}

type DeepReadonlyObject9806<T> = {
  readonly [P in keyof T]: DeepReadonly9806<T[P]>;
};

type UnionToIntersection9806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9806<T> = UnionToIntersection9806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9806<T extends unknown[], V> = [...T, V];

type TuplifyUnion9806<T, L = LastOf9806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9806<TuplifyUnion9806<Exclude<T, L>>, L>;

type DeepPartial9806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9806<T[P]> }
  : T;

type Paths9806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9806<K, Paths9806<T[K], Prev9806[D]>> : never }[keyof T]
  : never;

type Prev9806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9806 {
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

type ConfigPaths9806 = Paths9806<NestedConfig9806>;

interface HeavyProps9806 {
  config: DeepPartial9806<NestedConfig9806>;
  path?: ConfigPaths9806;
}

const HeavyComponent9806 = memo(function HeavyComponent9806({ config }: HeavyProps9806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9806.displayName = 'HeavyComponent9806';
export default HeavyComponent9806;
