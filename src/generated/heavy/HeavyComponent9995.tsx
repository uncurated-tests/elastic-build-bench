'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9995<T> = T extends (infer U)[]
  ? DeepReadonlyArray9995<U>
  : T extends object
  ? DeepReadonlyObject9995<T>
  : T;

interface DeepReadonlyArray9995<T> extends ReadonlyArray<DeepReadonly9995<T>> {}

type DeepReadonlyObject9995<T> = {
  readonly [P in keyof T]: DeepReadonly9995<T[P]>;
};

type UnionToIntersection9995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9995<T> = UnionToIntersection9995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9995<T extends unknown[], V> = [...T, V];

type TuplifyUnion9995<T, L = LastOf9995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9995<TuplifyUnion9995<Exclude<T, L>>, L>;

type DeepPartial9995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9995<T[P]> }
  : T;

type Paths9995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9995<K, Paths9995<T[K], Prev9995[D]>> : never }[keyof T]
  : never;

type Prev9995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9995 {
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

type ConfigPaths9995 = Paths9995<NestedConfig9995>;

interface HeavyProps9995 {
  config: DeepPartial9995<NestedConfig9995>;
  path?: ConfigPaths9995;
}

const HeavyComponent9995 = memo(function HeavyComponent9995({ config }: HeavyProps9995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9995.displayName = 'HeavyComponent9995';
export default HeavyComponent9995;
