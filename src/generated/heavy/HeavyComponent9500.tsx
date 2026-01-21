'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9500<T> = T extends (infer U)[]
  ? DeepReadonlyArray9500<U>
  : T extends object
  ? DeepReadonlyObject9500<T>
  : T;

interface DeepReadonlyArray9500<T> extends ReadonlyArray<DeepReadonly9500<T>> {}

type DeepReadonlyObject9500<T> = {
  readonly [P in keyof T]: DeepReadonly9500<T[P]>;
};

type UnionToIntersection9500<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9500<T> = UnionToIntersection9500<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9500<T extends unknown[], V> = [...T, V];

type TuplifyUnion9500<T, L = LastOf9500<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9500<TuplifyUnion9500<Exclude<T, L>>, L>;

type DeepPartial9500<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9500<T[P]> }
  : T;

type Paths9500<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9500<K, Paths9500<T[K], Prev9500[D]>> : never }[keyof T]
  : never;

type Prev9500 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9500<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9500 {
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

type ConfigPaths9500 = Paths9500<NestedConfig9500>;

interface HeavyProps9500 {
  config: DeepPartial9500<NestedConfig9500>;
  path?: ConfigPaths9500;
}

const HeavyComponent9500 = memo(function HeavyComponent9500({ config }: HeavyProps9500) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9500) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9500 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9500: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9500.displayName = 'HeavyComponent9500';
export default HeavyComponent9500;
