'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9363<T> = T extends (infer U)[]
  ? DeepReadonlyArray9363<U>
  : T extends object
  ? DeepReadonlyObject9363<T>
  : T;

interface DeepReadonlyArray9363<T> extends ReadonlyArray<DeepReadonly9363<T>> {}

type DeepReadonlyObject9363<T> = {
  readonly [P in keyof T]: DeepReadonly9363<T[P]>;
};

type UnionToIntersection9363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9363<T> = UnionToIntersection9363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9363<T extends unknown[], V> = [...T, V];

type TuplifyUnion9363<T, L = LastOf9363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9363<TuplifyUnion9363<Exclude<T, L>>, L>;

type DeepPartial9363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9363<T[P]> }
  : T;

type Paths9363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9363<K, Paths9363<T[K], Prev9363[D]>> : never }[keyof T]
  : never;

type Prev9363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9363 {
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

type ConfigPaths9363 = Paths9363<NestedConfig9363>;

interface HeavyProps9363 {
  config: DeepPartial9363<NestedConfig9363>;
  path?: ConfigPaths9363;
}

const HeavyComponent9363 = memo(function HeavyComponent9363({ config }: HeavyProps9363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9363.displayName = 'HeavyComponent9363';
export default HeavyComponent9363;
