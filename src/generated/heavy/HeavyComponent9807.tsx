'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9807<T> = T extends (infer U)[]
  ? DeepReadonlyArray9807<U>
  : T extends object
  ? DeepReadonlyObject9807<T>
  : T;

interface DeepReadonlyArray9807<T> extends ReadonlyArray<DeepReadonly9807<T>> {}

type DeepReadonlyObject9807<T> = {
  readonly [P in keyof T]: DeepReadonly9807<T[P]>;
};

type UnionToIntersection9807<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9807<T> = UnionToIntersection9807<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9807<T extends unknown[], V> = [...T, V];

type TuplifyUnion9807<T, L = LastOf9807<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9807<TuplifyUnion9807<Exclude<T, L>>, L>;

type DeepPartial9807<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9807<T[P]> }
  : T;

type Paths9807<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9807<K, Paths9807<T[K], Prev9807[D]>> : never }[keyof T]
  : never;

type Prev9807 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9807<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9807 {
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

type ConfigPaths9807 = Paths9807<NestedConfig9807>;

interface HeavyProps9807 {
  config: DeepPartial9807<NestedConfig9807>;
  path?: ConfigPaths9807;
}

const HeavyComponent9807 = memo(function HeavyComponent9807({ config }: HeavyProps9807) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9807) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9807 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9807: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9807.displayName = 'HeavyComponent9807';
export default HeavyComponent9807;
