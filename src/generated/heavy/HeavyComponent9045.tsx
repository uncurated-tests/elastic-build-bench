'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9045<T> = T extends (infer U)[]
  ? DeepReadonlyArray9045<U>
  : T extends object
  ? DeepReadonlyObject9045<T>
  : T;

interface DeepReadonlyArray9045<T> extends ReadonlyArray<DeepReadonly9045<T>> {}

type DeepReadonlyObject9045<T> = {
  readonly [P in keyof T]: DeepReadonly9045<T[P]>;
};

type UnionToIntersection9045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9045<T> = UnionToIntersection9045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9045<T extends unknown[], V> = [...T, V];

type TuplifyUnion9045<T, L = LastOf9045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9045<TuplifyUnion9045<Exclude<T, L>>, L>;

type DeepPartial9045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9045<T[P]> }
  : T;

type Paths9045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9045<K, Paths9045<T[K], Prev9045[D]>> : never }[keyof T]
  : never;

type Prev9045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9045 {
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

type ConfigPaths9045 = Paths9045<NestedConfig9045>;

interface HeavyProps9045 {
  config: DeepPartial9045<NestedConfig9045>;
  path?: ConfigPaths9045;
}

const HeavyComponent9045 = memo(function HeavyComponent9045({ config }: HeavyProps9045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9045.displayName = 'HeavyComponent9045';
export default HeavyComponent9045;
