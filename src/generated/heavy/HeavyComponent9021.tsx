'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9021<T> = T extends (infer U)[]
  ? DeepReadonlyArray9021<U>
  : T extends object
  ? DeepReadonlyObject9021<T>
  : T;

interface DeepReadonlyArray9021<T> extends ReadonlyArray<DeepReadonly9021<T>> {}

type DeepReadonlyObject9021<T> = {
  readonly [P in keyof T]: DeepReadonly9021<T[P]>;
};

type UnionToIntersection9021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9021<T> = UnionToIntersection9021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9021<T extends unknown[], V> = [...T, V];

type TuplifyUnion9021<T, L = LastOf9021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9021<TuplifyUnion9021<Exclude<T, L>>, L>;

type DeepPartial9021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9021<T[P]> }
  : T;

type Paths9021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9021<K, Paths9021<T[K], Prev9021[D]>> : never }[keyof T]
  : never;

type Prev9021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9021 {
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

type ConfigPaths9021 = Paths9021<NestedConfig9021>;

interface HeavyProps9021 {
  config: DeepPartial9021<NestedConfig9021>;
  path?: ConfigPaths9021;
}

const HeavyComponent9021 = memo(function HeavyComponent9021({ config }: HeavyProps9021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9021.displayName = 'HeavyComponent9021';
export default HeavyComponent9021;
