'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9605<T> = T extends (infer U)[]
  ? DeepReadonlyArray9605<U>
  : T extends object
  ? DeepReadonlyObject9605<T>
  : T;

interface DeepReadonlyArray9605<T> extends ReadonlyArray<DeepReadonly9605<T>> {}

type DeepReadonlyObject9605<T> = {
  readonly [P in keyof T]: DeepReadonly9605<T[P]>;
};

type UnionToIntersection9605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9605<T> = UnionToIntersection9605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9605<T extends unknown[], V> = [...T, V];

type TuplifyUnion9605<T, L = LastOf9605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9605<TuplifyUnion9605<Exclude<T, L>>, L>;

type DeepPartial9605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9605<T[P]> }
  : T;

type Paths9605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9605<K, Paths9605<T[K], Prev9605[D]>> : never }[keyof T]
  : never;

type Prev9605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9605 {
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

type ConfigPaths9605 = Paths9605<NestedConfig9605>;

interface HeavyProps9605 {
  config: DeepPartial9605<NestedConfig9605>;
  path?: ConfigPaths9605;
}

const HeavyComponent9605 = memo(function HeavyComponent9605({ config }: HeavyProps9605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9605.displayName = 'HeavyComponent9605';
export default HeavyComponent9605;
