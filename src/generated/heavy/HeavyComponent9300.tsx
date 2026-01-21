'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9300<T> = T extends (infer U)[]
  ? DeepReadonlyArray9300<U>
  : T extends object
  ? DeepReadonlyObject9300<T>
  : T;

interface DeepReadonlyArray9300<T> extends ReadonlyArray<DeepReadonly9300<T>> {}

type DeepReadonlyObject9300<T> = {
  readonly [P in keyof T]: DeepReadonly9300<T[P]>;
};

type UnionToIntersection9300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9300<T> = UnionToIntersection9300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9300<T extends unknown[], V> = [...T, V];

type TuplifyUnion9300<T, L = LastOf9300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9300<TuplifyUnion9300<Exclude<T, L>>, L>;

type DeepPartial9300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9300<T[P]> }
  : T;

type Paths9300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9300<K, Paths9300<T[K], Prev9300[D]>> : never }[keyof T]
  : never;

type Prev9300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9300 {
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

type ConfigPaths9300 = Paths9300<NestedConfig9300>;

interface HeavyProps9300 {
  config: DeepPartial9300<NestedConfig9300>;
  path?: ConfigPaths9300;
}

const HeavyComponent9300 = memo(function HeavyComponent9300({ config }: HeavyProps9300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9300.displayName = 'HeavyComponent9300';
export default HeavyComponent9300;
