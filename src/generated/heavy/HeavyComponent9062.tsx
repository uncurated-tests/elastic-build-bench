'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9062<T> = T extends (infer U)[]
  ? DeepReadonlyArray9062<U>
  : T extends object
  ? DeepReadonlyObject9062<T>
  : T;

interface DeepReadonlyArray9062<T> extends ReadonlyArray<DeepReadonly9062<T>> {}

type DeepReadonlyObject9062<T> = {
  readonly [P in keyof T]: DeepReadonly9062<T[P]>;
};

type UnionToIntersection9062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9062<T> = UnionToIntersection9062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9062<T extends unknown[], V> = [...T, V];

type TuplifyUnion9062<T, L = LastOf9062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9062<TuplifyUnion9062<Exclude<T, L>>, L>;

type DeepPartial9062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9062<T[P]> }
  : T;

type Paths9062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9062<K, Paths9062<T[K], Prev9062[D]>> : never }[keyof T]
  : never;

type Prev9062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9062 {
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

type ConfigPaths9062 = Paths9062<NestedConfig9062>;

interface HeavyProps9062 {
  config: DeepPartial9062<NestedConfig9062>;
  path?: ConfigPaths9062;
}

const HeavyComponent9062 = memo(function HeavyComponent9062({ config }: HeavyProps9062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9062.displayName = 'HeavyComponent9062';
export default HeavyComponent9062;
