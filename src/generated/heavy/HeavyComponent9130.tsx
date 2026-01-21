'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9130<T> = T extends (infer U)[]
  ? DeepReadonlyArray9130<U>
  : T extends object
  ? DeepReadonlyObject9130<T>
  : T;

interface DeepReadonlyArray9130<T> extends ReadonlyArray<DeepReadonly9130<T>> {}

type DeepReadonlyObject9130<T> = {
  readonly [P in keyof T]: DeepReadonly9130<T[P]>;
};

type UnionToIntersection9130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9130<T> = UnionToIntersection9130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9130<T extends unknown[], V> = [...T, V];

type TuplifyUnion9130<T, L = LastOf9130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9130<TuplifyUnion9130<Exclude<T, L>>, L>;

type DeepPartial9130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9130<T[P]> }
  : T;

type Paths9130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9130<K, Paths9130<T[K], Prev9130[D]>> : never }[keyof T]
  : never;

type Prev9130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9130 {
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

type ConfigPaths9130 = Paths9130<NestedConfig9130>;

interface HeavyProps9130 {
  config: DeepPartial9130<NestedConfig9130>;
  path?: ConfigPaths9130;
}

const HeavyComponent9130 = memo(function HeavyComponent9130({ config }: HeavyProps9130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9130.displayName = 'HeavyComponent9130';
export default HeavyComponent9130;
