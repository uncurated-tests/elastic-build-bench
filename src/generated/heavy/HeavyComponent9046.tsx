'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9046<T> = T extends (infer U)[]
  ? DeepReadonlyArray9046<U>
  : T extends object
  ? DeepReadonlyObject9046<T>
  : T;

interface DeepReadonlyArray9046<T> extends ReadonlyArray<DeepReadonly9046<T>> {}

type DeepReadonlyObject9046<T> = {
  readonly [P in keyof T]: DeepReadonly9046<T[P]>;
};

type UnionToIntersection9046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9046<T> = UnionToIntersection9046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9046<T extends unknown[], V> = [...T, V];

type TuplifyUnion9046<T, L = LastOf9046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9046<TuplifyUnion9046<Exclude<T, L>>, L>;

type DeepPartial9046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9046<T[P]> }
  : T;

type Paths9046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9046<K, Paths9046<T[K], Prev9046[D]>> : never }[keyof T]
  : never;

type Prev9046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9046 {
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

type ConfigPaths9046 = Paths9046<NestedConfig9046>;

interface HeavyProps9046 {
  config: DeepPartial9046<NestedConfig9046>;
  path?: ConfigPaths9046;
}

const HeavyComponent9046 = memo(function HeavyComponent9046({ config }: HeavyProps9046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9046.displayName = 'HeavyComponent9046';
export default HeavyComponent9046;
