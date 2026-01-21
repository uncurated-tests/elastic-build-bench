'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9040<T> = T extends (infer U)[]
  ? DeepReadonlyArray9040<U>
  : T extends object
  ? DeepReadonlyObject9040<T>
  : T;

interface DeepReadonlyArray9040<T> extends ReadonlyArray<DeepReadonly9040<T>> {}

type DeepReadonlyObject9040<T> = {
  readonly [P in keyof T]: DeepReadonly9040<T[P]>;
};

type UnionToIntersection9040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9040<T> = UnionToIntersection9040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9040<T extends unknown[], V> = [...T, V];

type TuplifyUnion9040<T, L = LastOf9040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9040<TuplifyUnion9040<Exclude<T, L>>, L>;

type DeepPartial9040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9040<T[P]> }
  : T;

type Paths9040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9040<K, Paths9040<T[K], Prev9040[D]>> : never }[keyof T]
  : never;

type Prev9040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9040 {
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

type ConfigPaths9040 = Paths9040<NestedConfig9040>;

interface HeavyProps9040 {
  config: DeepPartial9040<NestedConfig9040>;
  path?: ConfigPaths9040;
}

const HeavyComponent9040 = memo(function HeavyComponent9040({ config }: HeavyProps9040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9040.displayName = 'HeavyComponent9040';
export default HeavyComponent9040;
