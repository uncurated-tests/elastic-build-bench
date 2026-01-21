'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9640<T> = T extends (infer U)[]
  ? DeepReadonlyArray9640<U>
  : T extends object
  ? DeepReadonlyObject9640<T>
  : T;

interface DeepReadonlyArray9640<T> extends ReadonlyArray<DeepReadonly9640<T>> {}

type DeepReadonlyObject9640<T> = {
  readonly [P in keyof T]: DeepReadonly9640<T[P]>;
};

type UnionToIntersection9640<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9640<T> = UnionToIntersection9640<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9640<T extends unknown[], V> = [...T, V];

type TuplifyUnion9640<T, L = LastOf9640<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9640<TuplifyUnion9640<Exclude<T, L>>, L>;

type DeepPartial9640<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9640<T[P]> }
  : T;

type Paths9640<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9640<K, Paths9640<T[K], Prev9640[D]>> : never }[keyof T]
  : never;

type Prev9640 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9640<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9640 {
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

type ConfigPaths9640 = Paths9640<NestedConfig9640>;

interface HeavyProps9640 {
  config: DeepPartial9640<NestedConfig9640>;
  path?: ConfigPaths9640;
}

const HeavyComponent9640 = memo(function HeavyComponent9640({ config }: HeavyProps9640) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9640) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9640 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9640: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9640.displayName = 'HeavyComponent9640';
export default HeavyComponent9640;
