'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9700<T> = T extends (infer U)[]
  ? DeepReadonlyArray9700<U>
  : T extends object
  ? DeepReadonlyObject9700<T>
  : T;

interface DeepReadonlyArray9700<T> extends ReadonlyArray<DeepReadonly9700<T>> {}

type DeepReadonlyObject9700<T> = {
  readonly [P in keyof T]: DeepReadonly9700<T[P]>;
};

type UnionToIntersection9700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9700<T> = UnionToIntersection9700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9700<T extends unknown[], V> = [...T, V];

type TuplifyUnion9700<T, L = LastOf9700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9700<TuplifyUnion9700<Exclude<T, L>>, L>;

type DeepPartial9700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9700<T[P]> }
  : T;

type Paths9700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9700<K, Paths9700<T[K], Prev9700[D]>> : never }[keyof T]
  : never;

type Prev9700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9700 {
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

type ConfigPaths9700 = Paths9700<NestedConfig9700>;

interface HeavyProps9700 {
  config: DeepPartial9700<NestedConfig9700>;
  path?: ConfigPaths9700;
}

const HeavyComponent9700 = memo(function HeavyComponent9700({ config }: HeavyProps9700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9700.displayName = 'HeavyComponent9700';
export default HeavyComponent9700;
