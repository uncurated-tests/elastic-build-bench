'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9972<T> = T extends (infer U)[]
  ? DeepReadonlyArray9972<U>
  : T extends object
  ? DeepReadonlyObject9972<T>
  : T;

interface DeepReadonlyArray9972<T> extends ReadonlyArray<DeepReadonly9972<T>> {}

type DeepReadonlyObject9972<T> = {
  readonly [P in keyof T]: DeepReadonly9972<T[P]>;
};

type UnionToIntersection9972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9972<T> = UnionToIntersection9972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9972<T extends unknown[], V> = [...T, V];

type TuplifyUnion9972<T, L = LastOf9972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9972<TuplifyUnion9972<Exclude<T, L>>, L>;

type DeepPartial9972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9972<T[P]> }
  : T;

type Paths9972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9972<K, Paths9972<T[K], Prev9972[D]>> : never }[keyof T]
  : never;

type Prev9972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9972 {
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

type ConfigPaths9972 = Paths9972<NestedConfig9972>;

interface HeavyProps9972 {
  config: DeepPartial9972<NestedConfig9972>;
  path?: ConfigPaths9972;
}

const HeavyComponent9972 = memo(function HeavyComponent9972({ config }: HeavyProps9972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9972.displayName = 'HeavyComponent9972';
export default HeavyComponent9972;
