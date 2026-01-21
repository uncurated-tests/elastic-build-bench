'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9997<T> = T extends (infer U)[]
  ? DeepReadonlyArray9997<U>
  : T extends object
  ? DeepReadonlyObject9997<T>
  : T;

interface DeepReadonlyArray9997<T> extends ReadonlyArray<DeepReadonly9997<T>> {}

type DeepReadonlyObject9997<T> = {
  readonly [P in keyof T]: DeepReadonly9997<T[P]>;
};

type UnionToIntersection9997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9997<T> = UnionToIntersection9997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9997<T extends unknown[], V> = [...T, V];

type TuplifyUnion9997<T, L = LastOf9997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9997<TuplifyUnion9997<Exclude<T, L>>, L>;

type DeepPartial9997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9997<T[P]> }
  : T;

type Paths9997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9997<K, Paths9997<T[K], Prev9997[D]>> : never }[keyof T]
  : never;

type Prev9997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9997 {
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

type ConfigPaths9997 = Paths9997<NestedConfig9997>;

interface HeavyProps9997 {
  config: DeepPartial9997<NestedConfig9997>;
  path?: ConfigPaths9997;
}

const HeavyComponent9997 = memo(function HeavyComponent9997({ config }: HeavyProps9997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9997.displayName = 'HeavyComponent9997';
export default HeavyComponent9997;
