'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9186<T> = T extends (infer U)[]
  ? DeepReadonlyArray9186<U>
  : T extends object
  ? DeepReadonlyObject9186<T>
  : T;

interface DeepReadonlyArray9186<T> extends ReadonlyArray<DeepReadonly9186<T>> {}

type DeepReadonlyObject9186<T> = {
  readonly [P in keyof T]: DeepReadonly9186<T[P]>;
};

type UnionToIntersection9186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9186<T> = UnionToIntersection9186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9186<T extends unknown[], V> = [...T, V];

type TuplifyUnion9186<T, L = LastOf9186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9186<TuplifyUnion9186<Exclude<T, L>>, L>;

type DeepPartial9186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9186<T[P]> }
  : T;

type Paths9186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9186<K, Paths9186<T[K], Prev9186[D]>> : never }[keyof T]
  : never;

type Prev9186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9186 {
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

type ConfigPaths9186 = Paths9186<NestedConfig9186>;

interface HeavyProps9186 {
  config: DeepPartial9186<NestedConfig9186>;
  path?: ConfigPaths9186;
}

const HeavyComponent9186 = memo(function HeavyComponent9186({ config }: HeavyProps9186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9186.displayName = 'HeavyComponent9186';
export default HeavyComponent9186;
