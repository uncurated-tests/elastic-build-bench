'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9796<T> = T extends (infer U)[]
  ? DeepReadonlyArray9796<U>
  : T extends object
  ? DeepReadonlyObject9796<T>
  : T;

interface DeepReadonlyArray9796<T> extends ReadonlyArray<DeepReadonly9796<T>> {}

type DeepReadonlyObject9796<T> = {
  readonly [P in keyof T]: DeepReadonly9796<T[P]>;
};

type UnionToIntersection9796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9796<T> = UnionToIntersection9796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9796<T extends unknown[], V> = [...T, V];

type TuplifyUnion9796<T, L = LastOf9796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9796<TuplifyUnion9796<Exclude<T, L>>, L>;

type DeepPartial9796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9796<T[P]> }
  : T;

type Paths9796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9796<K, Paths9796<T[K], Prev9796[D]>> : never }[keyof T]
  : never;

type Prev9796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9796 {
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

type ConfigPaths9796 = Paths9796<NestedConfig9796>;

interface HeavyProps9796 {
  config: DeepPartial9796<NestedConfig9796>;
  path?: ConfigPaths9796;
}

const HeavyComponent9796 = memo(function HeavyComponent9796({ config }: HeavyProps9796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9796.displayName = 'HeavyComponent9796';
export default HeavyComponent9796;
